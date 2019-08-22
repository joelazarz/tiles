class Block{

    renderBlocks(data){
        let grid = document.getElementById('grid-container')
        grid.innerHTML = '';
        data.blocks.forEach(block => {grid.insertAdjacentHTML("afterbegin",
        `
        <div class="block" data-id="${block.board_id}">
        <img src="${block.photo}" class="indiv-block" data-id="${block.id}">
        </div>
        `
        )})
    }

    renderNewBlock(newBlock){
        let grid = document.getElementById('grid-container')
        grid.insertAdjacentHTML("beforeend", 
        `
        <div class="block">
        <img src="${newBlock.photo}" data-id="${newBlock.board_id}">
        </div>
        `)
    }

    renderIndivBlockView(block){
        let grid = document.getElementById('grid-container')
        grid.innerHTML='';
        grid.insertAdjacentHTML("afterbegin",
        `
        <div class="indiv-block-view">
        <img src="${block.photo}" data-id="${block.board_id}">
        </div>
        <div id="comment-section">
        <form class="block-comment-form" data-id="${block.id}">
        <input type="text" class="comment-submit" wrap="hard" cols="20" name="comment" autofocus="autofocus" placeholder="leave comment..." id="block-comment">
        <input type="hidden" id="block-id" value="${block.id}">
        <input type="submit" value="Submit"></input>
        </form>
        <div id="all-block-comments">
        </div>
        </div>
        `)

        grid.addEventListener("submit", function(e){
            if(e.target.className == "block-comment-form"){
                e.preventDefault()
                let fetch = new Fetch
                fetch.createComment()
            }
        })
    }

    renderBlockComments(block){
        let blockComments = document.querySelector("#all-block-comments")
        block.comments.forEach(comment => {blockComments.insertAdjacentHTML("afterbegin",
        `
        <div class="block-comment">
        <li>${comment.comment}</li>
        </div>
        `)})
    }

    renderNewBlockPrep(data){
        let grid = document.getElementById('grid-container')
        grid.insertAdjacentHTML("afterbegin",
        `
        <div class="add-block-prep">
        <form id="adding-block">
        <input type="text" wrap="hard" cols="20" name="photo" autofocus="autofocus" placeholder="paste image url..." id="block-photo">
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