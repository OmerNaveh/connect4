class view{
    constructor(){
        this.playEvent = new Event(); //when a move happens trigger this event
    }
    createBoard(){
        for (let i = 0 ; i<49 ; i++){
            const square = this.createElement('div', 'square');
            square.addEventListener('click', ()=>{this.playEvent.trigger(i)});  //on click it will give the i to move
            const parenDiv = this.getElement('#root');
            parenDiv.append(square);
        }
    }

    render(){
        this.createBoard();
        //final message and error handler
        this.message = this.createElement('div', 'message');
        this.body = this.getElement('body');
        this.body.append(this.message);
    }
    updateCell(data){ //you recieve data from model - data.move - row , data.player- color
        const allSquares = document.getElementsByClassName('square');
        if(!allSquares[data.move].textContent){
            allSquares[data.move].textContent = data.player
        }
        else{
            data.move += 7; //search next in row
            this.updateCell(data); //recursion untill you find correct cell to update
        }
    }

    
    victory(winner) {
        this.message.textContent = `${winner} wins!`;
      }
    
      draw() {
        this.message.textContent = "It's a draw!";
      }
    //helpers
    createElement(tag, className) {
        const element = document.createElement(tag);
    
        if (className) element.classList.add(className);
    
        return element;
      }
    
      getElement(selector) {
        const element = document.querySelector(selector);
    
        return element;
      }
    
}

