$("#datepicker").datepicker({
  changeYear: true,
  changeMonth: true,
  showOtherMonths: true,
  yearRange: '1950:2021',
  minDate: new Date(1950, 10-1, 25),
  maxDate: '+50Y',
  inline:true
}); 

var cities= ["Tawi-Tawi", "Sulu", "Basilan", "Zamboanga del Norte", "Zamboanga Sibugay", "Zamboanga del Sur", "Zamboanga City",
"Misamis Occidental", "Lanao del Norte", "Iligan City", "Lanao del Sur", "Cotabato City", "Maguindanao", "Sultan Kudara",
"Cotabato", "South Cotabato", "General Santos City", "Sarangani", "Davao Occidental", "Davao del Sur", "Davao City",
"Davao del Norte", "Davao de Oro", "Davao Oriental", "Bukidnon", "Cagayan de Oro", "Misamis Oriental", "Agusan del Sur",
"Butuan City", "Surigao del Sur", "Agusan del Norte", "Surigao del Norte", "Camiguin", "Dinagat Islands" ];

$("#Province").autocomplete(
  {
    source: cities
  },
  {
    autoFocus: true,
    minLength: 3,
    delay: 0,
  });

  