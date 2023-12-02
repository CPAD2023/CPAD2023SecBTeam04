import SearchBar from '../SearchBar';
import Screen from '../common/Screen';
import FeaturedNews from '../FeaturedNews';
import BreakingNews from '../BreakingNews';
import TechNews from '../TechNews';
import PoliticalNews from '../PoliticalNews';
import EntertainmentNews from '../EntertainmentNews';
import useNews from '../../hooks/useNews';

const HomeScreen = () => {
    const [
        featuredNews,
        breakingNews,
        politicalNews,
        techNews,
        entertainmentNews,
    ] = useNews();

    return (
        <Screen>
            {/* <SearchBar /> */}
            <FeaturedNews data={featuredNews} />
            <TechNews data={techNews} />
            <PoliticalNews data={politicalNews} />
            <BreakingNews data={breakingNews} />
            <EntertainmentNews data={entertainmentNews} />
        </Screen>
    );
};

export default HomeScreen;