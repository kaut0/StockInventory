import * as React from 'react';
import {Alert} from 'react-native';
import {GetRequest, PostRequest} from '../../constant/Request';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useAppSelector, useAppDispatch} from '../../redux/Hooks/index';
import {cartData} from '../../redux/Reducer/cartReducer';
const useHome = (): any => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const dataCart = useAppSelector(state => state.cart.data);
  const [data, setData] = React.useState<any | null>([]);
  const [getQuantyty, setQuantyty] = React.useState<any | null>([]);
  const [refresing, setRefreshing] = React.useState<boolean | null>(false);
  const [showModal, setShowModal] = React.useState<boolean | false>(false);
  const [dataModal, setDataModal] = React.useState<any>({
    id: 0,
    nama_barang: '',
    quantyty: 0,
    deskripsi: '',
  });
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData();
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const getData = async () => {
    const response = await GetRequest('stock');
    const result = response.data;
    if (response.status === 200) {
      setData(result);
    }
  };
  const addToCart = (data: any, index: number) => {
    const itemSelect = {
      item_id: data.id,
      name: data.nama_barang,
      desc: data.deskripsi,
      quantyty: getQuantyty[index] ? getQuantyty[index] : 0,
    };
    dispatch(cartData(itemSelect));
  };
  const deleteItem = async (id_item: number): Promise<any> => {
    const response = await PostRequest(`stock/delete/${id_item}`, '');
    if (response.status === 200) {
      Alert.alert('Berhasil menghapus');
      onRefresh();
    }
  };
  const updateItem = async (): Promise<any> => {
    const data = {
      nama: dataModal.nama_barang,
      quantyty: dataModal.quantyty,
      deskripsi: dataModal.deskripsi,
    };
    const response = await PostRequest(`stock/update/${dataModal.id}`, data);
    console.log(response);
    if (response.status === 200) {
      Alert.alert('Success', 'Berhasil Update data', [
        {text: 'OK', onPress: () => setShowModal(false)},
      ]);
      onRefresh();
    }
  };
  const openModal = (item: any) => {
    setDataModal({
      id: item.id,
      nama_barang: item.nama_barang,
      quantyty: item.quantyty,
      deskripsi: item.deskripsi,
    });
    setShowModal(true);
  };
  useFocusEffect(
    React.useCallback(() => {
      let isFocus = true;
      if (isFocus) {
        getData();
      }
      return () => (isFocus = false);
    }, []),
  );
  return [
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
  ];
};

export default useHome;
