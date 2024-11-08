import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

//used to read and display movie data
const Read = ()=> {
//data array stores movie info
    const [movies, setMovies] = useState([])

    //useEffect detects events
    useEffect(() => {
        axios.get("http://localhost:4000/api/movies")
          .then((response) => {
            setMovies(response.data.movies);
          })
          //catches errors.
          .catch((error) => {
            console.log(error);
          });
      }, []);

    return(
        <div>
            <h3>hello from from read component</h3>
            <Movies myMovies={movies}/>
        </div>
        
    );
}
export default Read;