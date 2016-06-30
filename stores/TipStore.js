let TipDispatcher = require('../disptacher/TipDispatcher');
let EventEmitter = require('events').EventEmitter;
let TipConstants = require('../constants/TipConstants');
let assign = require('object-assign');

let CHANGE_EVENT = 'change';

let _data = {
  bill_amount: 0,
  tip_percent: 0,
  tip_amount: 0,
  total_amount: 0
};

function calculateTipAmount(){
  _data.tip_amount = _data.bill_amount * _data.tip_percent;
}

function calculateTotalAmount(){
  _data.total_amount = _data.bill_amount + _data.tip_amount;
}

function stringToDecimal(percentString){
  let t = percentString.substring(0, -2);
  _data.tip_percent = parseFloat(t)/100;
}

let ScheduleStore = assign({}, EventEmitter.prototype, {
  getData: function(){ return _data; },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  },

});

// This registers the events with an action.type.
TipDispatcher.register(function(action){
  switch(action.type){

    // when the event occurs, the store will manipulate the data into something useful
    // its overkill, but i wanted you to have plenty of example.
    case TipConstants.CALCULATE_TIP:
      stringToDecimal(action.tip_percent);
      calculateTipAmount();
      calculateTotalAmount();
      this.emit(CHANGE_EVENT);
      break;
    default: //NOTHING
  };
});

module.exports = TipStore;
