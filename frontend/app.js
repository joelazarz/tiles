document.addEventListener('DOMContentLoaded', function() {
    
    // init boards class - fetch
    const boards = new Boards
    boards.getBoards()

    
    // event listener for BOARD form - initially, this is just for seeding some data
    const boardForm = document.querySelector('.add-board-form')
    boardForm.addEventListener('submit', function(e){
        e.preventDefault()
        createBoard(e.target)
    })

    // create board POST fetch - for seeding
    function createBoard(form){
        const boardNameInput = document.querySelector('.board-name')
        const boardDescriptionInput = document.querySelector('.board-description')
        fetch("http://localhost:3000/api/boards",{
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({name: boardNameInput.value, description: boardDescriptionInput.value})
        })
        .then(response => response.json())
        form.reset()
}

//////////////////////////////////////////////////////////////////////////////////////

    // event listener for BLOCK form - initially, this is just for seeding some data
    const blockForm = document.querySelector('.add-block-form')
    blockForm.addEventListener('submit', function(e){
        e.preventDefault()
        createBlock(e.target)
    })

    // create block POST fetch - for seeding
    function createBlock(form){
        const blockDescriptionInput = document.querySelector('.block-description')
        const blockPhotoInput = document.querySelector('.block-photo')
        const blockBoardIdInput = document.querySelector('.board-id-description')
        fetch("http://localhost:3000/api/blocks",{
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({description: blockDescriptionInput.value,photo: blockPhotoInput.value, board_id: blockBoardIdInput.value})
        })
        .then(response => response.json())
        form.reset()
}



}) 