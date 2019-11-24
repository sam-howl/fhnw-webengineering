import React, {Component} from 'react';
import 'whatwg-fetch';
import Header from "./Header"
import Footer from "./Footer";

const App = () => (
    <div>
        <Header title="Recipes" subtitle="Version 1.0" />
        <Footer message="Samantha Howlett" />
    </div>
);

export default App;