import React from 'react';

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <h1>About this web application</h1><br />
                This web application was created during a project at the FHNW and was part of the module Web Engineering.<br /><br />
                This web application manages recipes. Therefore, it provides the basic controls like showing, creating,
                updating and delete a recipe. A recipe has the same structure despite its category. A recipe has a name,
                a description, a list with ingredients, a category (that can be chosen all by yourself to create funny
                categories like: “Ladies night”), the time it takes to make and a picture. So that is all you must know
                about it. Good luck with trying new recipes and have fun using this web application.<br /><br />
                If you are a chef, no matter how good a chef you are, it's not good cooking for yourself; the joy is in
                cooking for others - it's the same with music. <br /> - by Will.i.am
            </div>)
    }
}

export default About;