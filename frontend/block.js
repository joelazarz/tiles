class Block{
    static all = []

    constructor(description,photo,board_id){
        this.description = description
        this.photo = photo
        this.board_id = board_id
        
        Block.all.push(this)
    }

    renderBlocks(data){
        let grid = document.getElementById('grid-container')
        grid.innerHTML = '';
        data.blocks.forEach(block => {grid.insertAdjacentHTML("beforeend",
        `
        <div class="board"><img src="${block.photo}" data-id="${block.board_id}"></div>
        `
        )})
    }
    
}