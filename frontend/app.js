document.addEventListener('DOMContentLoaded', function(){
    
    // init boards class - fetch
    const fetch = new Fetch
    const board = new Board
    
    fetch.getBoards()



    // event listener for board tiles
    const clickBoard = document.querySelector("#grid-container")
    clickBoard.addEventListener('click', function(e){
        if(e.target.className == "board"){
            let boardId = e.target.dataset.id;
            fetch.getBlocks(boardId)
        }
    })

    clickBoard.addEventListener('click', function(e){
        if(e.target.className == "indiv-block"){
            console.log(e.target.dataset.id)
            fetch.renderIndivBlock(e.target.dataset.id)
        }
    })
    
    // event listener for new BOARD button
    const addBoard = document.querySelector(".add-board")
    addBoard.addEventListener('click', function(e){
        console.log("clicked")
        board.renderNewBoardForm()
    })

    let newBoardForm = document.getElementById('new-board-form')
    newBoardForm.addEventListener("submit", function(e){
        fetch.createBoard()
        fetch.getBoards()
    })

    // event listener for board collection navigation button 
    const boardCollectionNav = document.querySelector(".board-collection-button")
    boardCollectionNav.addEventListener("click", function(){
        fetch.getBoards()
    })
    

    // event listener for add board button in footer
    addBoard.addEventListener("mouseover", function(){
        document.querySelector(".add-board-message").style.display = "inline";
    })
    addBoard.addEventListener("mouseleave", function(){
        document.querySelector(".add-board-message").style.display = "none";
    })

}) 