import {Button, Icon} from '@rneui/themed';
import {CardComponent} from 'Components';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
const Home = (): JSX.Element => {
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
        <Text
          style={{
            color: 'white',
          }}>
          Home
        </Text>
        <TouchableOpacity>
          <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
        </TouchableOpacity>
      </View>
      {/* end headers */}
      {/* body start */}
      <View
        style={{
          padding: Scaling.Width(20),
        }}>
        <FlatList
          data={[1]}
          showsVerticalScrollIndicator={false}
          renderItem={() => <CardComponent />}
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
            console.log('makan');
          }}
          buttonStyle={{
            height: Scaling.Height(75),
            width: Scaling.Height(75),
            borderRadius: Scaling.Height(40),
            alignItems: 'center',
          }}
          icon={{
            name: 'home',
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
