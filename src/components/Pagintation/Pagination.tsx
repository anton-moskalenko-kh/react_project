import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store";

const Pagination = () => {

    const [query, setQuery] = useSearchParams({page: '1'})
    const {total_pages} = useAppSelector(state => state.movies);
    let disabledPrev;
    let disabledNext

    if (query.get('page') === '1'){
        disabledPrev = true
    }

    if (query.get('page') === `${total_pages}`) {
        disabledNext = true
    }


    return (
        <div>
            <button
                disabled={disabledPrev}
                onClick={() => {
                const page = query.get('page')
                const with_genres = query.get('with_genres') || ''
                if (page) {
                    let currentPage = +page;
                    currentPage--
                    setQuery({page: currentPage.toString()})
                }

                if (page && with_genres) {
                    let currentPage = +page;
                    currentPage--
                    setQuery({page: currentPage.toString(), with_genres})
                }
            }}>Prev</button>
            <button disabled={disabledNext}
                onClick={() => {
                const page = query.get('page');
                const with_genres = query.get('with_genres') || ''
                if (page) {
                    let currentPage = +page;
                    currentPage++
                    setQuery({page: currentPage.toString()})
                }

                if (page && with_genres) {
                    let currentPage = +page;
                    currentPage++
                    setQuery({page: currentPage.toString(), with_genres})
                }
            }}>Next</button>
        </div>
    );
};

export default Pagination;