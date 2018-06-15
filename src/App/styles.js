import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 30px 50px;
  height: 130px;
  width: 575px;
`;

export const Header = styled.div`
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NextWords = styled.div`
  grid-row: 2/3;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.div`
  border: 1px solid black;
  border-radius: 3px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Save = styled.div`
  grid-row: 3/4;
  border: 1px solid black;
  border-radius: 3px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5 auto;
`;
