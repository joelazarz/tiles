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
        
        <div class="block">
        <div class="block-handle"><img src="https://img.icons8.com/nolan/64/000000/menu.png"></div>
        <img src="${block.photo}" data-id="${block.board_id}">
        </div>
        `
        )})
    }

    renderNewBlockPrep(data){
        let grid = document.getElementById('grid-container')
        grid.insertAdjacentHTML("afterbegin",
        `
        <div class="add-block-prep">
        <form id="adding-block">
        <input type="textarea" wrap="hard" cols="20" name="photo" autofocus="autofocus" placeholder="paste image url..." id="block-photo">
        <br/>
        <input type="hidden" id="block-id" value="${data.id}">
        <br/>
        <input type="submit" value="Create block"></input>
        </form>
        </div>
        `)

        let newBlockForm = document.getElementById('adding-block')
        newBlockForm.addEventListener("submit", function(e){
            e.preventDefault()
            let fetch = new Fetch
            fetch.createBlock()
        })
    }


}