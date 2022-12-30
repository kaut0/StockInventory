import {useNavigation} from '@react-navigation/native';
import {Button, Icon, Input} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import useAddItem from './useAddItem';
const AddItem = (): JSX.Element => {
  const navigation = useNavigation();
  const [name, setName, desc, setDesc, quantyty, setQuantyty, postAddItem] =
    useAddItem();
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
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
          <Icon name="arrow-left" type="font-awesome" color="white" />
        </TouchableOpacity>
        <Text
          style={{
            color: 'white',
          }}>
          Add Item
        </Text>
      </View>
      {/* end headers */}
      {/* body start */}
      <View
        style={{
          padding: Scaling.Width(20),
        }}>
        <Input
          placeholder="Masukkan Nama Item"
          value={name}
          onChangeText={val => setName(val)}
        />
        <Input
          value={desc}
          onChangeText={val => setDesc(val)}
          placeholder="Masukkan Deskripsi Item"
        />
        <Input
          value={quantyty}
          onChangeText={val => setQuantyty(val)}
          keyboardType="numeric"
          placeholder="Jumlah Item"
        />

        <Button title="Add Item" onPress={postAddItem} />
      </View>
      {/* body end */}
    </View>
  );
};
export default AddItem;
