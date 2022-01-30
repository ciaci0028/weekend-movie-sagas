import './MovieForm.css';
import { useState } from 'react';


function MovieForm () {

    const [movieTitle, setMovieTitle] = useState('');
    const [moviePoster, setMoviePoster] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [movieGenres, setMovieGenres] = useState('');


    const newMovie = {
        title: movieTitle,
        poster: moviePoster,
        description: movieDescription
    }

    console.log(newMovie)

    // Function to submit the form
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('submit hit', event);
    }; // End form submit

    return (
        <>
            <h1>Movie Form</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input
                    placeholder="Movie Title"
                    value={movieTitle}
                    onChange={event => setMovieTitle(event.target.value)}
                />
                <input
                    placeholder="Movie Poster URL"
                    value={moviePoster}
                    onChange={event => setMoviePoster(event.target.value)}
                />
                <input
                    placeholder="Movie Description"
                    value={movieDescription}
                    onChange={event => setMovieDescription(event.target.value)}
                /><br/>
                <p>Select all applicable genres:</p>
                <div className="select">
                    <input type="checkbox"/>Adventure<br/>
                    <input type="checkbox"/>Animated<br/>
                    <input type="checkbox"/>Biographical<br/>
                    <input type="checkbox"/>Comedy<br/>
                    <input type="checkbox"/>Drama<br/>
                    <input type="checkbox"/>Epic<br/>
                    <input type="checkbox"/>Fantasy<br/>
                    <input type="checkbox"/>Musical<br/>
                    <input type="checkbox"/>Romantic<br/>
                    <input type="checkbox"/>Science Fiction<br/>
                    <input type="checkbox"/>Space-Opera<br/>
                    <input type="checkbox"/>Superhero<br/>
                </div>
                <br/>
                <button>Submit</button>
            </form>
        </>
    )
};

export default MovieForm;