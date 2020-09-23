const inputCalc = document.querySelector(".screen");
    resultCalc = document.querySelector(".result");

    function input(i) {
        inputCalc.value = inputCalc.value + i
    }

    function result() {
        if(eval(inputCalc.value) == undefined){
            resultCalc.value = "0,00";
            inputCalc.value = "0,00";
        } if(eval(inputCalc.value) == Infinity){
            resultCalc.value = "0,00";
            inputCalc.value = "Nollalla ei voi jakaa";
        }
        resultCalc.value = eval(inputCalc.value);
        inputCalc.value = eval(inputCalc.value);
    }

    function reset() {
        resultCalc.value = "0,00";
        inputCalc.value = "";
    }