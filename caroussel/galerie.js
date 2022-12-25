let images = [
    "../../img/pokemons/ectoplasma.png",
    "../../img/pokemons/dracolosse.png",
    "../../img/pokemons/gardevoir.png",
    "../../img/pokemons/cizayox.png",
    "../../img/pokemons/archeduc.png",
]
let i = 1

const galerie = document.getElementById("galerie")
galerie.setAttribute("src", images[i])

const input = document.getElementById("addImgInput")
input.value = ""

const btnInput = document.getElementById("btnInput")
const btnLast = document.getElementById("btnLast")
const btnNext = document.getElementById("btnNext")
const imgString = document.getElementById("imgString")

const leftImage = document.getElementById("leftImage")
const rightImage = document.getElementById("rightImage")

leftImage.setAttribute("src", images[getLastImageIndex()])
rightImage.setAttribute("src", images[getNextImageIndex()])

imgString.innerHTML = `Image ${i + 1} sur ${images.length}`

btnLast.addEventListener("click", lastImage)
btnNext.addEventListener("click", nextImage)
btnInput.addEventListener("click", (e) => {
    addImage(input.value)
    input.value = ""
})

function nextImage() {
    if (i >= images.length - 1) {
        i = -1 // car on l'incrémente après
    }
    i++
    galerie.setAttribute("src", images[i])
    leftImage.setAttribute("src", images[getLastImageIndex()])
    rightImage.setAttribute("src", images[getNextImageIndex()])

    imgString.innerHTML = `Image ${i + 1} sur ${images.length}`
}

function getNextImageIndex() {  
    let index = i
    if (index >= images.length - 1) {
        index = -1 //
    }
    index++
    return index
}

function lastImage() {
    if (i === 0) {
        i = images.length // car on le décrémente après
    }
    i--
    galerie.setAttribute("src", images[i])
    leftImage.setAttribute("src", images[getLastImageIndex()])
    rightImage.setAttribute("src", images[getNextImageIndex()])

    imgString.innerHTML = `Image ${i + 1} sur ${images.length}`
}

function getLastImageIndex() {
    let index = i
    if (index === 0) {
        index = images.length // car on le décrémente après
    }
    index--
    return index
}

function addImage(url) {
    images.push(url)
    imgString.innerHTML = `Image ${i + 1} sur ${images.length}`
}

setInterval(nextImage, 3000)


