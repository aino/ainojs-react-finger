/** @jsx React.DOM */

var Finger = require('ainojs-finger')
var React = require('react')
var getWidth = function(elem) {

  var w = Math.ceil( ("getBoundingClientRect" in elem) ?
    elem.getBoundingClientRect().width :
    elem.offsetWidth )

  if ( !w && comp )
    w = comp(elem, null).width.replace('px','')

  return w
}
var extend = function(a, b) {
  for (var i in b)
    a[i] = b[i]
}
module.exports = React.createClass({
  getDefaultProps: function() {
    var noop = function(){}
    return {
      change: noop,
      complete: noop,
      barn: this.props.children
    }
  },
  getInitialState: function() {
    return { width: 0 }
  },
  componentDidMount: function() {
    var container = this.getDOMNode()
    window.addEventListener('resize', this.setWidth)
    this.setWidth()
    this.setChildrenCSS(function(elem, i) {
      return { position: 'absolute', height: '100%' }
    })
    Finger(container,{
      onchange: this.props.change,
      oncomplete: this.props.complete
    })
  },
  componentWillUnmount: function() {
    window.removeEventListener('resize', this.setWidth)
  },
  setChildrenCSS: function(fn) {
    // TODO is there a "react way" of setting inline styles to children?
    var styles
    Array.prototype.forEach.call(this.refs.item.getDOMNode().children, function(child, i) {
      styles = fn(child, i)
      for(var prop in styles)
        child.style[prop] = styles[prop]
    })
  },
  setWidth: function() {
    var w = getWidth(this.getDOMNode())
    this.setState({ width: w })
    this.setChildrenCSS(function(elem, i) {
      return { left: (i*w)+'px', width: w+'px' }
    })
  },
  render: function() {
    var w = this.state.width
    return (
      <div className="finger" style={{ position:'relative', width:'100%', height:'100%', overflow:'hidden' }}>
        <div ref="item" className="finger-items" style={{ width: this.props.children.length*w, height: '100%' }}>
          {this.props.children}
        </div>
      </div>
    )
  }
})