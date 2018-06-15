import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: 'Raleway', sans-serif;

  display: grid;
  grid-template-rows: 75px 30px 95px;
  height: 200px;
  width: 575px;
`;

export const Header = styled.div`
  grid-row: 1/2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
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
  cursor: pointer;
  user-select: none;

  &:hover {
    --deep-koamaru: #3b3561;
    --sandstorm: #ead94c;

    border: none;
    background: var(--deep-koamaru);
    color: var(--sandstorm);
    margin: 1px;
  }
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
