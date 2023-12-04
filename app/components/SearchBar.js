import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import React, { useCallback, useState } from 'react';
import { View, TextInput, Dimensions, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import tw from 'twrnc';
import { fetchEverythingByKeyword } from '../../api/newsDB';
import Loading from '../components/common/Loading';
import PoliticalNews from '../components/PoliticalNews';

const {width, height} = Dimensions.get('window');

export default function SearchBar() {
    console.log("Inside Search Bar...");
    const [items, setItems] = useState([]);
    const navigation = useNavigation();

    const handleSearch = search => {
        console.log("Inside handleSearch block...");
        setLoading(true);
        console.log(search);
        if (search && search.length > 2) {
            fetchEverythingByKeyword(search, 5)
            .then( data =>  {
                console.log("Data incoming...");
                setLoading(false);
                if(data && data.articles) setItems(data.articles);
            })
        } else {
            setLoading(false);
            setItems([]);
            console.log("No Data incoming...");
        }
    }

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
                            <Image source={require('../../assets/no-image-icon-23.jpg')} style={tw`h-96 w-96`} />
                        </View>
                    )
                )
            }
        </SafeAreaView>
    );
};