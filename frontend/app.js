document.addEventListener('DOMContentLoaded', function() {
    
    const fetch = new Fetch
    // init boards class - fetch
    
    fetch.getBoards()

    
    
    
    
    // event listener for board tiles
    const clickBoard = document.querySelector("#grid-container")
    clickBoard.addEventListener('click', function(e){
        if(e.target.className = 'test'){
            let boardId = e.target.dataset.id;
            fetch.getBlocks(boardId)
        }
    })
    
    
    
    // event listener for new BOARD form
    const addBoard = document.querySelector(".add-board")
    addBoard.addEventListener('click', function(e){
        e.preventDefault()
        console.log("clicked")
    })

    // event listener for BLOCK form - initially, this is just for seeding some data
    // const blockForm = document.querySelector('.add-block-form')
    // blockForm.addEventListener('submit', function(e){
    //     e.preventDefault()
    //     fetch.createBlock(e.target)
    // })


}) 