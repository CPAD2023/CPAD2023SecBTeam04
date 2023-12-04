import React from 'react';
import VerticalList from './lists/VerticalList';

const PoliticalNews = ({data, title="Political News"}) => {
    return(
       <VerticalList title={title} data={data} />
    )
};

export default PoliticalNews;