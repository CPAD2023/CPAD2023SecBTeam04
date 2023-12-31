import React from 'react';
import HorizontalList from './lists/HorizontalList';

const BreakingNews = ({data}) => {
    return(
        <HorizontalList title='General News' data={data} />
    )
};

export default BreakingNews;