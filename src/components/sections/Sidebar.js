import React from 'react';

// STYLES
import styled from 'styled-components';
import Heading from '../interface/Heading';

const StyledWrapper = styled.div`
  flex-shrink: 0;
  width: 250px;
  min-height: 500px;
`;

const StyledHeading = styled(Heading)`
  padding-bottom: 15px;
  padding-left: 15px;
  text-align: left;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: left;
`;

const StyledListItem = styled.li`
  box-sizing: border-box;
  padding: 15px 20px;
  background-color: white;
  border-left: 15px solid transparent;
  border-bottom: 1px solid #ddd;
  transition: 0.2s;
  cursor: pointer;

  :hover {
    border-left: 10px solid #ddd;
    padding-left: 30px;
    z-index: 999;
  }
`;

const Sidebar = () => (
  <>
    <StyledWrapper>
      <StyledHeading>Kategorie główne</StyledHeading>
      <StyledList>
        <StyledListItem>Napoje</StyledListItem>
        <StyledListItem>Desery</StyledListItem>
        <StyledListItem>Zupy</StyledListItem>
        <StyledListItem>Dania</StyledListItem>
        <StyledListItem>Dodatki</StyledListItem>
        <StyledListItem>Przekąski</StyledListItem>
        <StyledListItem>Przetwory</StyledListItem>
        <StyledListItem>Pieczywo</StyledListItem>
      </StyledList>
    </StyledWrapper>
  </>
);

export default Sidebar;
