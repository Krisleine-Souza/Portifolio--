/************
Dados Dinâmicos
************/
// definir `theClockApp` armazenado na função a ser executada
const theClockApp = () => {
  
    // Obtenha e armazene a data e hora atuais com o objeto `new Date ()`
    const timeNow = new Date();
    // Check-Check: Veja todos os métodos e propriedades `Date()`
    // console.log( timeNow );
    
    // Obter horas atuais
    let gotHours = timeNow.getHours();
    // Obter minutos atuais
    let gotMinutes = timeNow.getMinutes();
    // Obter segundos atuais
    let gotSeconds = timeNow.getSeconds();
    
    // Check-Check: Os dados estão corretos?
    // console.log(gotHours, gotMinutes, gotSeconds);
    
    /************
    Formato dos dados
    ************/
    // Obter AM ou PM
    const gotAmOrPM = gotHours >= 12 ? 'PM' : 'AM';
    // Obtenha o formato de 12 horas
    gotHours = gotHours % 12 || 12;
    // Opcionalmente, acrescente zero a horas de um dígito
    gotHours = gotHours < 10 ? `0${gotHours}` : gotHours;   
    // Opcionalmente, acrescente zero a minutos de um dígito
    gotMinutes = gotMinutes < 10 ? `0${gotMinutes}` : gotMinutes;
    // Opcionalmente, acrescente zero a segundos de um dígito
    gotSeconds = gotSeconds < 10 ? `0${gotSeconds}` : gotSeconds;
    
    /************
    Obter elementos DOM
    ************/
    // Obter horas
    const hours = document.querySelector(".hours");
    // Obter minutos
    const minutes = document.querySelector(".minutes");
    // Obter segundos
    const seconds = document.querySelector(".seconds");
    // Obter AM ou PM
    const amOrPM = document.querySelector('.amOrPM');
    
    /************
    Definir elementos DOM
    ************/
    // Definir as horas
    hours.innerText = gotHours;
    // Definir os minutos
    minutes.innerText = gotMinutes;
    // Defina os segundos
    seconds.innerText = gotSeconds;
    // Definir AM ou PM
    amOrPM.innerText = gotAmOrPM;
      
    }
    
    /************
    Executar aplicativo
    ************/
    // Execute novamente `theClockApp` a cada 1 segundo (1000 ms)
    setInterval(theClockApp, 1000);
    