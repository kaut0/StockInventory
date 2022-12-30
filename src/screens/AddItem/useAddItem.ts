import {useNavigation} from '@react-navigation/native';
import {PostRequest} from '../../constant/Request';
import * as React from 'react';
import {Alert} from 'react-native';

const useAddItem = (): any => {
  const navigation = useNavigation();
  const [name, setName] = React.useState<string | ''>('');
  const [desc, setDesc] = React.useState<string | ''>('');
  const [quantyty, setQuantyty] = React.useState<Number | 0>(0);

  const postAddItem = async (): Promise<void> => {
    const data = {
      nama: name,
      deskripsi: desc,
      quantyty: quantyty,
    };
    const response = await PostRequest('stock', data);
    if (response.status === 200) {
      Alert.alert('Berhasil menyimpan Item');
      setName('');
      setDesc('');
      setQuantyty(0);
      navigation.goBack();
    }
  };

  return [name, setName, desc, setDesc, quantyty, setQuantyty, postAddItem];
};

export default useAddItem;
