import React, { Component } from "react";
import SearchForm from "../SearchForm/SearchForm";
import TableContainer from "../TableContainer";

import "./App.css";
import Loading from "../Loading/Loading";

class App extends Component {

    state = {
        inputValue: "",
        data: null,
        isLoad: false,
    };
    
    changeInputState = (inputValue) => {
       this.setState({ inputValue });
    }

    getQueryURL = (value) => {
        const endpointValue =  value.split(" ").join("+");
        return `http://openlibrary.org/search.json?q=${endpointValue}}`;
    } 

    getBooksData = (event) => {
        event.preventDefault();
        this.setState({ isLoad: true });
        const { inputValue } = this.state;
        const queryURL = this.getQueryURL(inputValue);

        fetch(queryURL) 
            .then(response => response.json())
            .then(data => this.setState({ data, isLoad: false }))
    }

    render() {
        const { data, isLoad } = this.state;
        let tableData;
        if (data) {
            tableData = data.docs.map(({ title, author_name, first_publish_year, subject}, i) => {
                return {
                    key: i,
                    title: title || "-",
                    "Author Name": author_name || "-",
                    "First Publish Year": first_publish_year || "-",
                    subject: (subject && subject.slice(0, 5).join(", ")) || "-",
                }
            });
        }
        return (
            <div>
                {isLoad ? <Loading /> : null}
                <SearchForm 
                    handleInputChange={this.changeInputState}  
                    handleBtnClick={this.getBooksData}
                />
                <div className="title">
                     {data && `Numfound: ${data.numFound}`}
                </div>
                {
                    data && tableData.length ? <TableContainer className="table" data={tableData}/> : 
                    null
                }
            </div>
            
        )
    }
}



export default App; 