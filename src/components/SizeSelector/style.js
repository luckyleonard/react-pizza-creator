import styled from 'styled-components';

export const AllSelectorWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

export const OneSelectorWrapper = styled.button`
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  flex: calc(100% / 3);
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
  width: ${({ size }) => `${size}rem`};
  border: 3px solid ${({ selected }) => (selected ? '#dadada' : 'transparent')};
  background: ${({ selected }) => (selected ? '#f3f3f3' : 'transparent')};
  border-radius: 50%;
  padding: 6px;
`;

export const PizzaLabel = styled.span`
  font-size: 16px;
  color: ${({ selected }) => (selected ? '#1a98e1' : 'rgba(0, 0, 0, 0.7)')};
`;
