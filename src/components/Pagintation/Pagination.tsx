import React from 'react';
import {useSearchParams} from "react-router-dom";
import {useAppSelector} from "../../redux/store";
import styles from './Pagination.module.css'

const Pagination = () => {

    const [searchParams, setSearchParams] = useSearchParams({page: '1'})
    const {total_pages} = useAppSelector(state => state.movies);
    const btnPrev = document.querySelector('.prev') as HTMLButtonElement
    const btnNext = document.querySelector('.next') as HTMLButtonElement
    let disabledPrev;
    let disabledNext

    const toggleDisableClassToButton = (btnElem: HTMLButtonElement | null, disabled: boolean | undefined) => {
        if (disabled && btnElem) {
            btnElem.classList.add(styles.btnDisabled)
        }
        if (!disabled) {
            btnElem?.classList.remove(styles.btnDisabled)
        }
    }

    if (searchParams.get('page') === '1') {
        disabledPrev = true
        toggleDisableClassToButton(btnPrev, disabledPrev)
    } else {
        toggleDisableClassToButton(btnPrev, disabledPrev)
    }

    if (searchParams.get('page') === `${total_pages}`) {
        disabledNext = true
        toggleDisableClassToButton(btnNext, disabledNext)
    } else {
        toggleDisableClassToButton(btnNext, disabledNext)
    }

    const changePage = (step: string): void => {
        const page = searchParams.get('page')
        const with_genres = searchParams.get('with_genres') || ''
        const query = searchParams.get('query') || ''

        const getCurrentPage = () => {
            let currentPage
            if (page && step === 'prev') {
                currentPage = +page;
                currentPage--
            }
            if (page && step === 'next') {
                currentPage = +page;
                currentPage++
            }
            return currentPage
        }
        if (page) {
            let currentPage = getCurrentPage() || ''
            setSearchParams({page: currentPage.toString()})
        }

        if (page && with_genres) {
            let currentPage = getCurrentPage() || ''
            setSearchParams({page: currentPage.toString(), with_genres})
        }

        if (page && query) {
            let currentPage = getCurrentPage() || ''
            setSearchParams({page: currentPage.toString(), query})
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }

    return (
        <div className={styles.paginationBlock}>
            <button
                className={'prev'}
                disabled={disabledPrev}
                onClick={() => {
                    changePage('prev')
                }}
                >Prev</button>
            <p className={styles.pageNumber}>{searchParams.get('page') || '1'}</p>
            <button
                disabled={disabledNext}
                className={'next'}
                onClick={() => {
                    changePage('next')
                }}>Next</button>
        </div>
    );
};

export default Pagination;