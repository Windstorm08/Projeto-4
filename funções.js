
function calcula(){

    var notaPrimeiroBi =parseFloat( document.getElementById("n1").value)
    var notaSegundoBi = parseFloat(document.getElementById("n2").value)
    var notaTerceiroBi =parseFloat( document.getElementById("n3").value)
    var notaQuartoBi = parseFloat(document.getElementById("n4").value)
    
    var nota = (eval(notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi))/4

    document.getElementById("notas").innerHTML = nota.toFixed(1) 

    if(nota > 5 ){

        alert("Voce passou !!!")
    }else {

        alert("Não desista, continue estudando ")
    }


    



}

