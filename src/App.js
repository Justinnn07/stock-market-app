import React, { useEffect, useState } from "react";
import "./App.css";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import API_KEY, { BASE_URL } from "./key";
import Stock from "./Stock";

function App() {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState("");
  const [setCompanyInfo] = useState([]);
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const company = data.map((company) => ({
          name: company.name,
          value: company.symbol,
          percentage: company.changesPercentage,
          rate: company.price,
        }));
        // console.log(company);
        setCompanies(company);
      });
  }, []);
  const onCompanyChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      companyCode === "name"
        ? `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${API_KEY}`
        : `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${API_KEY}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCompany(companyCode);
        setCompanyInfo(data);
      });
  };
  return (
    <div className="app">
      <div className="app-header">
        <h1>STOCK MARKET TRACKER</h1>
        <FormControl>
          <Select onChange={onCompanyChange} variant="outlined">
            <MenuItem value="Worldwide">Worldwide</MenuItem>
            {companies.map((company) => (
              <MenuItem value={company.value}>{company.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {companies.map((company) => (
        <Stock
          name={company.name}
          symbol={company.value}
          percentage={company.percentage}
          rate={company.rate}
        />
      ))}
    </div>
  );
}

export default App;
