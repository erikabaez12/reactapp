import React from 'react'
import { Pagination } from '@mui/material'

const RecipePagination = ({setPage, pageNumber}) => {

    const handleChange = (page) => {
        setPage(page)
    //    window.scroll(0,0)
    };

    return (
        <div>
            <div>
                <Pagination
                    onChange = {(p) => handleChange(p.target.textContent) }
                    count = {pageNumber}
                    showFirstButton
                    showLastButton />
            </div>
        </div>
    );
};

export default RecipePagination