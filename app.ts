const form = document.querySelector("#my-form")!
form.addEventListener("submit", (event) => {
    event.preventDefault()
    const target = event.target as HTMLFormElement;
    console.log(target);
    const firstChild = target?.firstElementChild as HTMLInputElement;
    const valt = Number(firstChild.value);

    const a = document.getElementById("innerHtml")
    a!.innerHTML = ""
    for (let i = 1; i <= 12; i++) {
        target.reset()
        const multipli = valt * i
        console.log(multipli);
        a!.innerHTML += `<br>${valt}  X  ${i}  =  ${multipli}`

    }


})


