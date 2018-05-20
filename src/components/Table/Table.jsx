import React , { Component } from "react";
import TableHead from "../TableHead/TableHead";
import TableRow from "../TableRow/TableRow";
import { dataHead, dataArr } from './../../Data/dataArr';
import "./Table.css";

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.averageSortState = 0;
        this.defaultDataArrState = [...dataArr];
        this.state = {
            dataArr
        };
    }

    onAverageClick = (event, data) => {
        switch(data) {
            case dataHead[2]: 
                this.sortWithAverageGrade();
                break;
            default:
                break;
        }
    }

    sortWithAverageGrade = () => {
        let sortedByAscArr;
        switch(this.averageSortState) {
            case 0:
                sortedByAscArr = [...this.defaultDataArrState].sort((a, b) => a.averageGrade - b.averageGrade);
                this.averageSortState = 1;
            break;
            case 1:
                sortedByAscArr = [...this.defaultDataArrState].sort((a, b) => b.averageGrade - a.averageGrade);
                this.averageSortState = 2;
            break;
            case 2:
            default:
                sortedByAscArr = [...this.defaultDataArrState];
                this.averageSortState = 0;
                break;

        }
        this.setState({
            dataArr: sortedByAscArr
        });
    }

    render() {
        return ( 
            <table className="table">
                <TableHead handleClick={this.onAverageClick} headData={dataHead} />
                <TableRow data={this.state.dataArr}/>

            </table>  
           


        )
    }
}