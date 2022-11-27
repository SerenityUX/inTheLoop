import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { Dimensions } from "react-native";

class EventPreview extends React.Component {
  render() {
    return (
            <View>
                <Image source={this.props?.selectedEvent?.images} style={{width: 200, height: 200}}></Image>
                <Text>{this.props?.selectedEvent?.name}</Text>

          </View>
    );
  }
}
export default EventPreview;
