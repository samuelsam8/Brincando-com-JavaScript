var etanol;
var gasolina;

function calcular(){
    etanol=parseFloat(frmFlex.txtEtanol.value);
    gasolina=parseFloat(frmFlex.txtGasolina.value);

    if(etanol <0.7 * gasolina) {
        document.getElementById("status").src="img/etanol.png";
    }else if (etanol >0.7 * gasolina){  
        document.getElementById("status").src="img/gasolina.png";
    }else if (etanol == 0  || gasolina == 0){
        window.alert("Porfavor, digite um valor Valido")

    }
}

function resetar(){
    document.getElementById("status").src="img/neutro.png" 

} 