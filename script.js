const backpack = document.querySelector(".backpack");
const bpSwitch = document.querySelector(".bp-switch");

function openBackpack() {
    backpack.classList.toggle("backpack-open");
}

bpSwitch.addEventListener("click", openBackpack);

