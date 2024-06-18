import {IGenreIdModel} from "./IGenreIdModel";

export interface IMoviesModel {
    "adult": boolean
    "backdrop_path": string,
    "genre_ids": IGenreIdModel[],
    "id": number,
    "original_language": "es",
    "overview": string,
    "popularity": 723.362,
    "poster_path": string,
    "title": string,
    "vote_average": number,
    "vote_count": number
}