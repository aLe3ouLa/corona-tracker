import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 0.5rem 2rem;
`;

const NavigationList = styled.ul`
  display: flex;
  & > li:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
`;

const Topbar = () => {
  return (
    <Header>
      <Title>Corona Tracker</Title>

      <nav>
        <NavigationList>
          <li>Travel Alert</li>
          <li>What is COVID-19</li>
          <li>Prevention</li>
          <li>Analytics</li>
          <li>About</li>
        </NavigationList>
      </nav>
    </Header>
  );
};

export default Topbar;
