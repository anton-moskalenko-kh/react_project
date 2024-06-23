import {IGenreModel} from "./IGenreModel";

export interface IMovieInfoModel {
    "budget": number,
    "genres": IGenreModel[],
    "id": number,
    "overview": string,
    "poster_path": string,
    "release_date": string,
    "revenue": number,
    "runtime": number,
    "title": string,
    "vote_average": number,
    "vote_count": number,
    "status": string
}