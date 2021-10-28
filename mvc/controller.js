
const view = require('./view')
const model = require('./model')



class controller{
    constructor(){
        this.view = new view;
        this.model = new model;
    }

    run(){
        this.view.render();
    }
}

module.exports = controller;

