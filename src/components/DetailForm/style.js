import styled from 'styled-components';

export const Label = styled.h3`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.6);
  ::after {
    content: ' *';
    color: red;
  }
`;

export const Input = styled.input`
  background: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  border: 1px solid #d7d7e7;
  font-size: 18px;
  padding: 10px 15px;
  outline: none;
  font-family: inherit;
  color: rgba(0, 0, 0, 0.8);
  width: 80%;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const ItemWrapper = styled.div`
  flex: 33.3%;
`;
