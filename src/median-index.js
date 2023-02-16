const labelMedian = document.getElementById("label-median");
const inputMedian = document.getElementById("input-median");
const btnCalculateMedian = document.getElementById(
    "btn-calculate-median"
);
const btnClearMedian = document.getElementById(
    "btn-clear-median"
);
const btnHideMedian = document.getElementById(
    "btn-hide-median"
);
const resultMedian =
    document.getElementById("result-median");
const btnCopyMedian = document.getElementById(
    "btn-copy-median"
);
const btnStartMedian = document.getElementById(
    "btn-start-median"
);

const hideMedian = () => {
    [
        labelMedian,
        inputMedian,
        btnCalculateMedian,
        btnClearMedian,
        btnHideMedian,
        resultMedian,
        btnCopyMedian,
    ].forEach((element) => element.classList.add("hide"));
    btnStartMedian.classList.remove("hide");
};

const showMedian = () => {
    [
        labelMedian,
        inputMedian,
        btnCalculateMedian,
        btnClearMedian,
        btnHideMedian,
        resultMedian,
        btnCopyMedian,
    ].forEach((element) =>
        element.classList.remove("hide")
    );
    btnStartMedian.classList.add("hide");
};

export {
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
};
