import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie/DetailMovie";

function Detail () {
    const params = useParams();
    
    return (
        <>
        <h2> Detail Movie: {params.id}</h2>
        <DetailMovie />
        </>
    );
}

export default Detail;