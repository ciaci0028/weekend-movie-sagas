import { useSelector } from 'react-redux';

function MovieDetails () {

    const selectedMovie = useSelector(store => store.selectedMovie);
    console.log('details for:', selectedMovie);

    return (
        <>
            <h1>Movie Details</h1>
        </>
    )
};

export default MovieDetails;