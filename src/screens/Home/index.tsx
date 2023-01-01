import {Button, Icon} from '@rneui/themed';
import {CardComponent} from 'Components';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useHome from './useHome';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../redux/Hooks';
const Home = (): JSX.Element => {
  const navigation: any = useNavigation();
  const [data] = useHome();
  const cartData = useAppSelector(state => state.cart.data);
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
        <Text
          style={{
            color: 'white',
          }}>
          Home
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Icon name="cart" type="evilicon" color="white" />
        </TouchableOpacity>
      </View>
      {/* end headers */}
      {/* body start */}
      <View
        style={{
          paddingHorizontal: Scaling.Width(20),
        }}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <CardComponent
              title={item.nama_barang}
              desc={item.deskripsi}
              quantyty={item.quantyty}
              onPress={() => {
                console.log('makan');
              }}
            />
          )}
        />
      </View>
      {/* body end */}
      {/* FLoating Button */}
      <View
        style={{
          position: 'absolute',
          bottom: Scaling.Height(70),
          right: Scaling.Width(20),
        }}>
        <Button
          onPress={() => {
            navigation.navigate('AddItem');
          }}
          buttonStyle={{
            height: Scaling.Height(75),
            width: Scaling.Height(75),
            borderRadius: Scaling.Height(40),
            alignItems: 'center',
          }}
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 35,
            color: 'white',
          }}
        />
      </View>
      {/* End FLoating Button */}
    </View>
  );
};
export default Home;
