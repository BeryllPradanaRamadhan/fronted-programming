import axios from "axios";
import { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";
import Movies from "../../components/Movies/Movies";

function Detail() {
    const [movies, setMovies] = useState([]);
    const { id } = useParams();
    const API_KEY = process.env.REACT_API_KEY;

    useEffect(() => {
        getRecommendationMovies();
    }, [])

    async function getRecommendationMovies() {
        const URL = `
            https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}
        `;
        const response = await axios(URL);

        setMovies(response.data.results);
    }

    return (
        <>
        <DetailMovie />
        <Movies movies={movies} />
        </>
    );
}

export default Detail;