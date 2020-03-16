import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
  color: #6e7790;
  font-size: 22px;
  margin: 0;
  margin-bottom: 10px;
  font-weight: 300;
`;

const Children = styled.div`
  padding: 10px 0 20px 0;
`;

const Section = ({ title, children }) => (
  <>
    <Title data-testid='title'>{title}</Title>
    <Children data-testid='children'>{children}</Children>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
