import Movies from "./Movies"
import './AboutMe.css'

interface InfoProps {
    fullName :string, 
    from: string, 
    favouriteMovies: string[]
}



function AboutMe(props: InfoProps){
    return(
        <>
        <h2 className="info">My Info:</h2>
        <p className="info">
            My name is {props.fullName} and I'm from {props.from}.
        </p>
       
        <Movies moviesArray={props.favouriteMovies} />
        </>
    )
}

export default AboutMe;