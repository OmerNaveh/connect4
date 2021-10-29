
class controller{
    constructor(){
        this.view = new view;
        this.model = new model;
        
        this.view.playEvent.addListener(move=>{this.model.play(move)})
        this.model.updateCellEvent.addListener(data => { this.view.updateCell(data); });
        this.model.victoryEvent.addListener(winner => { this.view.victory(winner); });
        this.model.drawEvent.addListener(() => { this.view.draw(); });
    }

    run(){
        this.view.render();
    }
}


