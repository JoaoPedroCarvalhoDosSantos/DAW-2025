import { MovieContent } from "./assets/cases/movies/components/movie-content";
import { Footer } from "./components/layout/footer";
import { Header } from "./components/layout/header";
import { Navbar } from "./components/layout/navbar";
import Highlight from "./components/layout/highlight";
import { MovieContextProvider } from "./assets/cases/movies/context/movie-context";

//Componente principal
function App() {
  return (
    <> 
      <Header />
      
      <main>
        <MovieContextProvider>
          <Navbar />
        <Highlight />
        <MovieContent />
        </MovieContextProvider>
      </main>
      <Footer  />
    </>
  )
}

export default App