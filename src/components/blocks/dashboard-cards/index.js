import React, { useState, useEffect } from "react";
import DashboardCard from "../../fragments/dashboard-cards";
import Wrapper from "../../fragments/wrapper";
import styled from "styled-components";
import axios from "axios";

const CardsContainer = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const DashboardCards = ({ confirmed, recovered, deaths, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState("Global");
  const [selectedCases, setSelectedCases] = useState({});
  const countryOptions = countries.map((country, index) => {
    return <option key={index}>{country.name}</option>;
  });

  useEffect(() => {
    if (selectedCountry !== "Global") {
      axios
        .get(`https://covid19.mathdro.id/api/countries/${selectedCountry}`)
        .then((response) => response.data)
        .then((data) => {
          setSelectedCases(data);
        });
    }
  }, [selectedCountry]);

  const getCountryData = (event) => {
    const value = event.target.value;
    setSelectedCountry(value);
  };

  return (
    <Wrapper>
      <Title>Corona update - {selectedCountry}</Title>
      <CardsContainer>
        <select onChange={(e) => getCountryData(e)}>{countryOptions}</select>
        <DashboardCard
          label="Confirmed"
          number={
            selectedCountry === "Global"
              ? confirmed.value
              : selectedCases &&
                selectedCases.confirmed &&
                selectedCases.confirmed.value
              ? selectedCases.confirmed.value
              : confirmed.value
          }
          confirmed
        />
        <DashboardCard
          label="Recovered"
          number={
            selectedCountry === "Global"
              ? recovered.value
              : selectedCases &&
                selectedCases.recovered &&
                selectedCases.recovered.value
              ? selectedCases.recovered.value
              : recovered.value
          }
          recovered
        />
        <DashboardCard
          label="Deaths"
          number={
            selectedCountry === "Global"
              ? deaths.value
              : selectedCases &&
                selectedCases.deaths &&
                selectedCases.deaths.value
              ? selectedCases.deaths.value
              : deaths.value
          }
          deaths
        />
      </CardsContainer>
    </Wrapper>
  );
};

export default DashboardCards;
