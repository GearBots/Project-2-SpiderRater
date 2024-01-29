import {useState, useEffect} from 'react';

function MovieList(){
    const [films, setFilms] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/movies')
        .then(res=>res.json())
        .then(setFilms)
    }, [])

    return (
        <>
        {films.map((film)=>{
            return(
                <div className="card">
                    <img src={film.image} alt={"movie name"} />
                    <h1>{film.name}</h1>
                    <p>Review: {film.review}</p>
                    <h4>Critic Score:  🍅{film.critic}</h4>
                    <h4>Audience Score: 🍿{film.audience_score}</h4>
                    

                </div>
            )
        })}
        </>
    );
};

export default MovieList;