import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Image } from 'semantic-ui-react'

function Home(){

    const navigate = useNavigate()

    function handleCreate(){
        navigate("/newList", {replace: true})
    }
    function handleSave(){
        navigate("/saved", {replace: true})
    }

    return (
        <body>
            <div className='buttonContainer'>
                <Button className='homeBtn'size="massive" onClick={handleCreate} >Create New List</Button>
                <Button className='homeBtn'size='massive' onClick={handleSave} >Saved</Button>
                <Image  className='homeImg' src='https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/06/collage-maker-07-jun-2023-06-05-pm-5157.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5' size='small' wrapped/>
            </div>
            
        </body>
    );
};

export default Home;
