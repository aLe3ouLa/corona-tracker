import React, { useEffect, useState } from "react";
import Home from "./pages/homepage";
import axios from "axios";
import Topbar from "./components/layout/topbar";

const App = () => {
  const [recovered, setRecovered] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [deaths, setDeaths] = useState({});

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((response) => response.data)
      .then((data) => {
        setConfirmed(data.confirmed);
        setDeaths(data.deaths);
        setRecovered(data.recovered);
      });
  }, []);

  return (
    <>
      <Topbar />
      <Home recovered={recovered} confirmed={confirmed} deaths={deaths} />
    </>
  );
};

export default App;
