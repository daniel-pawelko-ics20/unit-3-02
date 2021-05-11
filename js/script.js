// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// Defining function that actives when user presses "Calculate" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const length = parseFloat(document.getElementById("length-entered").value)
  const width = parseFloat(document.getElementById("width-entered").value)
  const height = parseFloat(document.getElementById("height-entered").value)

  // Making calculations
  const volume = (length*width*height)/3

  // Output calculations
  document.getElementById('volume').innerHTML = "Volume is: " + volume.toFixed(2) + "mm³"
}