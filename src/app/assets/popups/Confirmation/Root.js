import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import BookingConfirmation from './BookingConfirmationPopup';

class Root extends Component {
  render() {
    return (
      <View
        ref={c => (this._root = c)}
        style={{ flex: 1 }}
        {...this.props}
      >
        {this.props.children}
        <BookingConfirmation
          ref={c => {
            if (c) BookingConfirmation.popupInstance = c
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