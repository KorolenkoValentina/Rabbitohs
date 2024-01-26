
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { colors } from '../../../components/Colors';

const data = [
  {
    id: '1',
    title: 'WOT you need to know for',
    image: require('../images/homeScreen/image-1.png'),
  },
  {
    id: '2',
    title: 'Fast delivery',
    image: require('../images/homeScreen/image-2.png'),
  },
  {
    id: '3',
    title: 'Support service',
    image: require('../images/homeScreen/image-3.png'),
  },
  {
    id: '4',
    title: 'Love for what we do',
    image: require('../images/homeScreen/image-1.png'),
  },
  {
    id: '5',
    title: 'Fast delivery',
    image: require('../images/homeScreen/image-2.png'),
  },
  {
    id: '6',
    title: 'Support service',
    image: require('../images/homeScreen/image-3.png'),
  },
];

const { width, height } = Dimensions.get('screen');

const  CarouselVideoScreen = () => {
  const [selectedId, setSelectedId] = useState(0);

  const renderItemCarousel = ({ item, index }) => (
    <View style={{ width: width / 3}}>
      <TouchableOpacity style={styles.carouselItem}>
        <Image source={item.image}/>
        <Text style={styles.carouselTitle}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        data={data}
        renderItem={renderItemCarousel}
        sliderWidth={width}
        itemWidth={width / 3}
        loop={true} 
        onSnapToItem={(index) => setSelectedId(index)}
      />       
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  
  carouselItem: {
    alignItems: 'center',
  },
  carouselTitle: {
    fontSize: 14,
    color:colors.black,
    marginTop: 8,
            
  },
});

export default CarouselVideoScreen;
