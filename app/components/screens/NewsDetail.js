import { useNavigation } from "@react-navigation/native";
import { fallbackImage } from "../../../api/newsDB";
import { Dimensions, StyleSheet, ScrollView, View, Image } from "react-native";
import Close from "../common/Close";
import Title from "../common/Title";
import Subtitle from "../common/Subtitle";

export default function NewsDetail ({ route }) {
  const { title: title, description: description, urlToImage: urlToImage, content: content, url: url} = route.params.item;
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style= {styles.view}>
        <View style= {styles.container}>
          <Image source={{ uri: urlToImage ? urlToImage : fallbackImage }} style= {styles.image} />
          <View style= {styles.contentContainer}>
            <Title numberOfLines={5} size={30}>{title}</Title>
            <Title size={25}>Description:</Title>
            <Subtitle numberOfLines={20} size={25}>{description}</Subtitle>
            <Title>Content:</Title>
            <Subtitle numberOfLines={20}>{content}</Subtitle>
            <Title>For full article : {url}</Title>
          </View>
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width ,
    height: Dimensions.get('window').height,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff', 
    justifyContent: 'center'
},
image: {
    flex: 0.2,
    width: '100%',
    height: 200
}, 
contentContainer: {
    flex: 0.8,
    height: 250
}
});
