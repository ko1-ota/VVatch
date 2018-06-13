import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js'


const headerElement = document.getElementById('header');
if(headerElement) {
    ReactDOM.render(<Header />, headerElement);
}