//Allowed Keys
const allowedKeys = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    " ",
    ",",
];

//Warning
const warning = document.getElementById("warning");
warning.classList.add("hide");

document
    .getElementById("btn-close")
    .addEventListener("click", () => {
        warning.classList.add("hide");
    });

//Preparing Arithmetic Average Calculate Interface
import {
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
} from "./arithmetic-index.js";

hideArithmetic();

btnStartArithmetic.addEventListener(
    "click",
    showArithmetic
);
btnHideArithmetic.addEventListener("click", hideArithmetic);

//Preparing Median Calculate Interface
import {
    labelMedian,
    inputMedian,
    btnCalculateMedian,
    btnClearMedian,
    btnCopyMedian,
    btnHideMedian,
    btnStartMedian,
    resultMedian,
    hideMedian,
    showMedian,
} from "./median-index.js";

hideMedian();

btnStartMedian.addEventListener("click", showMedian);
btnHideMedian.addEventListener("click", hideMedian);

//Preparing Mode Calculate Interface
import {
    labelMode,
    inputMode,
    btnCalculateMode,
    btnClearMode,
    btnCopyMode,
    btnHideMode,
    btnStartMode,
    resultMode,
    hideMode,
    showMode,
} from "./mode-index.js";

hideMode();

btnStartMode.addEventListener("click", showMode);
btnHideMode.addEventListener("click", hideMode);

//Preparing Weighted Average Calculate Interface
import {
    hideWeighted,
    showWeighted,
    inputWeighted,
    labelWeighted,
    btnAddRow,
    btnCalculateWeighted,
    btnClearWeighted,
    btnCopyWeighted,
    btnHideWeighted,
    btnStartWeighted,
    resultWeighted,
    addRow,
} from "./weighted-index.js";

hideWeighted();

btnStartWeighted.addEventListener("click", showWeighted);
btnHideWeighted.addEventListener("click", hideWeighted);

//Adding new inputs on Weighted Average Calculate
btnAddRow.addEventListener("click", addRow);

//Operations
import {
    arithmeticCalculate,
    weightedCalculate,
    modeCalculate,
    medianCalculate,
} from "./operations.js";

//Setting Arithmetic Calculate
btnCalculateArithmetic.addEventListener("click", () => {
    let numbers = inputArithmetic.value
        .split(",")
        .map((number) => {
            return parseInt(number);
        });

    if (!inputArithmetic.value) {
        warning.classList.remove("hide");
    } else {
        resultArithmetic.innerText = `Arithmetic Average is: ${arithmeticCalculate(
            ...numbers
        )}`;

        btnCopyArithmetic.addEventListener("click", () => {
            if (
                btnCopyArithmetic.innerText ===
                "Copy Result"
            ) {
                btnCopyArithmetic.innerText = "Copied!";
                window.navigator.clipboard.writeText(
                    arithmeticCalculate(...numbers)
                );
            } else {
                btnCopyArithmetic.innerText = "Copy Result";
            }
        });
    }
});

btnClearArithmetic.addEventListener("click", () => {
    inputArithmetic.value = "";
    resultArithmetic.innerText = "Result:";

    btnCopyArithmetic.removeEventListener("click", () => {
        btnCopyArithmetic.innerText = "Copied!";
        window.navigator.clipboard.writeText(
            arithmeticCalculate(...numbers)
        );
    });

    btnCopyArithmetic.addEventListener("click", () => {
        btnCopyArithmetic.innerText = "Copy Result";
        window.navigator.clipboard.writeText("");
    });
});

inputArithmetic.addEventListener("keydown", (ev) => {
    ev.preventDefault();

    let numbers = inputArithmetic.value
        .split(",")
        .map((number) => {
            return parseInt(number);
        });

    if (allowedKeys.includes(ev.key)) {
        inputArithmetic.value += ev.key;
    } else if (ev.key === "Backspace") {
        inputArithmetic.value = inputArithmetic.value.slice(
            0,
            -1
        );
    } else if (ev.key === "Enter") {
        if (
            !inputArithmetic.value ||
            inputArithmetic.value === ","
        ) {
            warning.classList.remove("hide");
            inputArithmetic.value = "";
        } else {
            resultArithmetic.innerText = `Arithmetic Average is: ${arithmeticCalculate(
                ...numbers
            )}`;

            btnCopyArithmetic.addEventListener(
                "click",
                () => {
                    if (
                        btnCopyArithmetic.innerText ===
                        "Copy Result"
                    ) {
                        btnCopyArithmetic.innerText =
                            "Copied!";
                        window.navigator.clipboard.writeText(
                            arithmeticCalculate(...numbers)
                        );
                    } else {
                        btnCopyArithmetic.innerText =
                            "Copy Result";
                    }
                }
            );
        }
    }
});

//Setting Median Calculate
btnCalculateMedian.addEventListener("click", () => {
    let numbers = inputMedian.value
        .split(",")
        .map((number) => {
            return parseInt(number);
        });

    if (!inputMedian.value) {
        warning.classList.remove("hide");
    } else {
        resultMedian.innerText = `Median is: ${medianCalculate(
            ...numbers
        )}`;
        btnCopyMedian.addEventListener("click", () => {
            if (btnCopyMedian.innerText === "Copy Result") {
                btnCopyMedian.innerText = "Copied!";
                window.navigator.clipboard.writeText(
                    medianCalculate(...numbers)
                );
            } else {
                btnCopyMedian.innerText = "Copy Result";
            }
        });
    }
});

inputMedian.addEventListener("keydown", (ev) => {
    ev.preventDefault();

    if (allowedKeys.includes(ev.key)) {
        inputMedian.value += ev.key;
    }
    if (ev.key === "Backspace") {
        inputMedian.value = inputMedian.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
        let numbers = inputMedian.value
            .split(",")
            .map((number) => {
                return parseInt(number);
            });
        if (!inputMedian.value) {
            warning.classList.remove("hide");
        } else {
            resultMedian.innerText = `Median is: ${medianCalculate(
                ...numbers
            )}`;
            btnCopyMedian.addEventListener("click", () => {
                if (
                    btnCopyMedian.innerText ===
                    "Copy Result"
                ) {
                    btnCopyMedian.innerText = "Copied!";
                    window.navigator.clipboard.writeText(
                        medianCalculate(...numbers)
                    );
                } else {
                    btnCopyMedian.innerText = "Copy Result";
                }
            });
        }
    }
});

btnClearMedian.addEventListener("click", () => {
    inputMedian.value = "";
    resultMedian.innerText = "Result:";

    btnCopyMedian.addEventListener("click", () => {
        btnCopyMedian.innerText = "Copy Result";
        window.navigator.clipboard.writeText(
            medianCalculate("")
        );
    });

    btnCopyMedian.innerText = "Copy Result";
});

//Setting Mode Calculate
btnCalculateMode.addEventListener("click", () => {
    let numbers = inputMode.value
        .split(",")
        .map((number) => {
            return parseInt(number);
        });

    if (!inputMode.value) {
        warning.classList.remove("hide");
    } else {
        resultMode.innerText = `Mode is: ${modeCalculate(
            ...numbers
        )}`;
        btnCopyMode.addEventListener("click", () => {
            if (btnCopyMode.innerText === "Copy Result") {
                btnCopyMode.innerText = "Copied!";
                window.navigator.clipboard.writeText(
                    modeCalculate(...numbers)
                );
            } else {
                btnCopyMode.innerText = "Copy Result";
            }
        });
    }
});

inputMode.addEventListener("keydown", (ev) => {
    ev.preventDefault();

    if (allowedKeys.includes(ev.key)) {
        inputMode.value += ev.key;
    }
    if (ev.key === "Backspace") {
        inputMode.value = inputMode.value.slice(0, -1);
    }
    if (ev.key === "Enter") {
        let numbers = inputMode.value
            .split(",")
            .map((number) => {
                return parseInt(number);
            });
        if (!inputMode.value) {
            warning.classList.remove("hide");
        } else {
            resultMode.innerText = `Mode is: ${modeCalculate(
                ...numbers
            )}`;
            btnCopyMode.addEventListener("click", () => {
                if (
                    btnCopyMode.innerText === "Copy Result"
                ) {
                    btnCopyMode.innerText = "Copied!";
                    window.navigator.clipboard.writeText(
                        modeCalculate(...numbers)
                    );
                } else {
                    btnCopyMode.innerText = "Copy Result";
                }
            });
        }
    }
});

btnClearMode.addEventListener("click", () => {
    inputMode.value = "";
    resultMode.innerText = "Result:";

    btnCopyMode.addEventListener("click", () => {
        btnCopyMode.innerText = "Copy Result";
        window.navigator.clipboard.writeText(
            modeCalculate("")
        );
    });

    btnCopyMode.innerText = "Copy Result";
});

//Setting Weighted Calculate
btnCalculateWeighted.addEventListener("click", () => {
    let allNumbers =
        document.querySelectorAll(".input-number");

    let numbersArray = [];
    allNumbers.forEach((number) => {
        numbersArray.push(parseFloat(number.value || 0));
    });

    console.log(numbersArray);

    let allWeights =
        document.querySelectorAll(".input-weight");

    let weightsArray = [];
    allWeights.forEach((weight) => {
        weightsArray.push(parseFloat(weight.value || 0));
    });

    console.log(weightsArray);
    let entries = [];

    for (let i = 0; i < numbersArray.length; i++) {
        const newObj = {};
        newObj.number = numbersArray[i];
        newObj.weight = weightsArray[i];
        entries.push(newObj);
    }

    console.log(entries);

    let inputNumber1 =
        document.getElementById("input-number1");

    if (!inputNumber1.value) {
        warning.classList.remove("hide");
        let allNumbers =
            document.querySelectorAll(".input-number");

        allNumbers.forEach((number) => {
            number.value = "";
        });

        let allWeights =
            document.querySelectorAll(".input-weight");

        allWeights.forEach((weight) => {
            weight.value = "";
        });
    } else {
        resultWeighted.innerText = `Weighted Average is: ${weightedCalculate(
            ...entries
        )}`;

        btnCopyWeighted.addEventListener("click", () => {
            if (
                btnCopyWeighted.innerText === "Copy Result"
            ) {
                btnCopyWeighted.innerText = "Copied!";
                window.navigator.clipboard.writeText(
                    arithmeticCalculate(...entries)
                );
            } else {
                btnCopyWeighted.innerText = "Copy Result";
            }
        });
    }
});

btnClearWeighted.addEventListener("click", () => {
    let allNumbers =
        document.querySelectorAll(".input-number");

    allNumbers.forEach((number) => {
        number.value = "";
    });

    let allWeights =
        document.querySelectorAll(".input-weight");

    allWeights.forEach((weight) => {
        weight.value = "";
    });

    resultWeighted.innerText = "Result:";

    btnCopyWeighted.removeEventListener("click", () => {
        btnCopyWeighted.innerText = "Copied!";
        window.navigator.clipboard.writeText(
            weightedCalculate(...entries)
        );
    });

    btnCopyWeighted.addEventListener("click", () => {
        btnCopyWeighted.innerText = "Copy Result";
        window.navigator.clipboard.writeText("");
    });
});

inputWeighted.addEventListener("keypress", (ev) => {
    if (ev.key === "Enter") {
        let allNumbers =
            document.querySelectorAll(".input-number");

        let numbersArray = [];
        allNumbers.forEach((number) => {
            numbersArray.push(
                parseFloat(number.value || 0)
            );
        });

        let allWeights =
            document.querySelectorAll(".input-weight");

        let weightsArray = [];
        allWeights.forEach((weight) => {
            weightsArray.push(
                parseFloat(weight.value || 0)
            );
        });

        let entries = [];

        for (let i = 0; i < numbersArray.length; i++) {
            const newObj = {};
            newObj.number = numbersArray[i];
            newObj.weight = weightsArray[i];
            entries.push(newObj);
        }

        let inputNumber1 =
            document.getElementById("input-number1");
        if (!inputNumber1.value) {
            warning.classList.remove("hide");
            let allNumbers =
                document.querySelectorAll(".input-number");

            allNumbers.forEach((number) => {
                number.value = "";
            });

            let allWeights =
                document.querySelectorAll(".input-weight");

            allWeights.forEach((weight) => {
                weight.value = "";
            });
        } else {
            resultWeighted.innerText = `Weighted Average is: ${weightedCalculate(
                ...entries
            )}`;

            btnCopyWeighted.addEventListener(
                "click",
                () => {
                    if (
                        btnCopyWeighted.innerText ===
                        "Copy Result"
                    ) {
                        btnCopyWeighted.innerText =
                            "Copied!";
                        window.navigator.clipboard.writeText(
                            arithmeticCalculate(...entries)
                        );
                    } else {
                        btnCopyWeighted.innerText =
                            "Copy Result";
                    }
                }
            );
        }
    } else {
        return;
    }
});
