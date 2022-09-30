import styled from 'styled-components';
export const List = styled.ul`
  margin: 0;
  & li {
    margin-bottom: 15px;
    font-size: 20px;
    color: black;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
