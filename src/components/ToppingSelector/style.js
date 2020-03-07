import styled from 'styled-components';

export const ToppingSelectorWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const Topping = styled.div`
  margin: 20px 10px 0 0;
  padding: 10px 15px 10px 53px;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.05);
  cursor: pointer;
  overflow: hidden;
  user-select: none;
  position: relative;
  flex: 18%;
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
