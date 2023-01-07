import {Button, Card, Icon, Input} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

const CardCartComponent = ({
  title,
  desc,
  quantyty,
}: {
  title: string;
  desc: string;
  quantyty: number;
}): JSX.Element => {
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
            <Text>{title}</Text>
          </View>
          <Text>{desc}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Quantity: {quantyty}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default CardCartComponent;
