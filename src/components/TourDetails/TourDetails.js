import { useParams } from "react-router-dom";
import data from "../../data/db.json"
import { useState } from "react";


function TourDetails() {
    const [seeMore,setSeeMore] = useState(true);
    const toggle = () => {
        setSeeMore(!seeMore)
    }
    const { id } = useParams();
    const details = data.find(city => 
        city.id === id 
    )
    return (
        <>
<section>
    <img style={{width:"300px"}}  src={details.image}></img>
    <p style={{width:"500px"}}>{seeMore ? details.info.slice(0,300) : details.info}</p>
    <p onClick={toggle}>{seeMore ? "see more" : "see less"}</p>
</section>

        </>
    )
}

export default TourDetails;