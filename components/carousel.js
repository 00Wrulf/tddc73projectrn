// components/Carousel.js
import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Card from './card';
import CartPopup from './cartpopup';

const props = [
  { id: 1, name: 'Alien By Choice', by: 'Elmeleven', description: 'Fruktig, mycket syrlig smak med liten sötma, inslag av svarta vinbär, ljust bröd, guava, passionsfrukt, citrus, knäck och vanilj.', price: '60:50', image: require('../img/1.png') },
  { id: 2, name: 'Firestone Walker Brain Pick', by: 'Omnipollo', description: 'Humlearomatisk smak med tydlig beska och liten sötma, inslag av grapefrukt, passionsfrukt, ananas, färska örter, sockerkaka och citronskal.', price: '49:90', image: require('../img/2.png') },
  { id: 3, name: 'Phobia', by: 'Village brewery', description: 'Robust stout med komplex smak av choklad, vanilj, kaffe, kavring och kryddor med en rostad maltighet och balanserad efterbeska.', price: '50:90', image: require('../img/3.png') },
  { id: 4, name: 'Fashionably Late', by: 'Stigbergets', description: 'Humlearomatisk smak med tydlig beska och liten sötma, inslag av mango, papaya, sockerkaka, tallkåda, pomerans och grapefrukt.', price: '49:60', image: require('../img/4.png') },
  { id: 5, name: 'NE Mosaic & Simcoe IPA', by: 'Apex brewing', description: 'Humlearomatisk, fruktig smak med tydlig beska och liten sötma, inslag av ananas, tallbarr, passionsfrukt, sockerkaka och grapefrukt.', price: '50:50', image: require('../img/5.png') },
  { id: 6, name: 'Times 8', by: 'Lervig', description: 'Imperial Pastry Stout med kraftig maltkaraktär i collab med Stillwater Artisanal. Toner av vanilj, kakao, lönnsirap, knäck och kokos.', price: '103:90', image: require('../img/6.png') },
  { id: 7, name: 'Tundra Ridge', by: 'Ekerö bryggeri', description: 'Fruktig smak med tydlig beska, inslag av krusbär, vitpeppar, ananas, rosmarin och grapefrukt.', price: '50:50', image: require('../img/7.png') },
  { id: 8, name: 'Double Apocalypse NEIPA', by: 'Amundsen', description: 'Humlearomatisk smak med tydlig beska, inslag av torkad ananas, tallbarr, honung och grapefruktskal.', price: '40:50', image: require('../img/8.png') },
];

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 1.55;

const Carousel = ({items, addToCart}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const scrollViewRef = useRef(null);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % (props.length * 2);
    if (nextIndex !== 0 && nextIndex < props.length) {
      setCurrentSlide(nextIndex);
      scrollViewRef.current?.scrollTo({ x: itemWidth * nextIndex, animated: true });
    }
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + props.length * 2) % (props.length * 2);
    if (prevIndex >= 0 && prevIndex < props.length) {
      setCurrentSlide(prevIndex);
      scrollViewRef.current?.scrollTo({ x: itemWidth * prevIndex, animated: true });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
      >
        {props.map((item, index) => (
          <View key={index} style={{ width: itemWidth }}>
            <Card prop={item} addToCart={addToCart}/>
          </View>
        ))}
      </ScrollView>
      {/* Previous button */}
      <TouchableOpacity onPress={prevSlide} style={{ position: 'absolute', justifyContent: 'center',left: 5, top: '40%', zIndex: 1, backgroundColor: 'white', opacity: 0.75, height: 120, width: 40, borderWidth: 1, borderColor: 'black',opacity: currentSlide === 0 ? 0.2: 1}}>
        <Text style={{ fontSize: 25, textAlign: 'center' }}>{'<'}</Text>
      </TouchableOpacity>
      {/* Next button */}
      <TouchableOpacity onPress={nextSlide} style={{ position: 'absolute', justifyContent: 'center',right: 5, top: '40%', zIndex: 1, backgroundColor: 'white', opacity: 0.75, height: 120, width: 40, borderWidth: 1, borderColor: 'black', opacity: currentSlide === props.length - 1 ? 0.2 : 1}}>
        <Text style={{ fontSize: 25, textAlign: 'center'}}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Carousel;