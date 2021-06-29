var typed = new Typed (".tes", {
    strings: [
        "Developer",
        "Network Engineering"

    ],
    typespeed: 30,
    backspeed: 30,
    loop: true
});

const el = document.querySelector("#module");

    el.addEventListener("mousemove", (e) => {
    el.style.setProperty('--x', -e.offsetX + "px");
    el.style.setProperty('--y', -e.offsetY + "px");
});
