import './Movies.css'

interface MoviesProps{
    moviesArray: string[]
}

function Movies(props: MoviesProps){

    return(
        <div>
            <h3 className='movies'>Favorite Movies:</h3>
            <ul>
        {props.moviesArray.map((movie) => (
          <li key={movie} className='listMovies'>{movie}</li>
        ))}
      </ul>
        </div>
    )
}

export default Movies;