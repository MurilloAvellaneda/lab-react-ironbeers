import Header from './Header';
import { Link } from 'react-router-dom'

const Beers = ({ beers }) => {
    return (
        <>
            <Header/>
            {beers.map(beer => {
                return (
                    <Link 
                        key = {beer._id} 
                        to = {`/${beer._id}`}
                        style={{ textDecoration: 'none' }}
                    >
                    <div className = "beers-container">
                        <img className = "beer-options"
                            src={beer.image_url} 
                            alt={beer.name}
                        />
                        <div>
                            <h1>{beer.name}</h1>
                            <h2>{beer.tagline}</h2>
                            <h3>Created by: {beer.contributed_by}</h3>
                        </div>    
                    </div>    
                    </Link>
                    )
            })}
        </>
    );
}

export default Beers;