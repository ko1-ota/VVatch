import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';


export default class HeadBreadcrumb extends Component {
    render() {
        return(
            <div>
                <Breadcrumb>
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>hoge</BreadcrumbItem>
                </Breadcrumb>
            </div>
        );
    }
}