class Strategy {
  constructor(config) {
    this.name = config.name;
    this.timeframe = config.timeframe;
    this.indicators = config.indicators;
  }
}

class Indicator {
  constructor() {
    this.values = [];
  }
}

class SMA extends Indicator {
  constructor(period) {
    super();
    this.period = period;
  }
}

async function backtest(strategy, config) {
  // Backtesting logic to be implemented
  return {
    returns: 0,
    sharpeRatio: 0,
    maxDrawdown: 0,
  };
}

const indicators = {
  SMA,
};

module.exports = {
  Strategy,
  Indicator,
  indicators,
  backtest,
};
