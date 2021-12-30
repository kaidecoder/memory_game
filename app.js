

document.addEventListener('DOMContentLoaded', () => {
    //card options.  Two copies of each image
    const sneakerArray = [
        {
            name: "black-sneaker",
            img: "images/black-sneaker.png"
        },
        {
            name: "cartoon-sneaker",
            img: "images/cartoon-sneaker.png"
        },
        {
            name: "hightop-sneaker",
            img: "images/hightop-sneaker.png"
        },
        {
            name: "jamaican-sneaker",
            img: "images/jamaican-sneaker.png"
        },
        {
            name: "orange-sneaker",
            img: "images/orange-sneakers.png"
        },
        {
            name: "red-white-sneaker",
            img: "images/red-white-sneakers.png"
        },
        {
            name: "tie-dye-sneaker",
            img: "images/tie-dye-sneakers.png"
        },
        {
            name: "bright-yellow-sneaker",
            img: "images/yellow-sneaker.png"
        },
        {
            name: "black-sneaker",
            img: "images/black-sneaker.png"
        },
        {
            name: "cartoon-sneaker",
            img: "images/cartoon-sneaker.png"
        },
        {
            name: "hightop-sneaker",
            img: "images/hightop-sneaker.png"
        },
        {
            name: "jamaican-sneaker",
            img: "images/jamaican-sneaker.png"
        },
        {
            name: "orange-sneaker",
            img: "images/orange-sneakers.png"
        },
        {
            name: "red-white-sneaker",
            img: "images/red-white-sneakers.png"
        },
        {
            name: "tie-dye-sneaker",
            img: "images/tie-dye-sneakers.png"
        },
        {
            name: "bright-yellow-sneaker",
            img: "images/yellow-sneaker.png"
        }
    ]





/* Select the html grid and the result boxes.  Initialize the arrays for the two chosen cards, the ID for the two chosen cards, and the two winning cards.*/
const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#result")

/* This box will hold the 2 cards I clicked on */
let sneakerCardChosenArray = []

/* This box will hold the data-id of the 2 cards I clicked on */
let sneakerCardChosenId = []

/* This box will hold the winning pairs of cards I click on */
let winningCardsArray = []

/* Create the game board.  Use a for loop to loop through all of the sneaker images. Create an anonymous image element.  Set an attribute on it of a cat so all the cards have the same back image to show that they are facedown.  Set a data attribute on it so that you can number each of the cards in the grid, based on the length of the image array.  Add an event listener to each card so that you can click on a card to simulate flipping it over, but in fact you will just change the image.  Append the back image to the grid.*/
function memoryGameBoard() {
    for(let counter = 0; counter < sneakerArray.length; counter++) {
        /* Create a random image element*/
        let image = document.createElement('img')
        /* Set the back cover for each card*/
        image.setAttribute('src', 'images/corona-cat.png')
        /* Add a data id to each card on the grid*/
        image.setAttribute('data-id', counter)
        /* Add the ability to flip each card */
        image.addEventListener('click', flipSneakerCard)
        /* Connect the 16 cards to the grid */
        grid.appendChild(image)
    }
}

//check sneakers match
function checkSneakersMatch() {
    let images = document.querySelectorAll('img')
    let firstSneakerId = sneakerCardChosenId[0]
    let secondSneakerId = sneakerCardChosenId[1]
    if(firstSneakerId !== secondSneakerId && sneakerCardChosenArray[0]===sneakerCardChosenArray[1]) {
        alert("Match")
        winningCardsArray.push(sneakerCardChosenArray)
        console.log(winningCardsArray)
        images[firstSneakerId].setAttribute('src', './images/X-image.png')
        images[secondSneakerId].setAttribute('src', './images/X-image.png')
        
    }else if(firstSneakerId !== secondSneakerId && sneakerCardChosenArray[0] !== sneakerCardChosenArray[1]){
        alert("Not a match")
        images[firstSneakerId].setAttribute('src', './images/corona-cat.png')
        images[secondSneakerId].setAttribute('src', './images/corona-cat.png')

    }
    /* This box will hold the 2 cards I click on */
    sneakerCardChosenArray = []

    /* This box will hold the data-id for each clicked card*/
    sneakerCardChosenId = []

    resultDisplay.textContent = winningCardsArray.length
    if(winningCardsArray.length === sneakerArray.length/2){
        resultDisplay.textContent = "Congratulations! You won."
    }
}



//flip the sneakers.  Click on any cat to add the image associated with the data-ID for that cat.
function flipSneakerCard(){
    /* Access the data id for each card*/
    sneakerCardId = this.getAttribute('data-id') 
    console.log(sneakerCardId)

    /* Store the cards I click on in a box by their names. */
    sneakerCardChosenArray.push(sneakerArray[sneakerCardId].name)

    console.log(sneakerCardChosenArray)

    /* Store the data id of each card in a box*/
    sneakerCardChosenId.push(sneakerCardId)

    /* When I click a card, it shows the sneaker image associated with the data id*/
    this.setAttribute('src', sneakerArray[sneakerCardId].img)

    /* If the array has 2 cards, then check if the cards match.*/
    if(sneakerCardChosenArray.length === 2) {
        setTimeout(checkSneakersMatch, 500)
    }
}

memoryGameBoard()
})