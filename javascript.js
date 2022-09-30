var segundos = 0;
var minutos = 0;
var horas = 0;
var interval;
document.getElementById("wacth").innerText = '00:00:00';

var relogio = setInterval(function time(){
    let time = document.getElementById('time');
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundos = dateToday.getSeconds();

    if(hora < 10){
        hora = '0' + hora;
    }if(minuto < 10){
        minuto = '0' + minuto;
    }if(segundos < 10){
        segundos = '0' + segundos;
    }

    time.textContent = hora + ':' + minuto + ':' + segundos;
})

function start(){
    interval = setInterval(wacth, 1000)
}

function pause(){
    clearInterval(interval);
}

function stop(){
    clearInterval(interval);
    segundos = 0;
    minutos = 0;
    document.getElementById("wacth").innerText = "00:00:00";    
    

}

function formatext(digito){
if(digito < 10){
    return('0' + digito)
}else{
    return (digito)
}
}

function wacth(){
    segundos++
    document.getElementById("wacth").innerText = formatext(horas)+ ':' +  formatext(minutos) + ':' + formatext(segundos);
    if(segundos == 60){
        minutos++
        segundos = 0
        if(minutos == 60){
            minutos = 0;
            horas++
        }
    }
}
