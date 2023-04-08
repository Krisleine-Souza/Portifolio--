/************
Dados Estáticos
************/
const allTheMonths = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  const allTheDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
  ];
  
  /************
  Dados Dinâmicos
  ************/
  // Obtenha e armazene a data e hora atuais com o objeto `new Date ()`
  const dateNow = new Date();
  
  // Check-Check: Veja todos os métodos e propriedades `Date()`
  console.log( dateNow );
  
  const gotMonth = dateNow.getMonth();
  // Obter o dia atual do mês
  let gotDayOfMonth = dateNow.getDate();
  // Obter ano atual
  const gotYear = dateNow.getFullYear();
  // Obter o dia atual da semana
  const gotDayOfWeek = dateNow.getDay();
  
  // Check-Check: Os dados estão corretos?
  console.log(gotMonth, gotDayOfMonth, gotYear, gotDayOfWeek);
  
  /************
  Obter elementos DOM
  ************/
  // Obter o mês
  const month = document.querySelector(".month");
  // Obter dia do mês
  const dayOfMonth = document.querySelector(".dayOfMonth");
  // Obter ano
  const year = document.querySelector('.year');
  // Obter dia da semana
  const dayOfWeek = document.querySelector('.dayOfWeek');
  
  
  /************
  Definir elementos DOM
  ************/
  // Definir o mês
  month.innerText = allTheMonths[gotMonth];
  // Definir dia do mês
  dayOfMonth.innerText = gotDayOfMonth;
  // Definir o ano
  year.innerText = gotYear;
  // Set the day of the week
  dayOfWeek.innerText = allTheDays[gotDayOfWeek];