import styled from 'styled-components';

export const AllSelectorWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const OneSelectorWrapper = styled.div`
  cursor: pointer;
  flex: 33.3%;
  display: flex;
  flex-flow: row;
  align-items: center;
`;

export const Label = styled.h3`
  color: #6e7790;
  font-size: 16px;
  position: relative;
  margin-bottom: 10px;
`;

export const PizzaSVG = styled.img`
  margin: 1rem 1rem;
  width: ${props => `${props.size}rem`};
`;
export const PizzaLabel = styled.span`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
`;
