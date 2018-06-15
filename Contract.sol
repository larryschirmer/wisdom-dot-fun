pragma solidity ^0.4.17;

contract WisdomFactory {
    address public manager;
    address[] public deployedWisdom;
    mapping(address => bool) public deployedWisdomTable;
    mapping(address => uint) public userTokens;
    
    uint public priceToPost;
    
    constructor(uint amountToSetPrice) public {
        manager = msg.sender;
        priceToPost = amountToSetPrice;
    }
    
    function createWisdom(string wisdom) public payable {
        require(msg.value == priceToPost);
        
        address newDeployedWisdom = new Wisdom(wisdom);
        deployedWisdom.push(newDeployedWisdom);
        deployedWisdomTable[newDeployedWisdom] = true;
        
        uint prevTokens = userTokens[msg.sender];
        userTokens[msg.sender] = prevTokens + 1;
    }
    
    function getDeployedWisdom() public view returns (address[]) {
        return deployedWisdom;
    }
    
    function getWisdom(address wisdomAddress) public view returns (string) {
        require(deployedWisdomTable[wisdomAddress]);
        
        Wisdom WisdomContract = Wisdom(wisdomAddress);
        while (gasleft() > 200000) {
            return WisdomContract.getWisdom();
        }
        
    }
    
    function voteWisdom(address wisdomAddress, int point) public returns (bool) {
        require(userTokens[msg.sender] > 0);
        require(deployedWisdomTable[wisdomAddress]);
        
        Wisdom WisdomContract = Wisdom(wisdomAddress);
        if (point > 0) {
            require(WisdomContract.setPoints(1));
        } else {
            require(WisdomContract.setPoints(-1));
        }
        
        uint prevTokens = userTokens[msg.sender];
        userTokens[msg.sender] = prevTokens - 1;
        
        return true;
    }
    
    function retrieveFunds() public {
        require(msg.sender == manager);
        address contractAddress = this;
        manager.transfer(contractAddress.balance);
    }
    
    function viewFunds() public view returns (uint) {
        require(msg.sender == manager);
        address contractAddress = this;
        
        return contractAddress.balance;
    }
    
}

contract Wisdom {
    address public manager;
    string private savedWisdom;
    int public points;
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    constructor(string wisdom) public {
        manager = msg.sender;
        savedWisdom = wisdom;
        points = 1;
    }
    
    function getWisdom() public view restricted returns (string) {
        if (points > 0) {
            return savedWisdom;
        }
        
        string memory empty;
        return empty;
    }
    
    function setPoints(int point) public restricted returns (bool) {
        if (points > 0) {
            points += point;
        }
        
        return true;
    }
}