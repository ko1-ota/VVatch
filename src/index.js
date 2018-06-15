import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js'
import Footer from './component/footer.js'


const headerElement = document.getElementById('header');
if(headerElement) {
    ReactDOM.render(<Header />, headerElement);
}

const footerElement = document.getElementById('footer');
if(footerElement) {
    ReactDOM.render(<Footer />, footerElement);
}