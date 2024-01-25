// components/Modal.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import CartPopup from './cartpopup';

const widthItem = Dimensions.get('window').width/1.15;

const Modal = ({ selectedProp, onClose, addToCart }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart(selectedProp);
    setShowPopup(true);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
      {selectedProp && (
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 1, borderWidth: 1, borderColor: 'black',width: widthItem}}>
          <TouchableOpacity onPress={onClose} style={{ alignSelf: 'flex-end' }}>
            <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'black' }}>&times;</Text>
          </TouchableOpacity>
          <Image source={selectedProp.image} style={{ width: '100%', height: 200, borderRadius: 4, marginTop: 10, resizeMode: 'contain'}} />
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{selectedProp.name}</Text>
          <Text style={{ fontSize: 16, marginTop: 5 }}>Bryggd av: {selectedProp.by}</Text>
          <Text style={{ fontSize: 14, marginTop: 10, color: 'gray' }}>Smakbeskrivning:</Text>
          <Text style={{ fontSize: 16 }}>{selectedProp.description}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30, marginBottom: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{selectedProp.price} kr</Text>
            <TouchableOpacity onPress={handleAddToCart} style={{ position: 'absolute', right: 7, width: '36%' ,padding: 7, borderRadius: 1, borderWidth: 1, borderColor: 'black', marginTop: 20}}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Lägg i Vagnen!</Text>
            </TouchableOpacity>
          </View>
        </View>
      )} 
      {showPopup && <CartPopup setShowPopup={setShowPopup} />}
    </View>
  );
};

export default Modal;
