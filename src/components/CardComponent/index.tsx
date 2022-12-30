import {Button, Card, Icon} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const CardComponent = ({
  title,
  desc,
  quantyty,
  onPress,
}: {
  title: string;
  desc: string;
  quantyty: number;
  onPress: any;
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
            <Button
              onPress={onPress}
              containerStyle={{
                position: 'absolute',
                right: Scaling.Width(2),
                top: Scaling.Height(-15),
              }}
              type="clear">
              <Icon
                name="cart"
                type="evilicon"
                color="blue"
                size={Scaling.Width(20)}
              />
              Add to cart
            </Button>
          </View>
          <Text>{desc}</Text>
          <Text>Quantity: {quantyty}</Text>
        </View>
      </Card>
    </View>
  );
};

export default CardComponent;
