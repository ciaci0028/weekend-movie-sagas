import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails () {
    const history = useHistory();

    const movie = useSelector(store => store.selectedMovie);
    console.log('details for:', movie);

    const routeHome = () => {
        history.push('/')
    }

    return (
        <>
            <h1>Movie Details</h1>
            <h3>{movie.title}</h3>
            <img
                src={movie.poster}
            />
            <p>{movie.description}</p>

            <button onClick={() => routeHome()}>Back to Home Page</button>
        </>
    )
};

export default MovieDetails;