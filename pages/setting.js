
const item = document.getElementById("switch");
let stat = true;

chrome.storage.local.get(["stat"], async function (result) {
    if(result.stat) {
        enable();
        stat = true;
    } else {
        disable();
        stat = false;
    }
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
    item.innerHTML = "<p>꺼짐</p>";
    item.classList.remove("enable");
    item.classList.add("disable");
    stat = true;
}

function disable() {
    item.innerHTML = "<p>켜짐</p>";
    item.classList.remove("disable");
    item.classList.add("enable");
    stat = false;
}

item.addEventListener("click", switing);