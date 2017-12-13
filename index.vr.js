import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class GVL extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('dt-gvl-360.JPG')}/>
        <Text
          style={{
            backgroundColor: '#067651',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}>
          GVL
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('GVL', () => GVL);
