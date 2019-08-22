class Board{
    static all = []

    constructor(name,description){
        this.name = name
        this.description = description 
        
        Board.all.push(this)
    }

    renderBoards(data){
        let grid = document.getElementById('grid-container')
        data.forEach(board => {grid.insertAdjacentHTML("beforeend",
        `
        <div class="board" data-id="${board.id}"><span data-id="${board.id}">${board.name}</span></div>
        `
        )})
    }

    renderNewBoardForm(){

        let newBoardForm = document.getElementById('new-board-form')
        let grid = document.getElementById('grid-container')
        grid.innerHTML = '';

        
        newBoardForm.innerHTML = 
        `
        <form id="new-board">
        <input type="text" name="name" placeholder="Board Name" id="board-name">
        <br/>
        <input type="text" name="description" placeholder="Board Description" id="board-description">
        <br/>
        <br/>
        <input type="submit" value="Create Board"></input>
        </form>
        `;
    }



}