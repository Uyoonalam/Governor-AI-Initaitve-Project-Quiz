#!/usr/bin/env node

import inquirer from "inquirer"

  let ans = await inquirer.prompt([
    {
      type: 'list',
      name: 'pi',
      message: 'How many numbers are in pi?',
      choices: ['Infinite', '100', '3.14159', '22/7']
    },
    {
      type: 'list',
      name: 'i',
      message: 'What is the value of "i" in maths?',
      choices: ['100', '2.71828', '-1', '3.141']
    },
    {
      type: 'list',
      name: 'circleTerm',
      message: 'Which of the following is NOT a term used in relations to a circle?',
      choices: ['Tangent', 'Circumference', 'Radial', 'Side']
    },
    {
      type: 'list',
      name: 'trapeziumSides',
      message: 'How many sides does a trapezium have?',
      choices: ['2', '5', '7', '4']
    },
    {
      type: 'list',
      name: 'prime',
      message: 'Which one is the prime number?',
      choices: ['91', '114', '47', '51']
    },
    {
      type: 'list',
      name: 'radius',
      message: 'If a circle has a radius of 5 units, what is its diameter?',
      choices: ['2.5', '10', '15', '20']
    },
    {
      type: 'list',
      name: 'quadilatrel',
      message: 'How many degrees does a quadilatrel have?',
      choices: ['90', '180', '270','360']
    },
    {
      type: 'list',
      name: 'squareRoot',
      message: 'What is the square root of 144?',
      choices: ['10', '12', '14', '16']
    },
    {
      type: 'list',
      name: 'percentCalculation',
      message: 'What is 20% of 80?',
      choices: ['10', '16', '20', '24']
    },
    {
      type: 'list',
      name: 'triangleType',
      message: 'What type of triangle has all sides of equal length?',
      choices: ['Scalene', 'Isosceles', 'Equilateral', 'Right']
    }
  ])

  let score = 0

  if (ans.pi === 'Infinite') {
    ++score
  }
  if (ans.i === '-1') {
    ++score
  }
  if (ans.circleTerm === 'Side') {
    ++score
  }
  if (ans.trapeziumSides === '4') {
    ++score
  }
  if (ans.prime === '47') {
    ++score
  }
  if (ans.radius === '10') {
    ++score
  }
  if (ans.quadilatrel === '360') {
    ++score
  }
  if (ans.squareRoot === '12') {
    ++score
  }
  if (ans.percentCalculation === '16') {
    ++score
  }
  if (ans.triangleType === 'Equilateral') {
    ++score
  }

  console.log("\n\tScore:", score)

  if (score === 10) {
    console.log("You got 100%")
  } else if (score >= 9) {
    console.log("You got 90%")
  } else if (score >= 8) {
    console.log("You got 80%")
  } else if (score >= 7) {
    console.log("You got 70%")
  } else if (score >= 6) {
    console.log("You got 60%")
  } else if (score >= 5) {
    console.log("You got 50%")
  } else if (score >= 4) {
    console.log("You got 40%")
  } else if (score >= 3) {
    console.log("You got 30%")
  } else if (score >= 2) {
    console.log("You got 20%")
  } else if (score >= 1) {
    console.log("You got 10%")
  } else {
    console.log("You got 0%")
  }

  console.log('\n\tYour Answers:', ans)

// ANSWERS


// Infinite
// -1
// Side
// 4
// 47
// 10
// 360
// 12
// 16
// Equilateral