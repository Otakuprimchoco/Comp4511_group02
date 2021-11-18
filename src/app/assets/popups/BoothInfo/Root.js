import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import BoothPopup from './BoothPopup';

class Root2 extends Component {
  render() {
    return (
      <View
        ref={c => (this._root = c)}
        style={{ flex: 1 }}
        {...this.props}
      >
        {this.props.children}
        <BoothPopup
          ref={c => {
            if (c) BoothPopup.popupInstance = c
          }}
        />
      </View>
    )
  }
}

Root2.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}

export default Root2