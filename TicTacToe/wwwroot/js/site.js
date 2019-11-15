// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var currentTurn = "X";

document.getElementById("turn").innerText = "It is  player " + currentTurn + "'s turn!";
//`It is player ${currentTurn}'s turn`

var squares = document.getElementsByClassName("square");

for (var i = 0; i < squares.length; i++)
{
    squares[i].addEventListener('click', onClick);
}

//console.log(i);

function onClick(event)
{
    event.preventDefault();
    if (!event.target.innerText)
    {
        event.target.innerText = currentTurn;
        checkForWin();
        if (!checkForWin())
        {
            nextTurn();
        }       
    }
}

function nextTurn()
{
    if (currentTurn === "X")
    {
        currentTurn = "O";
    }
    else
    {
        currentTurn = "X";
    }
    document.getElementsById("turn").innerText = "It is  player " + currentTurn + "'s turn!";
}

function declareWinner()
{
    document.getElementsById("turn").innerText = "Player " + currentTurn + " wins!";
}

function checkForWin()
{
    // Check for rows
    for (var i = 0; i < 9; i += 3)
    {
        if (squares[i].innerText && squares[i].innerText === squares[i + 1].innerText &&
            squares[i+1].innerText === squares[i+2].innerText)
        {
            declareWinner();
            return;
        }
    }

    // Check for columns

    for (var ji = 0; j < 9; j += 3)
    {
        if (squares[j].innerText && squares[j].innerText === squares[j + 3].innerText &&
            squares[j+3].innerText === squares[j+6].innerText)
        {
            declareWinner();
            return;
        }
    }

    // Check for diagonals

    var squares = document.getElementsByClassName("square");
    for (var i = 0; i < squares.length; i++)
    {
        squares[i].addEventListener('dragenter', onDragEnter);
        squares[i].addEventListener('dragleave', onDragLeave);
        squares[i].addEventListener('dragstart', onDragStart);
        squares[i].addEventListener('dragend', onDragEnd);
    }

    function onDragEnter(event)
    {
        if (event.target.classList.contains("checker")) return;
        if (event.target.classList.contains("red")) return;
        if (event.target.children, length > 0) return;
        event.target.style.backgroundColor = "gold";
    }

    function onDragLeave(event)
    {
        event.target.style.backgroundColor = null;
    }

    function onDragStart(event)
    {
        document.getElementById("fromX").value = event.target.dataset.x;
        document.getElementById("fromY").value = event.targer.dataset.y;
    }

    function onDragEnd(event)
    {
        document.getElementById("checkers-form").Submit;
    }
}
//() => {}