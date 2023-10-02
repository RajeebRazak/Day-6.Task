class UberCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
        this.baseFare = baseFare;
        this.costPerKm = costPerKm;
        this.costPerMinute = costPerMinute;
    }

    calculatePrice(distance, duration) {
        const fare = this.baseFare + (distance * this.costPerKm) + (duration * this.costPerMinute);
        return fare;
    }
}

// Example usage:
const myUberCalculator = new UberCalculator(10, 2, 0.2);

const distance = 5; // in kilometers
const duration = 15; // in minutes

const totalPrice = myUberCalculator.calculatePrice(distance, duration);
console.log(`The total price for the ride is $${totalPrice}`);
