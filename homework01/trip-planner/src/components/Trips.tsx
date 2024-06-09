import './Trips.css'

function Trips() {
    const trips = ["Denmark", "Norway", "Finland"]
    return(
        <div>
            <h2 className='trips'>Here are some of my planned trips:</h2>
            <ol>
                {trips.map((trip) => {

                return(
                    <li key={trip} className='listTrips'>{trip}</li>
                )
                })}
            </ol>
        </div>
    );
}

export default Trips;