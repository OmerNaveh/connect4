class model{
    constructor(){
        this.board = Array(49).fill();
        this.currentPlayer = 'red';
        this.finished = false;
        //events
        this.updateCellEvent = new Event();
        this.victoryEvent = new Event();
        this.drawEvent = new Event();
    }
    play(move){ //recieves 0-48 based on click div in array 
        move = move%7; //get exact row 
        for(let i=move; i<this.board.length; i +=7){ //go through row
            if(!this.board[i]){
                this.board[i]= this.currentPlayer; //put player in correct position
                this.updateCellEvent.trigger({move, player:this.currentPlayer});//send data for which row to put disc and which color 
                if(this.victory()){
                    return
                }
                if(this.draw()){
                    return
                }
                this.switchPlayer()
                return;
            }   
        }
        return false; // if the row is full
    }
    victory(){
        for(let i =0; i<this.board.length; i++){
            if(this.board[i] && this.board[i] === this.board[i+7] && this.board[i] === this.board[i+14] && this.board[i]=== this.board[i+21]){this.finished = true;}; //rows
        }
        for(let j=0; j<4; j++){
            for(let i = j ; i<this.board.length ; i+=7){
                if(this.board[i] && this.board[i] === this.board[i+1] && this.board[i] === this.board[i+2] && this.board[i] === this.board[i+3]){this.finished = true;}; //columns
                if(this.board[i] && this.board[i] === this.board[i+8] && this.board[i] === this.board[i+16] && this.board[i] === this.board[i+24]){this.finished = true;}; //diagonal
            }   
        }
        for(let j = 0; j<4; j++){
            for(let i = j+3 ; i<this.board.length ; i+=7){
                if(this.board[i] && this.board[i] === this.board[i+6] && this.board[i] === this.board[i+12] && this.board[i] === this.board[i+18]){this.finished = true;}; //reverse diagonal
            }
        }
        if(this.finished){
        this.victoryEvent.trigger(this.currentPlayer); //send data the game was finished and who won
        }
        return this.finished;
    }
    draw(){
        for (let i=0; i<this.board.length; i++){  //check if all values in array are full
            if(!this.board[i]){
                return false;
            }
        }
        this.drawEvent.trigger(); //send data the game was finished as a draw
        return true; //if all values in array are full and no victory was made return true for draw
    }
    switchPlayer() {
        if(this.currentPlayer === 'red'){
            this.currentPlayer = 'blue';
        }
        else{
            this.currentPlayer = 'red';
        }
      }

}

