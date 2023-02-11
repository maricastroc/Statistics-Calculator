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
    labelArithmetic.classList.add("hide");
    inputArithmetic.classList.add("hide");
    btnCalculateArithmetic.classList.add("hide");
    btnClearArithmetic.classList.add("hide");
    btnHideArithmetic.classList.add("hide");
    resultArithmetic.classList.add("hide");
    btnCopyArithmetic.classList.add("hide");
    btnStartArithmetic.classList.remove("hide");
};

const showArithmetic = () => {
    labelArithmetic.classList.remove("hide");
    inputArithmetic.classList.remove("hide");
    btnCalculateArithmetic.classList.remove("hide");
    btnClearArithmetic.classList.remove("hide");
    btnHideArithmetic.classList.remove("hide");
    resultArithmetic.classList.remove("hide");
    btnCopyArithmetic.classList.remove("hide");
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
