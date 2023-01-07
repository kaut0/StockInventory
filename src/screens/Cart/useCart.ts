import {useNavigation} from '@react-navigation/native';
import {PostRequest} from '../../constant/Request';
import {useAppDispatch} from '../../redux/Hooks/index';
import {cartEmpty} from '../../redux/Reducer/cartReducer';
import {Alert} from 'react-native';
const useCart = () => {
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();
  const checkoutItems = async (data: any): Promise<any> => {
    const value = {
      data: data,
    };
    const response = await PostRequest('stock/take_item', value);
    if (response.status === 200) {
      dispatch(cartEmpty([]));
      Alert.alert('Berhasil Mengambil Barang');
      navigation.goBack();
    }
  };
  return [checkoutItems];
};

export default useCart;
