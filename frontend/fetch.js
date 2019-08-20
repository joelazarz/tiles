class Fetch{

    getBoards(){
        return fetch('http://localhost:3000/api/boards')
        .then(resp => resp.json())
        .then(json => console.log(json));
    }

    // create board POST fetch
    createBoard(form){
        const boardNameInput = document.querySelector('.board-name')
        const boardDescriptionInput = document.querySelector('.board-description')
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
        form.reset()
    }

    // create block POST fetch
    createBlock(form){
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
        form.reset()
    }

}
