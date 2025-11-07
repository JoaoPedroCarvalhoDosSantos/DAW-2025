import { api } from "/Users/João/DAW-2025/the-moviebox-react/src/lib/axios";


export type MovieDTO = {
  title: string;
  year: number;
  image: string;
};

const _ENDPOINT = "/movies?key=435dad30"

export const MovieService = {
  async list(): Promise<MovieDTO[]> {
    const result = await api.get(_ENDPOINT);
    console.log('buuuuuu', result.data)
    return result.data;
  },
};