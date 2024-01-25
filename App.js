// App.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Carousel from './components/carousel';
import Cart from './components/cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (beer) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find(item => item.id === beer.id);
  
    if (existingItem) {
      // If it is, update the quantity
      setCartItems(prevItems => prevItems.map(item => (item.id === beer.id ? { ...item, quantity: item.quantity + 1 } : item)));
    } else {
      // If it's not, add a new item to the cart
      setCartItems(prevItems => [...prevItems, { ...beer, quantity: 1 }]);
    }
  };
  

  const adjustQuantity = (itemId, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const proceedToCheckout = () => {
    // Implementation not needed for now
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => setShowCart(true)} style={{ position: 'absolute', top: 35, right: 10, borderWidth: 1, borderColor: 'black', height: 30, width: 40}}>
        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'black' }}>V A G</Text>
        <Text style={{ textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'black' }}>N E N</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 50, fontWeight: 'bold', top: 20 }}>B E E R</Text>
      <Carousel addToCart={addToCart} />
      {showCart && (
        <Cart
          cartItems={cartItems}
          onClose={() => setShowCart(false)}
          onAdjustQuantity={adjustQuantity}
          onRemoveItem={removeItem}
          onProceedToCheckout={proceedToCheckout}
        />
      )}
    </View>
  );
};

export default App;
