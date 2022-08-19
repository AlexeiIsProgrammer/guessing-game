class GuessingGame {
    constructor() 
    {
        this.root = 0;
        this.max = null;
        this.min = null;
    }

    setRange(min, max) {
        this.max = max;
        this.min = min;
        this.root = 0;
    }

    guess() {
        let rNum = Math.round((this.max + this.min) / 2);
        this.root = rNum;

        return rNum;
    }

    lower() {
        this.max = this.root;
    }

    greater() {
        this.min = this.root;
    }
}

module.exports = GuessingGame;
