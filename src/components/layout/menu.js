import React, { Component } from 'react';
import {createBrowserHistory} from 'history';
import {BrowserRouter as Router, Route} from 'react-router-dom';

export class Menu extends Component {
    render() {
        return (
            <nav id="menu" role="navigation" className="menu">
                <ul>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/'}>D-SAP</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/data_structuring'}>Nos Services</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/single_style2'}>Nos Réalisations</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/blog_grid'}>Actualités</a></li>
                    <li className="menu-hasdropdown"><a href={process.env.PUBLIC_URL + '/faq'}>FAQs</a></li>
                    <li className="menu-hasdropdown"><a href="#contact">Contact</a></li>
                </ul>
            </nav>
    
            )
    }
}