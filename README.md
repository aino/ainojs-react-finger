React Finger
------------

React Component for ainojs-finger
Will automatically stretch to 100% width/height of it’s parent container

Usage:

    var FingerComponent = require('ainojs-react-finger')

    <FingerComponent change={this.onchange} complete={this.oncomplete}>
      <div className="item" />
      <div className="item" />
      <div className="item" />
    </FingerComponent>