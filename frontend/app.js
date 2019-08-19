document.addEventListener('DOMContentLoaded', function() {
    
    // init boards class - fetch
    const boards = new Boards
    boards.getBoards()

    
    // event listener for BOARD form - initially, this is just for seeding some data
    const boardForm = document.querySelector('.add-board-form')
    boardForm.addEventListener('submit', function(e){
        e.preventDefault()
        boards.createBoard(e.target)
    })

    // event listener for BLOCK form - initially, this is just for seeding some data
    const blockForm = document.querySelector('.add-block-form')
    blockForm.addEventListener('submit', function(e){
        e.preventDefault()
        boards.createBlock(e.target)
    })


}) 