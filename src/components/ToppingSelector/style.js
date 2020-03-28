import styled from 'styled-components';

export const ToppingSelectorWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Topping = styled.button`
  margin: 20px 10px 0 0;
  padding: 10px 15px 10px 53px;
  outline: none;
  border: none;
  background: transparent;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;

  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  color: ${({ selected }) => (selected ? '#fff' : 'rgba(0, 0, 0, 0.7)')};
  background: ${({ selected }) =>
    selected ? '#1a98e1' : 'rgba(0, 0, 0, 0.05)'};
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  position: relative;
  flex: calc(100% / 5 - 20px);
`;

export const ToppingIcon = styled.span`
  background: url(${props => props.toppingSVG}) #e6e6e6 no-repeat center center;
  background-size: 30px;
  width: 40px;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const Label = styled.h3`
  color: #6e7790;
  font-size: 16px;
  position: relative;
  margin-bottom: 10px;
`;

export const Alarm = styled.span`
  float: right;
  color: #e01d3b;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
`;
