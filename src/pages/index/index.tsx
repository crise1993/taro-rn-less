import { Component, PropsWithChildren } from "react";
import Taro, { View, Text } from "@tarojs/components";
import "./index.less";

export default class Index extends Component<PropsWithChildren> {
  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        {/* <Text style={{ height: Taro.pxTransform(100) }}>Hello world!</Text> */}
        <Text>Hello world!</Text>
      </View>
    );
  }
}
