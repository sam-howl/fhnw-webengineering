import React from 'react';
import 'whatwg-fetch';
import Header from "./Header"
import RecipeContainer from "./app/RecipeContainer";
import Footer from "./Footer";

const App = () => (
    <div>
        <Header title="Recipes" subtitle="Version 1.0" />
        <RecipeContainer />
        <Footer message="Samantha Howlett" />
    </div>
);

export default App;