class CounterController{
    constructor(model, view){
        this.model = model;
        this.view = view;

        this.view.bindIncrementButton(this.handlerIncrement.bind(this))
        this.view.bindResetButton(this.handlerReset.bind(this))
        this.view.updateCounterDisplay(this.model.counter);
    }

    handlerIncrement(){
        this.model.incrementCounter();
        this.view.updateCounterDisplay(this.model.counter);
    }

    handlerReset(){
        this.model.resetCounter();
        this.view.updateCounterDisplay(this.model.counter);
    }
}