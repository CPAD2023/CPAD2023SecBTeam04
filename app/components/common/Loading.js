import { View, Dimensions } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import * as Progress from 'react-native-progress';

const {width, height} = Dimensions.get('window');

export default function Loading() {
  return (
    <View style={{ ...{ width: width, height: height}, ...tw `absolute flex-row justify-center item-center` }}>
      <Progress.CircleSnail thickness={12} size={160} color={'black'} />
    </View>
  )
}