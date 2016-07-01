let React = require('react');
let TipActions = require('../actions/TipActions');
let TipStore = require('../stores/TipStore');
let Main = React.createClass({

  componentDidMount: function(){
    TipStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    TipStore.removeChangeListener(this._onChange);
  },

  render: function(){
    return (
      <div>
        <input type="text" ref="_billAmount" placeholder="Bill amount"/>
        <input type="range" max="100" step="5" ref="_tip"/>
        <button onClick={this._onClick}>Calculate</button>
      </div>
    );
  },

  _onClick: function(){
    TipActions.calculateTip(this.refs._billAmount.value,this.refs._tip.value);
  },

  _onChange: function(){
    let data = TipStore.getData();
    console.log(data);
  },



});

module.exports = Main;
