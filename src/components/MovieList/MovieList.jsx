import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // function to push us to the detailed view
    const goToDetails = (movie) => {
        console.log('movie poster has been clicked', movie);

        dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: movie
        })

        history.push('/details');
    }; // end of detailed view function

    return (
        <main>
            <h1>Movie List</h1>
            <h4>Click the poster for more information</h4>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Card 
                            key={movie.id} sx={{ maxWidth: 240 }} 
                            onClick={() => goToDetails(movie)}
                            className="movieCard"
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={movie.poster}
                                    alt={movie.title}
                                    className="movieImage"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {movie.title}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;

