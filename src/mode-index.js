const labelMode = document.getElementById("label-mode");
const inputMode = document.getElementById("input-mode");
const btnCalculateMode = document.getElementById(
    "btn-calculate-mode"
);
const btnClearMode = document.getElementById(
    "btn-clear-mode"
);
const btnHideMode =
    document.getElementById("btn-hide-mode");
const resultMode = document.getElementById("result-mode");
const btnCopyMode =
    document.getElementById("btn-copy-mode");
const btnStartMode = document.getElementById(
    "btn-start-mode"
);

const hideMode = () => {
    [
        labelMode,
        inputMode,
        btnCalculateMode,
        btnClearMode,
        btnHideMode,
        resultMode,
        btnCopyMode,
    ].forEach((element) => element.classList.add("hide"));
    btnStartMode.classList.remove("hide");
};

const showMode = () => {
    [
        labelMode,
        inputMode,
        btnCalculateMode,
        btnClearMode,
        btnHideMode,
        resultMode,
        btnCopyMode,
    ].forEach((element) =>
        element.classList.remove("hide")
    );
    btnStartMode.classList.add("hide");
};

export {
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
};
