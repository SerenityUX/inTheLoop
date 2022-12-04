import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { Dimensions } from "react-native";

class EventPreview extends React.Component {
  render() {
    return (
            <View>
                <Image source={this.props?.selectedEvent?.images} style={{width: 200, height: 200}}></Image>
  <Text style={{
  fontWeight:"100",
  width: (calc(("100%" - 48)/2.5)),
  fontSize: 22,
  marginLeft: 16,
  marginRight: 16
}}>{this.props?.selectedEvent?.name}</Text>

          </View>
    );
  }
}
export default EventPreview;
