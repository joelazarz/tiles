class Board{
    static all = []

    constructor(name,description){
        this.name = name
        this.description = description 
        
        Board.all.push(this)
    }

    renderBoards(data){
        let grid = document.getElementById('grid-container')
        let allBoards = []
        data.forEach(i => {allBoards.push(i.blocks[0])})
        allBoards.forEach(x => {grid.insertAdjacentHTML("beforeend",
        `
        <div class="board"><img src="${x.photo}" data-id="${x.board_id}"></div>
        `
        )})
    }

}