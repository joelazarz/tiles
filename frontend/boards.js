class Boards{

    getBoards() {
        return fetch('http://localhost:3000/api/boards')
        .then(resp => resp.json())
        .then(json => console.log(json));
    }

}
