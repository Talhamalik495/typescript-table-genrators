var form = document.querySelector("#my-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var target = event.target;
    console.log(target);
    var firstChild = target === null || target === void 0 ? void 0 : target.firstElementChild;
    var valt = Number(firstChild.value);
    var a = document.getElementById("innerHtml");
    a.innerHTML = "";
    for (var i = 1; i <= 12; i++) {
        target.reset();
        var multipli = valt * i;
        console.log(multipli);
        a.innerHTML += "<br>".concat(valt, "  X  ").concat(i, "  =  ").concat(multipli);
    }
});
