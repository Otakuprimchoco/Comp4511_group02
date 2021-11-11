import React from 'react';
  import {
    Animated,
    Easing,
    StyleSheet,
    Pressable,
    View,
    Text,
  } from 'react-native';

const ButtonSlider = ({textL, textR, toggleFn}) => {
const animatedValue = React.useRef(new Animated.Value(0)).current;

const startAnimation = (toValue) => {
  Animated.timing(animatedValue, {
    toValue,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();
};

const left = animatedValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['1%', '49%'],
  extrapolate: 'clamp',
});

const scale = animatedValue.interpolate({
  inputRange: [0, 0.5, 1],
  outputRange: [1, 0.9, 1],
  extrapolate: 'clamp',
});

return (
  <View style={styles.container}>
    <View style={styles.sliderContainer}>
      <Animated.View style={[styles.slider, { left }]} />
      <Pressable
        style={styles.clickableArea}
        onPressIn={startAnimation.bind(null, 0)}
        onPress={toggleFn}>
        <Animated.Text
          style={[styles.sliderText, { transform: [{ scale }] }]}>
          {textL}
        </Animated.Text>
      </Pressable>
      <Pressable
        style={styles.clickableArea}
        onPressIn={startAnimation.bind(null, 1)}
        onPress={toggleFn}>
        <Animated.Text
          style={[styles.sliderText, { transform: [{ scale }] }]}>
          {textR}
        </Animated.Text>
      </Pressable>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  // flex: 1,
  // justifyContent: 'center',
  alignItems: 'center',
},
sliderContainer: {
  width: '95%',
  height: 50,
  borderRadius: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#006666',
},
clickableArea: {
  width: '50%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
},
sliderText: {
  fontSize: 17,
  fontWeight: '500',
  color: "black",

},
slider: {
  position: 'absolute',
  width: '50%',
  height: '88%',
  borderRadius: 10,
  backgroundColor: '#f4f4f4',
},
});

export default ButtonSlider;
