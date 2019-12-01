import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Header = ({ title, subtitle }) => (
    <div className="background">
        <p>
            <h1 className="site-title">{title}</h1>
            <h3>{subtitle}</h3>
        </p>
    </div>
);
export default Header;