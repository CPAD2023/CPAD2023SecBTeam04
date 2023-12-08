import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import memoize from 'lodash/memoize';
import React, { useCallback, useState } from 'react';
import { View, TextInput, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';
import { fetchEverythingByKeyword } from '../../api/newsDB';
import Loading from '../components/common/Loading';
import PoliticalNews from '../components/PoliticalNews';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const {width, height} = Dimensions.get('window');
const memoizedFetchEverything = memoize(fetchEverythingByKeyword);

export default function SearchBar() {
    const [items, setItems] = useState([]);
    const navigation = useNavigation();

    const handleSearch = async search => {
        setLoading(true);
        console.log(search);
        if (search && search.length > 2) {
            try {
                const cachedData = await AsyncStorage.getItem(search);
                if (cachedData) {
                    console.log("Retrieving results from cache...");
                    setLoading(false);
                    setItems(JSON.parse(cachedData));
                } else {
                    fetchDataAndUpdateCache(search);
                }
            } catch (error) {
                setLoading(false);
                console.error('AsyncStorage error:', error);
            }
        } else {
            setLoading(false);
            setItems([]);
            console.log("No Data incoming...");
        }
    }

    const fetchDataAndUpdateCache = (search) => {
        memoizedFetchEverything(search, 5)
            .then(data => {
                console.log("Data incoming...");
                setLoading(false);
                if (data && data.articles) {
                    setItems(data.articles);
                    AsyncStorage.setItem(search, JSON.stringify(data.articles));
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('Error fetching data:', error);
            });
    };

    const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);
    const [loading, setLoading] = useState(false);

    return(
        <SafeAreaView>
            <View style={{ ...{ width: width/1.05, height: height/15 }, 
            ...tw `mt-4 mb-4 flex-row justify-between items-center border border-neutral-500 rounded-full` }} >
                <TextInput onChangeText={handleTextDebounce}
                    style={{ ...{ width: width/1.05, height: height/15 }, 
                    ...tw `ml-4 mt-4 mb-4 justify-between items-center rounded-full` }}
                    placeholder='Search here...' 
                    placeholderTextColor={'lightgray'}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomeScreen')}
                >
                    <XMarkIcon size={20} color={'lightgray'} style={tw `mr-4`}></XMarkIcon>
                </TouchableOpacity>
            </View>
            {
                loading ? ( <Loading /> ) : (
                    items.length > 0 ? (
                        <ScrollView showsVerticalScrollIndicator={false}
                            contentContainerStyle={{paddingHorizontal:15}}
                            style={tw`space-y-3`} >
                            <PoliticalNews data={items} title="Results" />
                        </ScrollView>
                    ) : (
                        <View style={tw`flex-row justify-center`}>
                            <Image source={require('../../assets/newsSearch.png')} style={tw`h-96 w-96`} />
                        </View>
                    )
                )
            }
        </SafeAreaView>
    );
};