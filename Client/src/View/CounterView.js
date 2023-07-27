class CounterView {
    constructor(){
        let $ = document.getElementById.bind(document);
        this.counterElement = $('counter');
        this.incrementBtn = $('incrementBtn');
        this.resetBtn = $('resetBtn');
    }

    updateCounterDisplay(couterValue){
        this.counterElement.innerHTML = couterValue;
    }

    bindIncrementButton(handler){
        this.incrementBtn.addEventListener("click", handler);
    }

    bindResetButton(handler){
        this.resetBtn.addEventListener("click", handler);
    }
}