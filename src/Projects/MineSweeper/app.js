document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    let width = 10
    let squares = []
    let bombAmount = 20
    let isGameOver = false
    let flags = 0

    // Create Board

    function createBoard() {

        // get shuffled game array with random squares

        const bombsArray = Array(bombAmount).fill("bomb")
        const emptyArray = Array(width * width - bombAmount).fill("valid")
        const gameArray = emptyArray.concat(bombsArray)
        const shuffledArray = gameArray.sort(() => Math.random() - 0.5)

        for (let i = 0; i < 100; i++) {
            const square = document.createElement("div")
            square.setAttribute("id", i)
            square.classList.add(shuffledArray[i])
            grid.appendChild(square)
            squares.push(square)

            //normal click
            square.addEventListener("click", function (e) {
                click(square)
            })

            // cntrl and left click
            square.oncontextmenu = function (e) {
                e.preventDefault()
                addFLag(square)
            }
        }

        // add numbers

        for (let i = 0; i < squares.length; i++) {
            let total = 0
            const isLeftEdge = (i % width === 0)
            const isRightEdge = (i % width === width - 1)

            if (squares[i].classList.contains("valid")) {
                if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb")) total++
                if (i > 9 && !isRightEdge && squares[i + 1 - width].classList.contains("bomb")) total++
                if (i > 10 && squares[i - width].classList.contains("bomb")) total++
                if (i > 11 && !isLeftEdge && squares[i - 1 - width].classList.contains("bomb")) total++
                if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("bomb")) total++
                if (i < 90 && !isLeftEdge && squares[i - 1 + width].classList.contains("bomb")) total++
                if (i < 88 && !isRightEdge && squares[i + 1 + width].classList.contains("bomb")) total++
                if (i < 89 && squares[i + width].classList.contains("bomb")) total++
                squares[i].setAttribute("data", total)
            }
        }
    }
    createBoard()

    // add flag with right click

    function addFLag(square) {
        if (isGameOver) return
        if (!square.classList.contains("checked") && (flags < bombAmount)) {
            if (!square.classList.contains("flag")) {
                square.classList.add("flag")
                square.innerHTML = "🚩"
                flags++
                checkForWin()
            } else {
                square.classList.remove("flag")
                square.innerHTML = " "
                flags--
            }
        }
    }

    // click on square actions

    function click(square) {
        let currentID = square.id
        if (isGameOver) return
        if (square.classList.contains("checked") || square.classList.contains("flag")) return
        if (square.classList.contains("bomb")) {
            gameOver(square)
        } else {
            let total = square.getAttribute("data")
            if (total != 0) {
                square.classList.add("checked")
                square.innerHTML = total
                return
            }
            checkSquare(square, currentID)
        }
        square.classList.add("checked")
    }

    //check neighbouring squares

    function checkSquare(squares, currentID) {
        const isLeftEdge = (currentID % width === 0)
        const isRightEdge = (currentID % width === width - 1)

        setTimeout(() => {
            if (currentID > 0 && !isLeftEdge) {
                const newId = squares[parseInt(currentID) - 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID > 9 && !isRightEdge) {
                const newId = squares[parseInt(currentID) + 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID > 10) {
                const newId = squares[parseInt(currentID - width)].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID > 11 && !isLeftEdge) {
                const newId = squares[parseInt(currentID) - 1 - width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID < 98 && !isRightEdge) {
                const newId = squares[parseInt(currentID) + 1].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID < 90 && !isLeftEdge) {
                const newId = squares[parseInt(currentID) - 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID < 88 && !isRightEdge) {
                const newId = squares[parseInt(currentID) + 1 + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
            if (currentID < 89) {
                const newId = squares[parseInt(currentID) + width].id
                const newSquare = document.getElementById(newId)
                click(newSquare)
            }
        }, 10)
    }

    // game over

    function gameOver(square) {
        var over = document.createElement("div");
        over.className = "gameover"
        over.textContent = "BOOM! Game Over!";

        var playAgain = document.createElement('button');
        playAgain.innerHTML = 'Play Again';
        playAgain.className = "playagain"
        playAgain.onclick = () => {
            window.location.reload();
        };

        document.body.appendChild(over);
        document.body.appendChild(playAgain);
        isGameOver = true

        // show all the bombs
        squares.forEach(square => {
            if (square.classList.contains("bomb")) {
                square.innerHTML = "💣"
                square.style.backgroundColor = '#F27F1B'
            }
        })
    }

    // check for win

    function checkForWin() {
        let matches = 0
        for (let i = 0; i < squares.length; i++) {
            if (squares[i].classList.contains("flag") && squares[i].classList.contains("bomb")) {
                matches++
            }
            if (matches === bombAmount) {
                var over = document.createElement("div");
                over.className = "gameover"
                over.textContent = "YOU WIN!";

                var playAgain = document.createElement('button');
                playAgain.innerHTML = 'Play Again';
                playAgain.className = "playagain"
                playAgain.onclick = () => {
                    window.location.reload();
                };
                isGameOver = true
            }
        }
    }

})