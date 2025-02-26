// Variables to track score
let totalRuns = 0;
let totalWickets = 0;
let totalOvers = 0;
let ballCount = 0;

// Elements
const totalRunsElement = document.getElementById("totalRuns");
const totalWicketsElement = document.getElementById("totalWickets");
const totalOversElement = document.getElementById("totalOvers");

// Buttons
const addRunButton = document.getElementById("addRun");
const addWicketButton = document.getElementById("addWicket");
const addOverButton = document.getElementById("addOver");
const saveMatchButton = document.getElementById("saveMatch");

// Event Listeners for Buttons
addRunButton.addEventListener("click", () => {
    totalRuns += 1;
    totalRunsElement.textContent = totalRuns;
});

addWicketButton.addEventListener("click", () => {
    totalWickets += 1;
    totalWicketsElement.textContent = totalWickets;
});

addOverButton.addEventListener("click", () => {
    if (ballCount === 6) {
        totalOvers += 1;
        totalOversElement.textContent = totalOvers;
        ballCount = 0;
    } else {
        ballCount += 1;
    }
});

saveMatchButton.addEventListener("click", () => {
    alert("Match Saved!\n" +
        "Total Runs: " + totalRuns + "\n" +
        "Total Wickets: " + totalWickets + "\n" +
        "Total Overs: " + totalOvers);
});
