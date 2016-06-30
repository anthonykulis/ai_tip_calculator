let TipDispatcher = require('../disptacher/TipDispatcher');
let TipConstants = require('../constants/TipConstants');
let TipStore = require('../stores/TipStore');

let TipActions = {

  // When the calculate button is pressed, we will call this action.
  // it will then disptach the event CALCULATE_TIP with data
  calcuateTip: function(bill_amount, tip_percent){
    TipDispatcher.disptach({
      type: TipConstants.CALCULATE_TIP,
      bill_amount: bill_amount,
      tip_percent: tip_percent
    });
  }
}

module.exports = TipActions;
