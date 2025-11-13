import { MovieContent } from "./assets/cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";
import Highlight from "./components/layout/highlight";

//Componente principal
function App() {
  return (
    <> 
      <Header />
      
      <main>
        <Navbar />
        <Highlight />

        <MovieContent />

      </main>
      <Footer  />
    </>
  )
}

export default App