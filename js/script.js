// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates volume of a pyramid.
 */
function calculate() {
  // input
  let sideA = parseFloat(document.getElementById('side-a-of-pyramid').value)
  let sideB = parseFloat(document.getElementById('side-b-of-pyramid').value) 
  let height = parseFloat(document.getElementById('height-of-pyramid').value)
  
  // process
  let volume = (1/6) * sideA * sideB * height
  
  // output
  document.getElementById('volume').innerHTML = 'The volume of the pyramid is: ' + volume.toFixed(3) + ' cm³'
}