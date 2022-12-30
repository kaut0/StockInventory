import * as React from 'react';
import {GetRequest} from '../../constant/Request';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
const useHome = (): any => {
  const navigation = useNavigation();
  const [data, setData] = React.useState<any | null>([]);
  const getData = async () => {
    const response = await GetRequest('stock');
    const result = response.data;
    if (response.status === 200) {
      setData(result);
    }
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
  return [data];
};

export default useHome;
