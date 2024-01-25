// components/CartPopup.js
import React, { useEffect } from 'react';
import { View, Text} from 'react-native';

const CartPopup = ({ setShowPopup }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Set the duration for the popup to be visible (in milliseconds)

    return () => clearTimeout(timeout);
  }, [setShowPopup]);

  return (
    <View style={{position: 'absolute', top: 40, backgroundColor: 'white', color: 'black', padding: 10, borderRadius: 2, borderWidth: 1, borderColor: 'black', zIndex: 3, elevation: 5}}>
      <Text style={{margin: 10, fontSize: 18, fontWeight: 'bold'}}>1 Lagd i vagnen!</Text>
    </View>
  );
};

export default CartPopup;
