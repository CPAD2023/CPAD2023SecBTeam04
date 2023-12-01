import React, { useState, useEffect } from 'react';
import SearchBar from './app/components/SearchBar';
import Screen from './app/components/common/Screen';
import FeaturedNews from './app/components/FeaturedNews';
import BreakingNews from './app/components/BreakingNews';
import TechNews from './app/components/TechNews';
import PoliticalNews from './app/components/PoliticalNews';
import EntertainmentNews from './app/components/EntertainmentNews';
import { fetchEverythingByKeyword, fetchHeadlinesByCategory, fetchTrendingByCountry } from './api/newsDB';

export default function App() {
    const [featuredNews, setFeaturedNews] = useState([1, 2, 3]);
    const [breakingNews, setBreakingNews] = useState([1, 2, 3]);
    const [politicalNews, setPoliticalNews] = useState([1, 2, 3]);
    const [techNews, setTechNews] = useState([1, 2, 3]);
    const [entertainmentNews, setEntertainmentNews] = useState([1, 2, 3]);

    useEffect(() => {
        getFeaturedNews();
        getBreakingNewsTop();
        getPoliticalNews();
        getAllTechNews();
        getEntertainmentNews();
    }, []);

    const getFeaturedNews = async() => {
        const data = await await fetchTrendingByCountry('in', 1);
        if(data && data.articles) setFeaturedNews(data.articles);
    }

    const getBreakingNewsTop = async() => {
        const data = await fetchHeadlinesByCategory('business', 5);
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

    return (
        <Screen >
            <SearchBar />
            <FeaturedNews data={featuredNews}/>
            <BreakingNews data={breakingNews} />
            <PoliticalNews data={politicalNews} />
            <TechNews data={techNews} />
            <EntertainmentNews data={entertainmentNews} />
        </Screen>
    );
}

