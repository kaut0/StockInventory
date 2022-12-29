import {Card, Icon} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CardComponent = (): JSX.Element => {
  return (
    <View>
      <Card
        containerStyle={{
          borderRadius: Scaling.Width(16),
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text>Title</Text>
            <TouchableOpacity>
              <Icon name="sc-telegram" type="evilicon" color="#517fa4" />
            </TouchableOpacity>
          </View>
          <Text>Desc</Text>
          <Text>Quantity: 12</Text>
        </View>
      </Card>
    </View>
  );
};

export default CardComponent;
