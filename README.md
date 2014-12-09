React Finger
------------

React Component for ainojs-finger

Will automatically stretch to 100% width/height of it’s parent container

Usage:

    var FingerComponent = require('ainojs-react-finger')

    onFinger: function(instance) {
      // do stuff with Finger API
    }

    <FingerComponent onReady={this.onFinger}>
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </FingerComponent>