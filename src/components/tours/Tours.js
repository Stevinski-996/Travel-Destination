import data from "../../data/db.json"
import Tour from "../tours/tour/Tour"

function Tours() {
    const tour = data;
    return (
        <>
        <div>
       <Tour tour={data} />
       </div>
        </>
    )
}

export default Tours