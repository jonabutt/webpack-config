import React from 'react';
import Recipes from './Recipes';
import "../styles/index.scss";


const App = () => {
    return <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Heya react :)</h1>
                <Recipes />
            </section>
        </main>
    </>
}

export default App;