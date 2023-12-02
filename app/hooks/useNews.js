import { useState, useEffect } from 'react';
import { fetchTrendingByCountry, fetchHeadlinesByCategory, fetchEverythingByKeyword } from "../../api/newsDB";

const useNews = () => {
    const [featuredNews, setFeaturedNews] = useState([1, 2, 3]);
    const [breakingNews, setBreakingNews] = useState([1, 2, 3]);
    const [politicalNews, setPoliticalNews] = useState([1, 2, 3]);
    const [techNews, setTechNews] = useState([1, 2, 3]);
    const [entertainmentNews, setEntertainmentNews] = useState([1, 2, 3]);

    const getFeaturedNews = async() => {
        const data = await fetchTrendingByCountry('in', 1);
        if(data && data.articles) setFeaturedNews(data.articles);
    }

    const getBreakingNewsTop = async() => {
        const data = await fetchHeadlinesByCategory('general', 5);
        if(data && data.articles) setBreakingNews(data.articles);
    };

    const getPoliticalNews = async() => {
        const data = await fetchEverythingByKeyword('political', 5);
        if(data && data.articles) setPoliticalNews(data.articles);
    };

    const getAllTechNews = async() => {
        const data = await fetchEverythingByKeyword('technology', 5);
        if(data && data.articles) setTechNews(data.articles);
    };

    const getEntertainmentNews = async() => {
        const data = await fetchEverythingByKeyword('entertainment', 5);
        if(data && data.articles) setEntertainmentNews(data.articles);
    };

    useEffect(() => {
        getFeaturedNews();
        getBreakingNewsTop();
        getPoliticalNews();
        getAllTechNews();
        getEntertainmentNews();
    }, []);

    return [
        featuredNews,
        breakingNews,
        politicalNews,
        techNews,
        entertainmentNews
    ];
}

export default useNews;