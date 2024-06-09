
import Greeting from './components/Greeting'
import Trips from './components/Trips'
import AboutMe from './components/AboutMe'


function App() {
  const fullName = "Ana Mihajlovska";
  const from = "Macedonia";
  const movies = ["Harry Potter", "The Lord Of The Rings", "The Godfather"]

  return (
    <>
      <Greeting/>
      <Trips/>
      <AboutMe fullName={fullName} from ={from} favouriteMovies={movies}/>
    </>
  )
}

export default App
