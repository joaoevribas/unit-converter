"use strict";

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputBox = document.getElementById("input-box");
const btn = document.getElementById("btn");
const length = document.querySelector(".length");
const volume = document.querySelector(".volume");
const mass = document.querySelector(".mass");

// FUNCTIONS TO CONVERT UNITS
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

// PARAGRAPH FUNCTIONS
function lengthParagraph() {
  return `<p>${inputBox.value} meters = ${meterToFeet(inputBox.value)} feet | ${
    inputBox.value
  } feet = ${feetToMeter(inputBox.value)} meters</p`;
}

function volumeParagraph() {
  return `<p>${inputBox.value} liters = ${literToGallon(
    inputBox.value
  )} gallons | ${inputBox.value} gallons = ${gallonToLiter(
    inputBox.value
  )} liters</p`;
}

function massParagraph() {
  return `<p>${inputBox.value} kilos = ${kiloToPound(
    inputBox.value
  )} pounds | ${inputBox.value} pounds = ${PoundToKilo(
    inputBox.value
  )} kilos</p`;
}

// BUTTON
btn.addEventListener("click", function () {
  length.innerHTML = lengthParagraph();
  volume.innerHTML = volumeParagraph();
  mass.innerHTML = massParagraph();
});
