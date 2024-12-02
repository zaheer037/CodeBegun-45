function addTwoNumbers(){
    var _firstValue=document.getElementById('firstvalue').value;
    var _secondvalue=document.getElementById('secondvalue').value;

    var _result=parseInt(_firstValue)+parseInt(_secondvalue); //browser considers intially all values as strings so, we parseInt()

    console.log(_result)

    document.getElementById('result').innerHTML=_results;
}

