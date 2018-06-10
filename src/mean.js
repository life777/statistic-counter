class MeanCounter {
    constructor () {
        this.counter = 0;
        this.mean = 0;
    }

    add (val) {
        this.counter += 1;
        this.mean += (val - this.mean) / this.counter;
    }

    calculate () {
        return this.mean;
    }
}


module.exports = MeanCounter; 