import React from 'react';
import Recipes from './Recipes';
import "../styles/index.scss";
import reindeer from '../images/reindeer_xmas_icon.png'
import reindeerSvg from '../images/reindeer_xmas_icon.svg'

const App = () => {
    return <>
        <section className="hero"></section>
        <main>
            <section>
                <h1>Heya react :)</h1>
                 <img src={reindeer} alt="reindeer" width="200" />
                 <img src={reindeerSvg} alt="reindeer" width="200" />
                <Recipes />
            </section>
        </main>
    </>
}

export default App;