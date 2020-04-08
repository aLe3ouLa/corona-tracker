import React from "react";
import DashboardCard from "../../fragments/dashboard-cards";
import Wrapper from "../../fragments/wrapper";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;
const DashboardCards = ({ confirmed, recovered, deaths }) => {
  return (
    <Wrapper>
      <Title>Corona update</Title>
      <CardsContainer>
        <DashboardCard label="Confirmed" number={confirmed.value} confirmed />
        <DashboardCard label="Recovered" number={recovered.value} recovered />
        <DashboardCard label="Deaths" number={deaths.value} deaths />
      </CardsContainer>
    </Wrapper>
  );
};

export default DashboardCards;
