import styled from 'styled-components';
export const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  background-color: aqua;
  border: 1px solid rgb(200, 201, 201);
  margin-right: 10px;
  cursor: pointer;
  &:last-child {
    margin: 0;
  }
  &:hover,
  &:focus {
    background-color: rgb(244, 130, 16);
    border: 1px solid rgb(244, 138, 25);
    color: azure;
  }
`;
