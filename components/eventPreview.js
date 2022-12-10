import React, { useState } from "react";
import { Text, View, Image, TouchableHighlight } from "react-native";
import { Dimensions } from "react-native";
class EventPreview extends React.Component {
  windowWidth = Dimensions.get("window").width;
  windowHeight = Dimensions.get("window").height;

  render() {
    return (
  <View style={{marginLeft: 16, paddingBottom: 96, marginRight: this.props.isFinal ? 16 : 0}}>
  <Image source={this.props?.selectedEvent?.images} style={{width: (this.windowHeight < 800 ? (((this.windowWidth - 48)/1.75)) : ((this.windowWidth - 48)/1.25)), height: (this.windowHeight < 800 ? (((this.windowWidth - 48)/1.75)) : ((this.windowWidth - 48)/1.25)), borderRadius: 12}}></Image>
  <Text style={{
  fontWeight:"400",
  marginTop: 8,
  width: (this.windowHeight < 800 ? (((this.windowWidth - 48)/1.75) - 24) : ((this.windowWidth - 48)/1.25) - 24),
  fontSize: 18,
  marginLeft: 12,
  marginRight: 12
}}>{this.props?.selectedEvent?.name}</Text>
    <Text style={{color: "#1E70EA", marginLeft: 12, marginRight: 12}}>{this.props?.selectedEvent?.date[2]}/{this.props?.selectedEvent?.date[1]}/{this.props?.selectedEvent?.date[0]}</Text>

          </View>
    );
  }
}
export default EventPreview;
