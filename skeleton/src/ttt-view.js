class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    // Create unordered list
    // debugger;
    let unorderedList = document.createElement("ul");

    // Create 9 li elements (store position as data-pos)
    // Set border on li elements
    for(let x = 0; x < 3; x++){
      for(let y = 0; y < 3; y++){
        // debugger;
        let listElement = document.createElement("li");
        listElement.setAttribute("data-pos", `[${x}, ${y}]`);

        // listElement.addEventListener('click', this.handleClick);

        unorderedList.append(listElement);
      }
    }

    this.el.append(unorderedList);
  }
  
  bindEvents() {
    document.querySelector(".ttt").addEventListener("click", e => this.handleClick(e))
  }

  handleClick(e) {
    const item = e.target;
    item.classList.toggle("clicked");
  }

  makeMove(square) {}

}

module.exports = View;
