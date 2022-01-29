import beersImg from '../assets/beers.png';
import newBeerImg from '../assets/new-beer.png';
import randomBeerImg from '../assets/random-beer.png';
import React from "react";
import { Link } from "react-router-dom";

const home = () => {
    return (
        <div>
            <img src={beersImg} alt="beers" className="home-img"/>
 
            <Link to='/beers'><h1>All Beers</h1></Link>
            <p>
            Officia minim adipisicing dolore duis aliquip do nulla officia occaecat veniam nulla id. Anim minim cupidatat laborum eu do veniam veniam quis consequat non id. Velit Lorem officia consequat adipisicing duis. Exercitation aliquip incididunt irure do quis ullamco duis aute id id excepteur. Cupidatat enim aliquip occaecat enim esse cupidatat duis deserunt fugiat non ad. Nisi eiusmod cupidatat elit et amet ut sit pariatur est adipisicing aliqua ut proident quis. Magna irure culpa magna ad commodo.
            </p>

            <img src={randomBeerImg} alt="beer cooler" className="home-img"/>
            <Link to='/random-beer'><h1>Random Beer</h1></Link>
            <p>
                Officia minim adipisicing dolore duis aliquip do nulla officia occaecat veniam nulla id. Anim minim cupidatat laborum eu do veniam veniam quis consequat non id. Velit Lorem officia consequat adipisicing duis. Exercitation aliquip incididunt irure do quis ullamco duis aute id id excepteur. Cupidatat enim aliquip occaecat enim esse cupidatat duis deserunt fugiat non ad. Nisi eiusmod cupidatat elit et amet ut sit pariatur est adipisicing aliqua ut proident quis. Magna irure culpa magna ad commodo.
            </p>

            <img src={newBeerImg} alt="cup with beer" className="home-img"/>
            <Link to='/new-beer'><h1>New Beer</h1></Link>
            <p>
            Officia minim adipisicing dolore duis aliquip do nulla officia occaecat veniam nulla id. Anim minim cupidatat laborum eu do veniam veniam quis consequat non id. Velit Lorem officia consequat adipisicing duis. Exercitation aliquip incididunt irure do quis ullamco duis aute id id excepteur. Cupidatat enim aliquip occaecat enim esse cupidatat duis deserunt fugiat non ad. Nisi eiusmod cupidatat elit et amet ut sit pariatur est adipisicing aliqua ut proident quis. Magna irure culpa magna ad commodo.
            </p>
        </div>

    );
}

export default home;