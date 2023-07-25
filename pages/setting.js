
const item = document.getElementById("switch");
const resets = document.getElementById("resets");
let stat;

chrome.storage.local.get(["stat"], async function (result) {
    if(result.stat) enable();
    else disable();
});

function switing() {
    if(stat) {
        disable();
    } else {
        enable();
    }
    chrome.storage.local.set({ stat : stat });
}

function enable() {
    item.innerHTML = "<p>켜짐</p>";
    item.classList.remove("disable");
    item.classList.add("enable");
    stat = true;
}

function disable() {
    item.innerHTML = "<p>꺼짐</p>";
    item.classList.remove("enable");
    item.classList.add("disable");
    stat = false;
}

function reset() {
    disable();
    chrome.storage.local.set({ stat : stat });
}

item.addEventListener("click", switing);
resets.addEventListener("click", reset);