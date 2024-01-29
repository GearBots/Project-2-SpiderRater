import logo from './logo.svg';
import './App.css';
import NavLayout from './components/NavLayout';
import SavedList from './pages/SavedList';
import Home from './pages/Home';
import MovieList from './pages/MovieList';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import NewList from './pages/NewList';
import { useState } from 'react';


function App(){

  const [movies, setMovies] = useState([])
  const [movieList, setMovieList] = useState([])
  const [movieNames, setMovieNames] = useState([])
  const [lists, setLists] = useState([])
  const [saved, setSaved] = useState(false);
  console.log(movieList)

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavLayout />}>
        <Route index element={<Home />}></Route>
        <Route path='/movielist' element={<MovieList />}></Route>
        <Route path='/newList' element={<NewList setMovieList={setMovieList} setMovieNames={setMovieNames} movieList={movieList}/>} />
        <Route path='/saved' element={<SavedList movieList={movieList} saved={saved} setSaved={setSaved} />} />
      </Route>
    )
  )



  return (

    <RouterProvider router={router} />

  );
}

export default App;
