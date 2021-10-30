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
        const originalData = data.move; //holds original data
        let num2=(7-data.move); //will be used in for loop
        for (let num1=2; num1<8; num1++){
            {
                if(!allSquares[data.move].textContent){
                    data.move = (originalData * num1) + num2; //go to next square in row
                    num2+=(num2/(num1-1))
                }
                if(allSquares[data.move].textContent){
                    data.move = data.move  - 7 //if there was content go up one slot
                    allSquares[data.move].textContent = data.player
                    allSquares[data.move].classList.add(data.player) //for design
                    return;
                }
            }
        }
        allSquares[data.move].textContent = data.player //in case there is no data at all in row
        allSquares[data.move].classList.add(data.player) //for design
        return;
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

