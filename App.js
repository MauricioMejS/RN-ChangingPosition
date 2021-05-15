import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color1: "#FF0000",
      color2: "#000000",
      color3: "#FFFF00",
      estado: false,
      order: "row",
    };
  }
  _Principal(x) {
    this._Change(x);
    this._onChange();
  }
  _onChange() {
    if (
      this.state.color1 == "#00FF00" &&
      this.state.color2 == "#0000FF" &&
      this.state.color3 == "#00FFFF"
    ) {
      this.setState({ order: "column" });
    } else if (
      this.state.color1 == "#FF0000" &&
      this.state.color2 == "#000000" &&
      this.state.color3 == "#FFFF00"
    ) {
      this.setState({ order: "row" });
    }
  }
  _Change(condition) {
    if (condition == 1) {
      if (this.state.color1 == "#FF0000") {
        this.setState((state) => ({ color1: (state.color1 = "#00FF00") }));
      } else {
        this.setState((state) => ({ color1: (state.color1 = "#FF0000") }));
      }
    }
    if (condition == 2) {
      if (this.state.color2 == "#000000") {
        this.setState((state) => ({ color2: (state.color2 = "#0000FF") }));
      } else {
        this.setState((state) => ({ color2: (state.color2 = "#000000") }));
      }
    }g
    if (condition == 3) {
      if (this.state.color3 == "#FFFF00") {
        this.setState((state) => ({ color3: (state.color3 = "#00FFFF") }));
      } else {
        this.setState((state) => ({ color3: (state.color3 = "#FFFF00") }));
      }
    }
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: this.state.order,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: this.state.color1,
            height: 100,
            width: 100,
            margin: 5,
          }}
          onPress={() => this._Principal(1)}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: this.state.color2,
            height: 100,
            width: 100,
            margin: 5,
          }}
          onPress={() => this._Change(2)}
        ></TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: this.state.color3,
            height: 100,
            width: 100,
            margin: 5,
          }}
          onPress={() => this._Change(3)}
        ></TouchableOpacity>
      </View>
    );
  }
}
