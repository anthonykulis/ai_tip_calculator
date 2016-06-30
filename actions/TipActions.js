let TipDispatcher = require('../disptacher/TipDispatcher');
let TipConstants = require('../constants/TipConstants');
let TipStore = require('../stores/TipStore');

let TipActions = {

  calcuateTip: function(bill_amount, tip_percent){
    TipDispatcher.disptach({
      type: TipConstants.CALCULATE_TIP,
      bill_amount: bill_amount,
      tip_percent: tip_percent
    });
  }
}

module.exports = TipActions;
