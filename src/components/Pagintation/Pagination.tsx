import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store";

const Pagination = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'})
    const {total_pages} = useAppSelector(state => state.movies);
    let disabledPrev;
    let disabledNext

    if (searchParams.get('page') === '1'){
        disabledPrev = true
    }

    if (searchParams.get('page') === `${total_pages}`) {
        disabledNext = true
    }


    return (
        <div>
            <button
                disabled={disabledPrev}
                onClick={() => {
                const page = searchParams.get('page')
                const with_genres = searchParams.get('with_genres') || ''
                const query = searchParams.get('query') || ''
                if (page) {
                    let currentPage = +page;
                    currentPage--
                    setSearchParams({page: currentPage.toString()})
                }

                if (page && with_genres) {
                    let currentPage = +page;
                    currentPage--
                    setSearchParams({page: currentPage.toString(), with_genres})
                }

                if (page && query) {
                    let currentPage = +page;
                    currentPage--
                    setSearchParams({page: currentPage.toString(), query})
                }
            }}>Prev</button>
            <button disabled={disabledNext}
                onClick={() => {
                const page = searchParams.get('page');
                const with_genres = searchParams.get('with_genres') || ''
                const query = searchParams.get('query') || ''
                if (page) {
                    let currentPage = +page;
                    currentPage++
                    setSearchParams({page: currentPage.toString()})
                }

                if (page && with_genres) {
                    let currentPage = +page;
                    currentPage++
                    setSearchParams({page: currentPage.toString(), with_genres})
                }

                if (page && query) {
                   let currentPage = +page;
                   currentPage++
                   setSearchParams({page: currentPage.toString(), query})
                }
            }}>Next</button>
        </div>
    );
};

export default Pagination;