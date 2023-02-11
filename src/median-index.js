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
    labelMedian.classList.add("hide");
    inputMedian.classList.add("hide");
    btnCalculateMedian.classList.add("hide");
    btnClearMedian.classList.add("hide");
    btnHideMedian.classList.add("hide");
    resultMedian.classList.add("hide");
    btnCopyMedian.classList.add("hide");
    btnStartMedian.classList.remove("hide");
};

const showMedian = () => {
    labelMedian.classList.remove("hide");
    inputMedian.classList.remove("hide");
    btnCalculateMedian.classList.remove("hide");
    btnClearMedian.classList.remove("hide");
    btnHideMedian.classList.remove("hide");
    resultMedian.classList.remove("hide");
    btnCopyMedian.classList.remove("hide");
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
