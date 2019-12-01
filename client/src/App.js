import React from 'react';
import 'whatwg-fetch';
import Header from "./Header"
import Navigation from "./Navigation";
import RecipeContainer from "./app/RecipeContainer";
import Footer from "./Footer";

const App = () => (
    <div>
        <Header title="Recipes" subtitle="Version 1.0" />
        <Navigation />
        <Footer message="2019 Samantha Howlett" />
    </div>
);

export default App;