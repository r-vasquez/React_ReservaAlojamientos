/*
  r-vasquez:
  Library of functions to parse date object into a pre-defined spanish text
  w/o using external libs.

  Excercise purpose only... should have used moment.js
  */

const parseDay = function (day) {
  switch (day) {
    case 0:
      return 'domingo';
      break;
    case 1:
      return 'lunes';
      break;
    case 2:
      return 'martes';
      break;
    case 3:
      return 'miercoles';
      break;
    case 4:
      return 'jueves';
      break;
    case 5:
      return 'viernes';
      break;
    case 6:
      return 'sábado';
      break;
    default:
      break;
  }
};

const parseMonth = function (Month) {
  switch (Month) {
    case 0:
      return 'enero';
      break;
    case 1:
      return 'febrero';
      break;
    case 2:
      return 'marzo';
      break;
    case 3:
      return 'abril';
      break;
    case 4:
      return 'mayo';
      break;
    case 5:
      return 'junio';
      break;
    case 6:
      return 'julio';
      break;
    case 7:
      return 'agosto';
      break;
    case 8:
      return 'septiembre';
      break;
    case 9:
      return 'octubre';
      break;
    case 10:
      return 'noviembre';
      break;
    case 11:
      return 'diciembre';
      break;
    default:
      break;
  }
};

export const parseDate = function (date) {
  let weekday = parseDay(date.getDay());
  let day = date.getDate();
  let month = parseMonth(date.getMonth());
  let year = date.getFullYear();
  return `${weekday} ${day} de ${month}, ${year}`;
};
