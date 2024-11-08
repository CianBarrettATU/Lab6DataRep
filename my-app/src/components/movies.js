import MovieItem from "./movieitem";

//returns all movieItems by using unique id
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
        }
    );
}
export default Movies;