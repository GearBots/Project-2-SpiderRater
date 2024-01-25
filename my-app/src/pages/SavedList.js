import React from 'react';

function SavedList({ lists }) {
    console.log(lists)
    return (
        <div>
            <h2>Saved Movies</h2>
            {lists.map((list, index) => (
                <div key={index}>
                    <h3>List {index + 1}:</h3>
                    <ul>
                        {list.map((movie, index) => (
                            <li key={index}>
                                <h4>{index + 1}. {movie.name}</h4>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SavedList;