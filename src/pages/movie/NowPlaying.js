import axios from "axios";
import { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

    
    function NowPlayingMovie() {
        const API_KEY = process.env.REACT_APP_API_KEY;
        const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    
        const [movies, setMovies] = useState([]);
    
        useEffect(() => {
           NowPlayingMovie();
        }, []); // Perhatikan bahwa array dependensi diubah menjadi []
    
        async function NowPlayingMovie() {
            const response = await axios(URL);
            setMovies(response.data.results); // Perhatikan bahwa property "result" diubah menjadi "results"
        }

    return (
        <>
        <Hero />
        <Movies movies={movies} />
        </>
    );
}

export default NowPlayingMovie;