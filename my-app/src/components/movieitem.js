import { useEffect } from "react";
import Card from 'react-bootstrap/Card';

//useEffect used to perform side effect on react components
function MovieItem(props) {
  useEffect(() => {
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  //returns movie data and displays it on a card
  return (
    <div>
      <Card>
        <Card.Header>{props.mymovie.Title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            <footer>{props.mymovie.Year}</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MovieItem;