import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SavedList from './SavedList';

function NewList({ setMovieList, movieList }) {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [movieNames, setMovieNames] = useState([]);

    const addToMovieList = (movie) => {
        if (movieList.length >= 10) {
            alert("You can only add up to 10 movies.");
            return;
        }
        setMovieList([...movieList, movie]);
        setMovieNames([...movieNames, movie.name]);
        console.log('Updated Movie List:', movieList);
    };

    const deleteMovie = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/movies/${id}`, {
                method: 'DELETE'
            });

            const updatedMovies = movies.filter(movie => movie.id !== id);
            setMovies(updatedMovies);
            const updatedMovieNames = movieNames.filter(name => name.id !== id);
            setMovieNames(updatedMovieNames);
            console.log('Movie deleted successfully');
        } catch (error) {
            console.error('Error deleting movie:', error.message);
        }
    };

    const createNewList = () => {
        navigate('/saved');
    };

    useEffect(() => {
        fetch('http://localhost:4000/movies')
            .then(res => res.json())
            .then(setMovies);
    }, []);

    return (
        <div>
            <div className="movieGrid">
                {movies.map((movie, id) => (
                    <div className="card" key={id}>
                        <img src={movie.image} alt={"movie name"} />
                        <h2>{movie.name}</h2>
                        <button className='button' onClick={() => addToMovieList(movie)}> Add To List</button>
                        <button className='button' onClick={() => deleteMovie(movie.id)}> Delete Movie</button>
                        <p>Review: {movie.review}</p>
                        <h4>Critic Score: 🍅{movie.critic}</h4>
                        <h4>Audience Score: 🍿{movie.audience_score}</h4>
                    </div>
                ))}
                <button className='button' onClick={createNewList}>Create List</button>
                <div className="addedMovies">
                    {movieNames.map((title, id) => (
                        <ol key={id}>
                            <h3>{id + 1}. {title}</h3>
                        </ol>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NewList;






