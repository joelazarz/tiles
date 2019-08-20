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
        data.blocks.forEach(block => {grid.insertAdjacentHTML("afterbegin",
        `
        <div class="block"><img src="${block.photo}" data-id="${block.board_id}"></div>
        `
        )})
    }

    renderNewBlockPrep(){
        let grid = document.getElementById('grid-container')
        grid.insertAdjacentHTML("afterbegin",
        `
        <div class="block">CLICK TO PASTE LINK</div>
        `)
    }
    
}