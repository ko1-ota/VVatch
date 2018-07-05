import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js';
import Footer from './component/footer.js';
import StreamingForm from './component/streamingform';
import HeadBreadcrumb from './component/headbreadcrumb.js';


const headerElement = document.getElementById('header');
if(headerElement) {
    ReactDOM.render(<Header />, headerElement);
}

const breadcrumbElement = document.getElementById('headBreadcrumb');
if(breadcrumbElement) {
    ReactDOM.render(<HeadBreadcrumb />, breadcrumbElement);
}

const streamingFormElement = document.getElementById('streamingForm');
if(streamingFormElement) {
    ReactDOM.render(<StreamingForm />, streamingFormElement)
}

const footerElement = document.getElementById('footer');
if(footerElement) {
    ReactDOM.render(<Footer />, footerElement);
}