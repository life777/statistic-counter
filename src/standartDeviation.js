const MeanCounter = require("./mean.js");

class StandartDeviationCounter {
    constructor () {
        this.meanCounter = new MeanCounter();
        this.qSum = 0;
    }

    add (val) {
        this.meanCounter.add(val);
        this.qSum += Math.pow(val, 2);
    }

    calculate () {
        let counter = this.meanCounter.getCounter();
        let mean = this.meanCounter.calculate();

        if (counter === 0) {
            return 0;
        }

        return this.qSum / counter - Math.pow(mean, 2);
    }
}

module.exports = StandartDeviationCounter;