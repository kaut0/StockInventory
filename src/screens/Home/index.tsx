import {Badge, Button, Icon, Input} from '@rneui/themed';
import {CardComponent} from 'Components';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, Modal} from 'react-native';
import useHome from './useHome';
import {useNavigation} from '@react-navigation/native';
import {RefreshControl} from 'react-native';

const Home = (): JSX.Element => {
  const navigation: any = useNavigation();
  const [
    data,
    addToCart,
    getQuantyty,
    setQuantyty,
    dataCart,
    deleteItem,
    refresing,
    onRefresh,
    showModal,
    setShowModal,
    openModal,
    dataModal,
    setDataModal,
    updateItem,
  ] = useHome();
  console.log(dataModal);
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
          <Icon
            name="cart"
            size={Scaling.Width(40)}
            type="evilicon"
            color="white"
          />
          {dataCart.length > 0 && (
            <Badge
              value={dataCart.length}
              status="success"
              containerStyle={{
                position: 'absolute',
                top: Scaling.Height(0),
                right: Scaling.Width(2),
              }}
            />
          )}
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
          refreshControl={
            <RefreshControl refreshing={refresing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <CardComponent
              title={item.nama_barang}
              desc={item.deskripsi}
              quantyty={item.quantyty}
              onDelete={() => {
                deleteItem(item.id);
              }}
              onEdit={() => {
                openModal(item);
              }}
              onChange={(text: number) => {
                let value = [...getQuantyty];
                value[index] = text;
                setQuantyty(value);
              }}
              onPress={() => {
                addToCart(item, index);
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
      {/* Modal Start */}
      <Modal visible={showModal}>
        <View style={{alignSelf: 'flex-end'}}>
          <Button onPress={() => setShowModal(false)} type="clear">
            <Icon
              name="close"
              type="material-icon"
              color="grey"
              size={Scaling.Width(30)}
            />
          </Button>
        </View>
        <View
          style={{
            paddingTop: Scaling.Height(30),
            paddingHorizontal: Scaling.Width(20),
          }}>
          <Input
            value={dataModal.nama_barang}
            onChangeText={val => setDataModal({...dataModal, nama_barang: val})}
            placeholder="Masukkan Nama Item"
          />
          <Input
            value={dataModal.deskripsi}
            onChangeText={val => setDataModal({...dataModal, deskripsi: val})}
            placeholder="Masukkan Deskripsi Item"
          />
          <Input
            value={dataModal.quantyty}
            onChangeText={val => setDataModal({...dataModal, quantyty: val})}
            keyboardType="numeric"
            placeholder="Jumlah Item"
          />
          <Button title="Update Item" onPress={updateItem} />
        </View>
      </Modal>
      {/* Modal End */}
    </View>
  );
};
export default Home;
