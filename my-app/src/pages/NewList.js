import {useEffect, useState} from 'react';
import SavedList from './SavedList';


function NewList(){

    const [movies, setMovies] = useState([])
    const [movieList, setMovieList] = useState([])
    const [movieNames, setMovieNames] = useState([])
    const [lists, setLists] = useState([])


    const addToMovieList = (movie) => {
        if (movieList.length >= 10) {
            alert("You can only add up to 10 movies.");
            return;
        }
        setMovieList([...movieList, movie]);
        setMovieNames([...movieNames, movie.name]);
    }

    const createNewList = () => {
        console.log('Before:', movieList);
        setLists([...lists, movieList]);
        setMovieList([]);
        setMovieNames([]);
        console.log('After:', movieList);
    }
   

    useEffect(()=>{
        fetch('http://localhost:4000/movies')
        .then(res=>res.json())
        .then(setMovies)
    }, [])

    return (
        <div>
           
        <div className="movieGrid">
            {movies.map((movie)=>{
                return(
                    <div className="card">
                        <img src={movie.image} alt={"movie name"}/>
                        <h2>{movie.name}</h2>
                        <button className='button' onClick={()=> addToMovieList(movie)}> Add To List</button>
                        <p>Review: {movie.review}</p>
                        <h4>Critic Score:  🍅{movie.critic}</h4>
                        <h4>Audience Score: 🍿{movie.audience_score}</h4>
                    </div>
                    
                )
            })}
            <button className='button' onClick={createNewList}>Create List</button>
             <div className="addedMovies">
            {movieNames.map((title, id) => {
                return <ol>
                    <h3 key={id}>{id + 1}. {title}</h3>
                    </ol>;
                    
                
            })}
        </div>
        </div>
    
    </div>
        
    );
};

export default NewList;