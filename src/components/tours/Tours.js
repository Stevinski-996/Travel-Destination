import data from "../../data/db.json"
function Tours() {
    return (
        <>
        {data.map(result => {
            return(
            <div>
            <img src={result.image}/>
            <h1>
                {result.name}
            </h1>
            </div>)
        })}
        </>
    )
}

export default Tours