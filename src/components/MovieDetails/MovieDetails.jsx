import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import './MovieDetails.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const buttonTheme = createTheme({ 
    components: {
        MuiButton: {
            styleOverrides: {
                solid: {
                    backgroundColor: "red"
                }
            }
        }
    }
})

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
            <div className="container">
                <div className="smallerContainer">
                <h1>Movie Details</h1>
                <h2 className="movieTitle">{movie.title}</h2>
                <img
                    className="picture"
                    src={movie.poster}
                />
                <h3 className="movieDescH3">Movie Description</h3>
                <p className="movieDesc">{movie.description}</p><br/>
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
            </div>
            </div>
            <ThemeProvider theme={buttonTheme}>
                <Button 
                    variant="contained" 
                    disableElevation
                    onClick={() => routeHome()}
                    className="button"
                >
                    Back to Home Page
                </Button>
            </ThemeProvider>
        </>
    )
};

export default MovieDetails;