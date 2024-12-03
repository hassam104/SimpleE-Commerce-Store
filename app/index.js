import { View, Button, Text } from "react-native";
import React, { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={{ marginTop: 175 }}>
      <Text
        style={{
          marginLeft: 145,
          fontSize: 25,
          marginBottom: 35,
        }}
      >
        Count: {count}
      </Text>
      <Button onPress={increment} title="increment" color="blue" />
      <Button onPress={decrement} title="decrement" color="red" />
      <Button onPress={reset} title="reset" color="green" />
    </View>
  );
}
