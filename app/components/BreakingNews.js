import React from 'react';
import HorizontalList from './lists/HorizontalList';

const BreakingNews = ({data}) => {
    return(
        <HorizontalList title='BreakingNews' data={data} />
    )
}

export default BreakingNews;