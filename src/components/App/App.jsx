import React from "react";
import Weather from "../Weather";
import { cities, provinces } from "../../data";

const App = () => (
    <Weather cities={cities} provinces={provinces}/>
);

export default App;