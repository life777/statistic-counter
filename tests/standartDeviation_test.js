const StandartDeviationCounter = require("../src/standartDeviation");
const assert = require("assert");

describe('Calculate mean', function() {
    beforeEach(function() {
        this.sd = new StandartDeviationCounter();
    });


    it("Default value should be 0", function() {
        assert.equal(this.sd.calculate(), 0);
    });

    it("Standart deviation of sequence of numbers 1, 2, 3, 4, 5", function() {
        [1, 2, 3, 4, 5].forEach(n => { this.sd.add(n) });
        assert.equal(this.sd.calculate(), 2);
    });

    it("Float standart deviation", function() {
        [2, 3].forEach(n => { this.sd.add(n) });
        assert.equal(this.sd.calculate(), 0.25);
    });

    it("Check zero standart deviation", function() {
        [ 1, 1, 1 ].forEach(n => { this.sd.add(n) });

        assert.equal(this.sd.calculate(), 0);
    });
});