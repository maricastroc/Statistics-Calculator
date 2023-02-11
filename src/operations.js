const arithmeticCalculate = (...numbers) => {
    const sum = numbers.reduce(
        (accum, num) => accum + num,
        0
    );
    return sum / numbers.length;
};

const weightedCalculate = (...entries) => {
    const sum = entries.reduce(
        (accum, { number, weight }) =>
            number * (weight ?? 0) + accum,
        0
    );
    const weightSum = entries.reduce(
        (accum, entry) => (entry.weight ?? 0) + accum,
        0
    );
    return sum / weightSum;
};

const medianCalculate = (...numbers) => {
    let median = 0;
    const orderedNumbers = numbers.sort((a, b) => a - b);
    const exp1 = Math.floor(numbers.length / 2);
    const exp2 = Math.floor(numbers.length / 2) - 1;
    if (numbers.length % 2 !== 0) {
        return (median = orderedNumbers[exp1]);
    } else {
        return (median = arithmeticCalculate(
            orderedNumbers[exp1],
            orderedNumbers[exp2]
        ));
    }
};

const modeCalculate = (...numbers) => {
    const quantities = numbers.map((num) => [
        num,
        numbers.filter((n) => n === num).length,
    ]);
    quantities.sort((a, b) => b[1] - a[1]);

    const newQuantities = [];
    const arrayText = [];

    for (let i = 0; i < quantities.length; i++) {
        if (!arrayText.includes(quantities[i][0])) {
            arrayText.push(quantities[i][0]);
            newQuantities.push([
                quantities[i][0],
                quantities[i][1],
            ]);
        }
    }

    console.log(quantities);
    console.log(newQuantities);

    if (newQuantities[0][1] < 2) {
        return "AMODAL!";
    }

    if (newQuantities[0][1] !== newQuantities[1][1]) {
        return newQuantities[0][0];
    }

    if (
        newQuantities[0][1] === newQuantities[1][1] &&
        newQuantities[1][1] !== newQuantities[2][1]
    ) {
        return `BIMODAL - ${newQuantities[0][0]}, ${newQuantities[1][0]}`;
    }

    if (
        newQuantities[0][1] === newQuantities[1][1] &&
        newQuantities[1][1] === newQuantities[2][1] &&
        newQuantities[2][1] !== newQuantities[3][1]
    ) {
        return `MULTIMODAL - ${newQuantities[0][0]}, ${newQuantities[1][0]}, ${newQuantities[2][0]}`;
    }

    if (
        newQuantities[0][1] === newQuantities[1][1] &&
        newQuantities[1][1] === newQuantities[2][1] &&
        newQuantities[2][1] === newQuantities[3][1]
    ) {
        return `MULTIMODAL - ${newQuantities[0][0]}, ${newQuantities[1][0]}, ${newQuantities[2][0]}, ${newQuantities[3][0]}`;
    }
};

export {
    arithmeticCalculate,
    weightedCalculate,
    modeCalculate,
    medianCalculate,
};
