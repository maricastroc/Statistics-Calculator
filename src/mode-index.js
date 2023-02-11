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
    labelMode.classList.add("hide");
    inputMode.classList.add("hide");
    btnCalculateMode.classList.add("hide");
    btnClearMode.classList.add("hide");
    btnHideMode.classList.add("hide");
    resultMode.classList.add("hide");
    btnCopyMode.classList.add("hide");
    btnStartMode.classList.remove("hide");
};

const showMode = () => {
    labelMode.classList.remove("hide");
    inputMode.classList.remove("hide");
    btnCalculateMode.classList.remove("hide");
    btnClearMode.classList.remove("hide");
    btnHideMode.classList.remove("hide");
    resultMode.classList.remove("hide");
    btnCopyMode.classList.remove("hide");
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
