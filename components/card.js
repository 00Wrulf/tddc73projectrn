// components/BeerCard.js
import React, { useState }from 'react';
import { View, Text, Image, TouchableOpacity, Modal as RNModal } from 'react-native';
import Modal from './modal';
import CartPopup from './cartpopup';

const Card = ({ prop, addToCart }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProp, setSelectedProp] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleReadMore = () => {
    setSelectedProp(prop);
    setModalVisible(true);
  };

  const handleAddToCart = () => {
    addToCart(prop);
    setShowPopup(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={{ margin: 10, alignItems: 'center', borderWidth: 1, borderRadius: 1, borderColor: 'black', padding: 10, top: 50, height: 600}}>
      <Image source={ prop.image } style={{ height: 420, width: 210, resizeMode: 'contain', borderRadius: 4}} />
      <View style={{ marginTop: 10, alignItems: 'center', top: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>{prop.name}</Text>
        <Text style={{ fontSize: 14, marginTop: 5 }}>Av: {prop.by}</Text>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 5, position: 'absolute', top: 55}}>{prop.price} kr</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 10, position: 'absolute', bottom: 20}}>
        <TouchableOpacity onPress={handleReadMore} style={{ marginRight: 10 }}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', borderWidth: 1, borderColor: 'black', width: 70, textAlign: 'center'}}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddToCart}>
          <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black', borderWidth: 1, borderColor: 'black', width: 70, textAlign: 'center'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>

      <RNModal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
       <Modal selectedProp={selectedProp} onClose={closeModal} addToCart={handleAddToCart} />
      </RNModal>
      {showPopup && <CartPopup setShowPopup={setShowPopup} />}
    </View>
  );
};

export default Card;
