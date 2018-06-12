const MeanCounter = require("../src/mean.js");
const assert = require("assert");

describe('Calculate mean', function() {
    beforeEach(function() {
        this.mean = new MeanCounter();
    });

    it("Default value should be 0", function() {
        assert.equal(this.mean.calculate(), 0);
    });

    it("Mean of sequence of numbers 1, 2, 3, 4, 5", function() {
        [1, 2, 3, 4, 5].forEach(n => { this.mean.add(n) });
        assert.equal(this.mean.calculate(), 3);
    });

    it("Mean of sequence of big numbers", function() {
        [
            Number.MAX_SAFE_INTEGER / 2,
            Number.MAX_SAFE_INTEGER / 2,
            Number.MAX_SAFE_INTEGER / 2
        ].forEach(n => { this.mean.add(n) });
        
        assert.equal(this.mean.calculate(), Number.MAX_SAFE_INTEGER / 2);
    });

    it("Mean of sequence of really big numbers", function() {
        [
            Number.MAX_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER,
            1
        ].forEach(n => { this.mean.add(n) });
        
        assert.equal(this.mean.calculate(), 6004799503160661);
    });

    it("Check counter default value", function() {
        assert.equal(this.mean.getCounter(), 0);
    });

    it("Check counter value", function() {
        [ 1, 1, 1 ].forEach(n => { this.mean.add(n) });

        assert.equal(this.mean.getCounter(), 3);
    });
});