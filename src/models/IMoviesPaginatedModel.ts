import {IMoviesModel} from "./IMoviesModel";

export interface IMoviesPaginatedModel {
    page: number,
    total_pages: number,
    total_results: number,
    results: IMoviesModel[]
}