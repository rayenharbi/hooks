import React from 'react'


const MovieList = (props) => {
    const  Favouritecomponent=props. Favouritecomponent;
    return (
        <>
        {props.movie.map((movie ,index)=>(
        <div className="image-container d-flex justify-content-start m-3">
            <img src={movie.posterUrl}></img>
            <div onClick={()=>props.handleFavouritesClick()}
            className="overlay d-flex align-items-center justify-content">
                <Favouritecomponent/>
            </div>
        </div>
        ))}
        </>
    );
};
export default MovieList;