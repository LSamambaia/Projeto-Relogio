const caixaHoras = document.getElementById("Horas");
const caixaMinutos = document.getElementById("Minutos");
const caixaSegundos = document.getElementById("Segundos");
const caixaDate = document.getElementById('date');
const relogio = setInterval(() => {
    
    let dateToday = new Date();
    const options = {weekday: "long",year:"numeric", month:"short",day:"numeric"};

    let date = dateToday.toLocaleDateString('pt-BR', options)
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = "0" + hr;
    if (min < 10) min = "0" +min;
    if (sec < 10) sec = "0" + sec;
        
    
    caixaDate.textContent = date;
    caixaHoras.textContent=hr;
    caixaMinutos.textContent=min;
    caixaSegundos.textContent=sec;

}, 10);