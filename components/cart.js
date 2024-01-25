// components/Cart.js
import React, {useEffect} from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, Dimensions, TextInput} from 'react-native';

const widthItem = Dimensions.get('window').width;
const heightItem = Dimensions.get('window').height;

const Cart = ({ cartItems, onClose, onAdjustQuantity, onRemoveItem, onProceedToCheckout }) => {
  
  const totalCost = cartItems.reduce((acc, prop) => {
    const itemCost = parseFloat(prop.price.replace(':', '.')) * prop.quantity;
    return acc + itemCost;
  }, 0).toFixed(2);

  return (
    <View style={{position: 'absolute', width: widthItem, height: heightItem, backgroundColor: 'rgba(0, 0, 0, 0.4)'}}>
      <ScrollView style={{ width: '89%', backgroundColor: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 12, alignSelf:'flex-end'}}>
        <TouchableOpacity onPress={onClose} style={{ alignSelf: 'flex-start', padding: 10, top: 40}}>
          <Text style={{ width: 55, height: 55, fontSize: 25, fontWeight: 'bold', color: 'black' }}>&times;</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>V A G N E N</Text>
        {cartItems.length === 0 ? ( 
          <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 20, color: 'black', marginBottom: 20 }}>Vagnen är tom!</Text>
        ) : (
        <ScrollView>
          {cartItems.map((prop) => (
            <View key={prop.id} style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
              <Image source={prop.image } style={{resizeMode:'contain', width: 50, height: 100, borderRadius: 4, marginRight: 10 }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 13, fontWeight: 'bold', width: '95%' }}>{prop.name}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => onAdjustQuantity(prop.id, Math.max(1, prop.quantity - 1))}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', marginRight: 5 }}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={{ width: 30, height: 30, borderWidth: 1, borderColor: 'black', textAlign: 'center' }}
                  keyboardType="numeric"
                  value={prop.quantity.toString()}
                  onChangeText={(text) => onAdjustQuantity(prop.id, parseInt(text) || 0)}
                  editable={true}
                />
                <TouchableOpacity onPress={() => onAdjustQuantity(prop.id, prop.quantity + 1)}>
                  <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ marginLeft: 20, fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{((parseFloat(prop.price.replace(':', '.')) * prop.quantity).toFixed(2))}kr</Text>
              <TouchableOpacity onPress={() => onRemoveItem(prop.id)} style={{ marginLeft: 10 }}>
                <Text style={{ color: 'red', fontSize: 11, fontWeight: 'bold' }}>❌</Text>
              </TouchableOpacity>
              
            </View>
          ))}
          </ScrollView>
        )}
        <View style={{position: 'fixed', bottom: 20, flexDirection: 'row-reverse', justifyContent: 'space-between', padding: 10, background: 'rgb(255,255,255)', background: 'linear-gradient(0deg, rgba(255,255,255,1) 40%, rgba(255,255,255,0.9) 60%, rgba(255,255,255,0.8393558106836485) 90%, rgba(255,255,255,0.44439782749037116) 100%)' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', top: 20}}>Totalen: {totalCost} kr</Text>
          <TouchableOpacity onPress={onProceedToCheckout} style={{ backgroundColor: 'white', padding: 10, borderRadius: 1, borderWidth: 1, borderColor: 'black',marginTop: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center' }}>CHECKA UT!</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
