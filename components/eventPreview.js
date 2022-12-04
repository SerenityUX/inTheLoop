import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { Dimensions } from "react-native";

class EventPreview extends React.Component {
  windowWidth = Dimensions.get("window").width;

  render() {
    return (
  <View style={{marginLeft: 16, marginRight: this.props.isFinal ? 16 : 0}}>
  <Image source={this.props?.selectedEvent?.images} style={{width: (this.windowWidth - 48)/1.75, height: (this.windowWidth - 48)/1.75, borderRadius: 12}}></Image>
  <Text style={{
  fontWeight:"400",
  marginTop: 8,
  width: ((this.windowWidth - 48)/1.75) - 24,
  fontSize: 18,
  marginLeft: 12,
  marginRight: 12
}}>{this.props?.selectedEvent?.name}</Text>

          </View>
    );
  }
}
export default EventPreview;
