const labelWeighted = document.getElementById(
    "label-weighted"
);
const inputWeighted = document.querySelector(
    ".all-weighted-inputs"
);
const btnCalculateWeighted = document.getElementById(
    "btn-calculate-weighted"
);
const btnClearWeighted = document.getElementById(
    "btn-clear-weighted"
);
const btnHideWeighted = document.getElementById(
    "btn-hide-weighted"
);
const resultWeighted = document.getElementById(
    "result-weighted"
);
const btnCopyWeighted = document.getElementById(
    "btn-copy-weighted"
);
const btnStartWeighted = document.getElementById(
    "btn-start-weighted"
);
const btnAddRow = document.getElementById("btn-add-row");

const hideWeighted = () => {
    [
        labelWeighted,
        inputWeighted,
        btnCalculateWeighted,
        btnClearWeighted,
        btnHideWeighted,
        resultWeighted,
        btnCopyWeighted,
        btnAddRow,
    ].forEach((element) => element.classList.add("hide"));

    btnStartWeighted.classList.remove("hide");
};

const showWeighted = () => {
    [
        labelWeighted,
        inputWeighted,
        btnCalculateWeighted,
        btnClearWeighted,
        btnHideWeighted,
        resultWeighted,
        btnCopyWeighted,
        btnAddRow,
    ].forEach((element) =>
        element.classList.remove("hide")
    );
    btnStartWeighted.classList.add("hide");
};

let newRowNumber = 6;
const addRow = () => {
    {
        const newRowIndex = newRowNumber;
        const newWeightedDiv =
            document.createElement("div");
        newWeightedDiv.className = "inputs-container";

        const newNumberInput =
            document.createElement("input");
        newNumberInput.type = "number";
        newNumberInput.name = "input-weighted";
        newNumberInput.id = "input-number" + newRowIndex;
        newNumberInput.classList.add("input-number");
        newNumberInput.placeholder = "number";

        const newWeightInput =
            document.createElement("input");
        newWeightInput.type = "number";
        newWeightInput.name = "input-weighted";
        newWeightInput.id = "input-weight" + newRowIndex;
        newWeightInput.classList.add("input-weight");
        newWeightInput.placeholder = "weight";
        newWeightInput.style = "margin-left: 4px";
        newRowNumber++;

        inputWeighted.appendChild(newWeightedDiv);
        newWeightedDiv.append(
            newNumberInput,
            newWeightInput
        );

        btnClearWeighted.addEventListener("click", () => {
            [
                newWeightedDiv,
                newNumberInput,
                newWeightInput,
            ].forEach((element) => element.remove());
        });
    }
};

export {
    hideWeighted,
    showWeighted,
    addRow,
    newRowNumber,
    inputWeighted,
    labelWeighted,
    btnAddRow,
    btnCalculateWeighted,
    btnClearWeighted,
    btnCopyWeighted,
    btnHideWeighted,
    btnStartWeighted,
    resultWeighted,
};
