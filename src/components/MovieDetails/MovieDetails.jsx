import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './MovieDetails.css';

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
        history.push('/');
    };

    return (
        <>
            <h1>Movie Details</h1>
            <h2>{movie.title}</h2>
            <img
                src={movie.poster}
            />
            <h3>Movie Description</h3>
            <p>{movie.description}</p><br/>
            <h3>Movie Genres</h3>
            <table className="table">
                <tbody>
                    {genres.map(genre => (
                        <tr key={genre}>
                            <td>{genre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button onClick={() => routeHome()}>Back to Home Page</button>
        </>
    )
};

export default MovieDetails;