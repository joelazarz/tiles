class Fetch{

    getBoards(){
        return fetch('http://localhost:3000/api/boards')
        .then(resp => resp.json())
        .then(function(data){
            let boards = new Board
            boards.renderBoards(data)
        })
    }

    getBlocks(boardId){
        return fetch(`http://localhost:3000/api/boards/${boardId}`)
        .then(resp => resp.json())
        .then(function(data){
            let blocks = new Block
            blocks.renderBlocks(data)
            blocks.renderNewBlockPrep()
        })
    }

    // create board POST fetch
    createBoard(){
        const boardNameInput = document.getElementById('board-name')
        const boardDescriptionInput = document.getElementById('board-description')
        fetch("http://localhost:3000/api/boards",{
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: boardNameInput.value, 
                description: boardDescriptionInput.value})
        })
        .then(response => response.json())
    }

    // create block POST fetch
    createBlock(){
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
            body: JSON.stringify({
                description: blockDescriptionInput.value,
                photo: blockPhotoInput.value, 
                board_id: blockBoardIdInput.value})
        })
        .then(response => response.json())
    }

}
