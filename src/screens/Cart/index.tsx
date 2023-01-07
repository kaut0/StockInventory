import {Button, Icon} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux/Hooks/index';
import {CardCartComponent} from 'Components';
import useCart from './useCart';

const Cart = (): JSX.Element => {
  const navigation: any = useNavigation();
  const cartData = useAppSelector(state => state.cart.data);
  const [checkoutItems] = useCart();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: Scaling.Height(100),
      }}>
      {/* ini headers */}
      <View
        style={{
          backgroundColor: '#154c79',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: Scaling.Height(60),
          paddingHorizontal: Scaling.Width(20),
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-left"
            size={Scaling.Width(20)}
            type="font-awesome"
            color="white"
          />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
          }}>
          Cart
        </Text>
        <View style={{width: Scaling.Width(20)}} />
      </View>
      {/* end headers */}
      {/* body start */}
      <View
        style={{
          paddingHorizontal: Scaling.Width(20),
        }}>
        {cartData.length > 0 ? (
          <>
            <FlatList
              data={cartData}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <CardCartComponent
                  title={item.name}
                  desc={item.desc}
                  quantyty={item.quantyty}
                />
              )}
            />
          </>
        ) : (
          <>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: Scaling.Height(20),
              }}>
              <Text>Tidak ada data</Text>
            </View>
          </>
        )}
      </View>
      {cartData.length > 0 && (
        <View
          style={{
            position: 'absolute',
            bottom: Scaling.Height(15),
            left: Scaling.Width(10),
            right: Scaling.Width(10),
          }}>
          <Button title="Checkout" onPress={() => checkoutItems(cartData)} />
        </View>
      )}
    </View>
  );
};

export default Cart;
