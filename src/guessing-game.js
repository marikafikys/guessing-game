class GuessingGame {
    constructor() {}
    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        this.half = Math.round(this.min+(this.max - this.min)/2)
        return this.half
    }

    lower() {
        this.max = this.half
    }

    greater() {
        this.min = this.half
    }
}

module.exports = GuessingGame
