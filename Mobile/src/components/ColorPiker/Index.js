import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Slider } from 'react-native';
import {setColor} from '../../redux/reducers/lightReducer';
import {useDispatch,useSelector} from 'react-redux';

const RGBPicker = () => {
  const dispatch = useDispatch();
  const color = useSelector(state => state.light.color);

  const [red, setRed] = useState(color.r);
  const [green, setGreen] = useState(color.g);
  const [blue, setBlue] = useState(color.b);

  useEffect(() => {
    dispatch(setColor({r:red,g:green,b:blue}));
  }, [red,green,blue]);

  return (
    <View className = "p-10">
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold' }}>Red:</Text>
        <Text>{Math.round(color.r)}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={color.r}
        onValueChange={value => setRed(value)}
        thumbTintColor="red"
        minimumTrackTintColor="red"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold' }}>Green:</Text>
        <Text>{Math.round(green)}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={color.g}
        onValueChange={value => setGreen(value)}
        thumbTintColor="green"
        minimumTrackTintColor="green"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: 'bold' }}>Blue:</Text>
        <Text>{Math.round(color.b)}</Text>
      </View>
      <Slider
        minimumValue={0}
        maximumValue={255}
        value={color.b}
        onValueChange={value => setBlue(value)}
        thumbTintColor="blue"
        minimumTrackTintColor="blue"
      />
      <View
        style={{
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: 'center',
          marginTop: 20
        }}
      />
    </View>
  );
};

export default RGBPicker;
