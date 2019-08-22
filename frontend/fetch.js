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
            blocks.renderNewBlockPrep(data)
        })
    }

    renderIndivBlock(blockId){
        return fetch(`http://localhost:3000/api/blocks/${blockId}`)
        .then(resp => resp.json())
        .then(function(block){
            let blocks = new Block
            blocks.renderIndivBlockView(block)
            blocks.renderBlockComments(block)
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
        const blockPhotoInput = document.querySelector("#block-photo")
        const blockBoardIdInput = document.querySelector("#block-id")
        fetch("http://localhost:3000/api/blocks",{
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                photo: blockPhotoInput.value, 
                board_id: blockBoardIdInput.value})
        })
        .then(response => response.json())
        .then(function(newBlock){
            let blocks = new Block
            blocks.renderNewBlock(newBlock)
        })
    }

    // create comment POST fetch
    createComment(){
        let blockComments = document.querySelector("#all-block-comments")
        let blockIdInput = document.querySelector("#block-id")
        let blockCommentInput = document.querySelector("#block-comment")
        
        blockComments.insertAdjacentHTML("beforeend",
        `
        <div class="block-comment">
        <li>${blockCommentInput.value}</li>
        </div>
        `)

        fetch("http://localhost:3000/api/comments",{
            method: "POST",
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                comment: blockCommentInput.value, 
                block_id: blockIdInput.value})
        })
        .then(response => response.json())
    }


}
