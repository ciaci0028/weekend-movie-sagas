import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';

function MovieDetails () {
    const history = useHistory();
    const dispatch = useDispatch();

    const movie = useSelector(store => store.selectedMovie);
    const genres = useSelector(store => store.genres);
    console.log('details for:', movie, genres);

    useEffect(() => {
        dispatch({ 
            type: 'FETCH_GENRES',
            payload: movie.id
        });
    }, []);



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