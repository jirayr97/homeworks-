import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainRoute from "../MainRoute";
import ProvinceRoute from "../ProvinceRoute";
import Loading from "../Loading";

import "./Weather.css";

class Weather extends Component {
    state = {
        isLoaded: false,
    };

    convertToCelsius = (value, callback = f => f) => {
        return callback((value - 32) * 5 / 9);
    }

    getCelsiusString = (value) => {
        return `${Math.round(value)} °C`;
    }

    getQueryURL = (cities) => {
        const queryCities = cities.map(city => `%22${city}%22`).join("%2C%20");
        return `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%20in%20(${queryCities}))&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    }

    getMainTableData = (allData, cities) => {
        const currentTime = allData[0].lastBuildDate.slice(0, -7);

        return allData.map((cityData, index) => {
            const city = cities[index];
            const { temp, text: description} = cityData.item.condition;
            return { 
                key: city,
                city, 
                temp: this.convertToCelsius(temp, this.getCelsiusString),
                date: currentTime,
                description
            };
        });
    }

    getProvincesDataArray = (allData, cities) => {
        return cities.map((city, index) => {
            return {
                path: `/${city}`,
                data: allData[index].item.forecast.map(({ high, low, day, text: description, date }) => (
                    { 
                        key: date, 
                        day, 
                        date, 
                        high: this.convertToCelsius(high, this.getCelsiusString),
                        low: this.convertToCelsius(low, this.getCelsiusString), 
                        description 
                    }
                )),
            }
        });
    }

    componentDidMount() {
        const { cities } = this.props;
        const queryURL = this.getQueryURL(cities);
         
        fetch(queryURL) 
            .then(response => response.json())
            .then(response => {
                const allData = response.query.results.channel;
                this.mainTableData = this.getMainTableData(allData, cities);
                this.provincesDataArray = this.getProvincesDataArray(allData, cities);
                this.setState({ isLoaded: true });
            });
    }

    render() {
        const { isLoaded } = this.state;
        const { provinces } = this.props;

        return (
            isLoaded ? 
                <div className="weather-container">
                    <Router>
                        <Fragment>
                            <Route 
                                path="/" 
                                exact
                                render={() => <MainRoute provinces={provinces} mainTableData={this.mainTableData} />} 
                            />
                            {
                                this.provincesDataArray.map(({path, data}, i) => (
                                    <Route 
                                        key={path}
                                        path={path} 
                                        render={() => <ProvinceRoute provinces={provinces} province={provinces[i]} data={data} />}
                                    />
                                ))
                            }
                        </Fragment>
                    </Router>
                </div>
            : <Loading />
        );
    }
}

Weather.proptypes = {
    cities: PropTypes.arrayOf(PropTypes.string).isRequired,
    provinces: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            labelHy: PropTypes.string.isRequired,
            paths: PropTypes.arrayOf(
                PropTypes.shape({
                    pathId: PropTypes.number.isRequired,
                    className: PropTypes.string.isRequired,
                    d: PropTypes.string.isRequired,
                    transform: PropTypes.string.isRequired,
                })
            ),
        })
    ),
};

export default Weather;