const labelArithmetic = document.getElementById(
    "label-arithmetic"
);
const inputArithmetic = document.getElementById(
    "input-arithmetic"
);
const btnCalculateArithmetic = document.getElementById(
    "btn-calculate-arithmetic"
);
const btnClearArithmetic = document.getElementById(
    "btn-clear-arithmetic"
);
const btnHideArithmetic = document.getElementById(
    "btn-hide-arithmetic"
);
const resultArithmetic = document.getElementById(
    "result-arithmetic"
);
const btnCopyArithmetic = document.getElementById(
    "btn-copy-arithmetic"
);
const btnStartArithmetic = document.getElementById(
    "btn-start-arithmetic"
);

const hideArithmetic = () => {
    [
        labelArithmetic,
        inputArithmetic,
        btnCalculateArithmetic,
        btnClearArithmetic,
        btnHideArithmetic,
        resultArithmetic,
        btnCopyArithmetic,
    ].forEach((element) => element.classList.add("hide"));
    btnStartArithmetic.classList.remove("hide");
};
const showArithmetic = () => {
    [
        labelArithmetic,
        inputArithmetic,
        btnCalculateArithmetic,
        btnClearArithmetic,
        btnHideArithmetic,
        resultArithmetic,
        btnCopyArithmetic,
    ].forEach((element) =>
        element.classList.remove("hide")
    );
    btnStartArithmetic.classList.add("hide");
};

const arithmeticCalculate = (...numbers) => {
    const sum = numbers.reduce(
        (accum, num) => accum + num,
        0
    );
    return sum / numbers.length;
};

export {
    labelArithmetic,
    inputArithmetic,
    btnCalculateArithmetic,
    btnClearArithmetic,
    btnCopyArithmetic,
    btnHideArithmetic,
    btnStartArithmetic,
    resultArithmetic,
    hideArithmetic,
    showArithmetic,
    arithmeticCalculate,
};
