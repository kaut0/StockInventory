import {Button, Card, Icon, Input} from '@rneui/themed';
import {Scaling} from 'Styles';
import * as React from 'react';
import {View, Text, TextInput} from 'react-native';

const CardComponent = ({
  title,
  desc,
  quantyty,
  onPress,
  onChange,
  onDelete,
  onEdit,
}: {
  title: string;
  desc: string;
  quantyty: number;
  onPress: any;
  onChange: any;
  onDelete: any;
  onEdit: any;
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
              alignSelf: 'flex-end',
              marginBottom: Scaling.Height(10),
              justifyContent: 'space-between',
              width: Scaling.Width(100),
            }}>
            <Button onPress={onEdit} type="clear">
              <Icon
                name="edit"
                type="material-icon"
                color="green"
                size={Scaling.Width(20)}
              />
            </Button>
            <Button onPress={onDelete} type="clear">
              <Icon
                name="delete"
                type="material-icon"
                color="red"
                size={Scaling.Width(20)}
              />
            </Button>
          </View>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text>Quantity: {quantyty}</Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              onChangeText={onChange}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default CardComponent;
