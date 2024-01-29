import React, { useEffect, useState } from 'react';

function SavedList({ movieList, saved, setSaved}) {
    const [savedLists, setSavedList] = useState([])
    console.log(movieList)
    
    console.log(savedLists)

    const deleteList = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/savedList/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('List deleted successfully');
                fetch('http://localhost:4000/savedList')
                .then(res => res.json())
                .then(data => setSavedList(data));
            } else {
                console.error('Failed to delete list');
            }
        } catch (error) {
            console.error('Error deleting list:', error.message);
        }
    };

    useEffect(()=> {
        fetch('http://localhost:4000/savedList')
        .then(res => res.json())
        .then(data => setSavedList(data))
    }, [])

    const saveList = async () => {
        try {
            const response = await fetch('http://localhost:4000/savedList', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ movieList }),
            });
            if (response.ok) {
                setSaved(true);
                console.log('List saved successfully');
            } else {
                console.error('Failed to save list');
            }
        } catch (error) {
            console.error('Error saving list:', error.message);
        }
    };

    return (
        <div>
            <h2>Saved List</h2>
            <button onClick={saveList}>Save List</button>
            {saved && <p>List saved successfully!</p>}
            <ul>
                {movieList.map((movie, id) => (
                    <ol key={id}>{movie.name}</ol>
                ))}
            </ul>
            {savedLists.map((list, id) => (
                <div key={id} className='card'>
                    <h2>Saved Movie List</h2>
                    <ul>
                    <button className='button' onClick={() => deleteList(list.id)}> Delete List</button>
                        {list.movieList.map((movie, id) => (
                            <li key={id}>{movie.name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default SavedList;














