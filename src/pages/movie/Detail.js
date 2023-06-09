import { useParams } from "react-router-dom";

function Detail () {
    const params = useParams();
    
    return (
        <>
        <h2> Detail Movie: {params.id}</h2>
        </>
    );
}

export default Detail;