import React, { useEffect, useState } from "react";
import './App.css';
// import '.npbootstrap/dist/css/bootstrap.min.css';
import MovieList from './component/MovieList';
import MovieListheading from "./component/MovieListheading";
import Search from './component/Search';
import AddMovie from "./component/AddMovie";



function App() {
  const [movie,setmovie]=useState([{
    id:1,
    title: "American Psycho",
      Year: "2000",
        rate:5.1,
          description:" wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BZTM2ZGJmNjQtN2UyOS00NjcxLWFjMDktMDE2NzMyNTZlZTBiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
{   id:2,     
    title: "Django Unchained",
     Year: "2012",
      rate:4.5,
       description:"The story follows an enslaved black man who trains under a German bounty hunter, with the ultimate goal of reuniting with his long-lost wife",
        posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg" }, 
{id:3,  
  title: "The Great Gatsby",
  Year: "2013",
  rate:5.6,
  description:" it tells the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman whom he loved in his youth.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg", },
{id:4,    
  title: "Catch Me If You Can",
  Year: "2002",
  rate:6.2,
  description: "The screenplay by Jeff Nathanson is based on the semi-autobiographical book of the same name of Frank Abagnale, who claims that before his 19th birthday, he successfully performed cons worth millions of dollars by posing as a Pan American World Airways pilot, a Georgia doctor, and a Louisiana parish prosecutor",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY5MzYzNjc5NV5BMl5BanBnXkFtZTYwNTUyNTc2._V1_SX300.jpg"},
    {id:5,

      title: "Blade Runner 2049",
      Year: "2017",
      rate:7.5,
      description:"Officer K (Ryan Gosling), a new blade runner for the Los Angeles Police Department, unearths a long-buried secret that has the potential to plunge what's left of society into chaos",
      posterUrl: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg"
  },
  {id:6,
    title: "Fight Club",
    Year: "1999",
    rate:6.2,
    description:"It is based on the 1996 novel of the same name by Chuck Palahniuk",
    posterUrl: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"
},
{id:7,
  title: "The Maze Runner",
  Year: "2014",
  rate:7.4,
  description:" a group of 50 amnesiac boys live in a clearing (called the Glade; they're called Gladers) that is in turn surrounded by an intricate maze.",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMjUyNTA3MTAyM15BMl5BanBnXkFtZTgwOTEyMTkyMjE@._V1_SX300.jpg"
},
{id:8,
  title: "Deadpool",
            Year: "2016",
            rate:7.1,
            description:"Deadpool is a highly trained assassin and mercenary",
            posterUrl: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"

},
{id:9,
  title: "The Fast and the Furious: Tokyo Drift",
  Year: "2006",
  rate:7.7,
  description:"The Fast and the Furious: Tokyo Drift is a 2006 action film directed by Justin Lin and written by Chris Morgan. It is the standalone sequel to The Fast and the Furious (2001) and 2 Fast 2 Furious (2003) and is the third main installment in the Fast & Furious franchise",
  posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2NTMxODEyNV5BMl5BanBnXkFtZTcwMDgxMjA0MQ@@._V1_SX300.jpg",
},
{id:10,
  title: "2 Fast 2 Furious",
  Year: "2003",
 rate:8.6,
  description:"2 Fast 2 Furious is a 2003 action film directed by John Singleton from a screenplay by Michael Brandt and Derek Haas, based on a story by Brandt, Haas, and Gary Scott Thompson. It is the sequel to The Fast and the Furious (2001",
 posterUrl: "https://m.media-amazon.com/images/M/MV5BMzExYjcyYWMtY2JkOC00NDUwLTg2OTgtMDI3MGY2OWQzMDE2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},


  
 
  ]);
  const[favourites,setFavourites]=useState([]);
  const [searchValue,setSearchValue]=useState('');
  const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue }&apikey=263d22d8`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setmovie(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

  const addFavouriteMovie=(movie)=>{
  const newFavouriteList=[...favourites,movie];
  setFavourites(newFavouriteList);
  }
  return (
    <div className='container-fluid movie-app'>
      <div className='row1'>
      <MovieListheading heading='Movies'/>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
    <MovieList movie={movie} handleFavouritesClick={addFavouriteMovie} Favouritecomponent={AddMovie}/>
    </div>
     <div className='row1'>
      <MovieListheading heading='Favourites'/>
      
      </div>
      <div className='row'>
    <MovieList movie={favourites} handleFavouritesClick={addFavouriteMovie} Favouritecomponent={AddMovie}/>
    </div>
    </div>
  );
};

export default App;
