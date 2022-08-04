import { ResponseAPI } from "../interface";

export const fetcher = (page: number): Promise<ResponseAPI> => fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(res => res.json())