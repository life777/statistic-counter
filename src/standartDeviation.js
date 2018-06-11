const MeanCounter = require("./mean.js");

class StandartDeviationCounter {
    constructor () {
        this.meanCounter = new MeanCounter();
        this.sn = 0;
    }

    add (val) {
        let prevMean = this.meanCounter.calculate();
        this.meanCounter.add(val);

        let currMean = this.meanCounter.calculate();
        this.sn += (val - prevMean) * (val - currMean);
    }

    calculate () {
        let counter = this.meanCounter.getCounter();

        if (counter === 0) {
            return 0;
        }

        return Math.sqrt(this.sn / counter);
    }
}1

module.exports = StandartDeviationCounter;