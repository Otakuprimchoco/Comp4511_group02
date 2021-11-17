import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import AboutGroupPopup from './AboutGroupPopup';

class Root extends Component {
  render() {
    return (
      <View
        ref={c => (this._root = c)}
        style={{ flex: 1 }}
        {...this.props}
      >
        {this.props.children}
        <AboutGroupPopup
          ref={c => {
            if (c) AboutGroupPopup.popupInstance = c
          }}
        />
      </View>
    )
  }
}

Root.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array
  ])
}

export default Root