"use strict";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box").value;
const btn = document.getElementById("btn");

function meterToFeet(x) {
  let result;
  result = x * 3.281;
  return result.toFixed(3);
}

function feetToMeter(x) {
  let result;
  result = x / 3.281;
  return result.toFixed(3);
}

function literToGallon(x) {
  let result;
  result = x * 0.264;
  return result.toFixed(3);
}

function gallonToLiter(x) {
  let result;
  result = x / 0.264;
  return result.toFixed(3);
}

function kiloToPound(x) {
  let result;
  result = x * 2.204;
  return result.toFixed(3);
}

function PoundToKilo(x) {
  let result;
  result = x / 2.204;
  return result.toFixed(3);
}
