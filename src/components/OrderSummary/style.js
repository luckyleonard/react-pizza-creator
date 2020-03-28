import styled from 'styled-components';

export const SizeSummary = styled.h3`
  font-size: 22px;
  font-weight: 300;
  margin: 0;
  position: relative;
`;

export const SizePriceTag = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  ::before {
    content: '$';
  }
`;

export const ToppingSummary = styled.li`
  list-style: none;
  position: relative;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.7);
  margin: 10px 0 0 10px;
`;

export const ToppingPriceTag = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.5);
  ::before {
    content: '$';
  }
`;

export const TotalPrice = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  margin-top: 1rem;
  padding-top: 1rem;
  text-align: right;
  color: rgba(0, 0, 0, 0.6);
  font-size: 24px;
  ::before {
    content: 'Total: $';
  }
`;

export const PlusIcon = styled.i`
  margin: 10px 10px 0 0;
  font-size: 14px;
`;
