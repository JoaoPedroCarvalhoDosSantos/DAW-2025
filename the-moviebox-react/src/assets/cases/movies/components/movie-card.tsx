import { useMovies } from "../hooks/use-hook";
import type { MovieDTO } from "../services/movie.service";

type MovieCardProps = {
    movie: MovieDTO
};

export function MovieCard({ movie }: MovieCardProps) {
    const {setSelectedMovie} = useMovies();

    function handSelect(movie: MovieDTO){
        setSelectedMovie(movie);
    }

    return (
        <div className="bg-[#222] rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl hover:tranlate-y-1 transition">
            <img
                className="w-full h-[300px] object-cover"
                src={movie.image}
                onClick={() => handSelect(movie)}
            />
            <h3 className="px-4 pt-4 text-white text-lg font-semibold">
                {movie.title}
            </h3>
            <p className="px-4 pb-4 text-[#ccc] text-sm">
                {movie.year}
            </p>
        </div>
    );
}