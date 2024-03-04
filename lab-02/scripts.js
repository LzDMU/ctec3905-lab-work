function tellLzHello() {
    console.log("Hello Lovet, even though you're called Lz!")
}

myTrigger.addEventListener('click', tellLzHello)

function anotherClick() {
    alert("Did you click this Lz?")
}

badButton.addEventListener('click', anotherClick)