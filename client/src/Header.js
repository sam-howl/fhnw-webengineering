import React from 'react';

const Header = ({ title, subtitle }) => (
    <div className="background">
        <div>
            <h1 className="site-title">{title}</h1>
            <h3>{subtitle}</h3>
        </div>
    </div>
);
export default Header;