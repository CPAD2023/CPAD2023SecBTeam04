import Screen from '../common/Screen';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import TechNews from '../TechNews';
import PoliticalNews from '../PoliticalNews';
import EntertainmentNews from '../EntertainmentNews';
import useNews from '../../hooks/useNews';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { View, Text, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [
        featuredNews,
        breakingNews,
        politicalNews,
        techNews,
        entertainmentNews,
    ] = useNews();
    const navigation = useNavigation();

    return (
        <Screen>
            <StatusBar style="light" />
            <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-black text-3xl font-bold ml-40`}>NEWS APP</Text>
                <TouchableOpacity style={tw`mr-3`} onPress={() => navigation.navigate('SearchBar')}>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="black" />
                </TouchableOpacity>
            </View>
            
            <FeaturedNews data={featuredNews} />
            <TechNews data={techNews} />
            <PoliticalNews data={politicalNews} />
            <BreakingNews data={breakingNews} />
            <EntertainmentNews data={entertainmentNews} />
        </Screen>
    );
};

export default HomeScreen;