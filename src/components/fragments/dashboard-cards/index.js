import React from "react";
import styled, { css } from "styled-components";

const DashboardCardContainer = styled.div`
  flex-basis: 25%;
  text-align: center;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

const Label = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 1.2rem;
  ${({ recovered }) =>
    recovered &&
    css`
      color: ${({ theme }) => theme.color.recovered};
      background-color: ${({ theme }) => theme.color.recoveredMedium};
    `};

  ${({ confirmed }) =>
    confirmed &&
    css`
      color: ${({ theme }) => theme.color.confirmed};
      background-color: ${({ theme }) => theme.color.confirmedMedium};
    `};

  ${({ deaths }) =>
    deaths &&
    css`
      color: ${({ theme }) => theme.color.deaths};
      background-color: ${({ theme }) => theme.color.deathsMedium};
    `};
`;

const Statistic = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 2rem;
  padding: 2rem;
  ${({ recovered }) =>
    recovered &&
    css`
      color: ${({ theme }) => theme.color.recovered};
      background-color: ${({ theme }) => theme.color.recoveredLight};
    `};

  ${({ confirmed }) =>
    confirmed &&
    css`
      color: ${({ theme }) => theme.color.confirmed};
      background-color: ${({ theme }) => theme.color.confirmedLight};
    `};

  ${({ deaths }) =>
    deaths &&
    css`
      color: ${({ theme }) => theme.color.deaths};
      background-color: ${({ theme }) => theme.color.deathsLight};
    `};
`;

const DashboardCard = ({ number, label, recovered, deaths, confirmed }) => {
  return (
    <DashboardCardContainer>
      <Statistic recovered={recovered} deaths={deaths} confirmed={confirmed}>
        {number}
      </Statistic>
      <Label recovered={recovered} deaths={deaths} confirmed={confirmed}>
        {label}
      </Label>
    </DashboardCardContainer>
  );
};

export default DashboardCard;
