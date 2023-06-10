import styled from 'styled-components';

export const ListItem = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #bdbdbd;
`;

export const ContactItemBtn = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  padding: 0;
  color: tomato;
  background-color: #fff;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 250ms ease-in-out;
  :hover,
  :focus {
    color: red;
  }
`;
