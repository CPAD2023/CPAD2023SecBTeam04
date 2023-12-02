import axios from "axios";
import { API_KEY } from "../constants";
 
const apiBaseUrl = 'https://newsapi.org/v2';
const everything = `${apiBaseUrl}/everything`
const topHeadlines = `${apiBaseUrl}/top-headlines`

const apiCall = async (endpoint, params)=>{
    const options = {
        method: 'GET',
        url: endpoint,
        params: params? params: {}
    };
 
    try{
        const response = await axios.request(options);
        return response.data;
    }catch(error){
        console.log('error: ',error);
        return {};
    }
}

const fetchByKeyword = (keyword, limit) => {
    const params = {
        apiKey: API_KEY,
        q: keyword,
        pageSize: limit
    }
    return params;
}

const fetchByCategory = (category, limit) => {
    const params = {
        apiKey: API_KEY,
        category: category,
        pageSize: limit
    }
    return params;
}

const fetchByCountry = (country, limit) => {
    const params = {
        apiKey: API_KEY,
        country: country,
        pageSize: limit
    }
    return params;
}

export const fetchEverythingByKeyword = (keyword, limit) => {
    return apiCall(everything, fetchByKeyword(keyword, limit));
}

export const fetchHeadlinesByCategory = (category, limit) => {
    return apiCall(topHeadlines, fetchByCategory(category,limit));
}

export const fetchTrendingByCountry = (country, limit) => {
    return apiCall(topHeadlines, fetchByCountry(country, limit));
}

export const fallbackImage = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freeiconspng.com%2Fimages%2Fno-image-icon&psig=AOvVaw0JCI3S1YXFxdbk_6WHcaLC&ust=1701587526023000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiz8NOZ8IIDFQAAAAAdAAAAABAD'