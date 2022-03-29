const s1 = document.querySelector("#s1")
const s2 = document.querySelector("#s2")
const curscorep1 = document.querySelector("#csp1")
const curscorep2 = document.querySelector("#csp2")
const rollDice = document.querySelector(".roll")
const img = document.querySelector(".img")
const hold = document.querySelector(".hold")
const player1 = document.querySelector(".player1")
const player2 = document.querySelector(".player2")
const newgame = document.querySelector(".newgame")
const dice = document.querySelector(".dice")
const p1name = document.querySelector(".p1name")
const p2name = document.querySelector(".p2name")
let current = [0, 0]
let i = 0
let score = [0, 0]
let p1namein = prompt("Enter Player 1 Name")
let p2namein = prompt("Enter Player 2 Name")
p1name.innerHTML = p1namein
p2name.innerHTML = p2namein
score[1] += current[1]
hold.addEventListener("click", () => {
  if (i == 0) {
    console.log("hold for p1")
    score[0] += current[0]
    s1.innerHTML = score[0]
    current[1] = 0

    player1.classList.remove("active")
    player2.classList.add("active")
    i = 1

    curscorep1.innerHTML = 0
    if (score[0] >= 100) {
      player1.classList.add("win")
      rollDice.disabled = true
      hold.disabled = true
    }
  } else if (i == 1) {
    console.log("hold for p2")
    score[1] += current[1]
    s2.innerHTML = score[1]
    player2.classList.remove("active")
    player1.classList.add("active")
    current[0] = 0
    i = 0
    curscorep2.innerHTML = 0
    if (score[1] >= 100) {
      player2.classList.add("win")
      rollDice.disabled = true
      hold.disabled = true
    }
  }
})

rollDice.addEventListener("click", () => {
  random = Math.floor(Math.random() * 6) + 1
  console.log(`dice has ${random}`)
  switch (random) {
    case 1:
      dice.src = "./assets/dice1.png"
      break
    case 2:
      dice.src = "./assets/dice2.png"
      break
    case 3:
      dice.src = "./assets/dice3.png"
      break
    case 4:
      dice.src = "./assets/dice4.png"
      break
    case 5:
      dice.src = "./assets/dice5.png"
      break
    case 6:
      dice.src = "./assets/dice6.png"
      break
    default:
      dice.src = "./assets/dice1.png"
  }
  if (i == 0) {
    if (random != 1) {
      current[i] = current[i] + random
      console.log(current[i])
      curscorep1.innerHTML = `${current[i]}`
    } else if (random == 1) {
      i = 1
      console.log(`transferred to other player`)
      player1.classList.remove("active")
      player2.classList.add("active")
      current[i] = 0
      curscorep1.innerHTML = 0
    }
  } else if (i == 1) {
    if (random != 1) {
      current[i] = current[i] + random
      console.log(current[i])
      curscorep2.innerHTML = `${current[i]}`
      //   score[i] = current[i]
    } else if (random == 1) {
      i = 0
      console.log(`transferred to other player`)
      player2.classList.remove("active")
      player1.classList.add("active")
      current[i] = 0
      curscorep2.innerHTML = 0
    }
  }
})

newgame.addEventListener("click", () => {
  current = [0, 0]
  score = [0, 0]
  let i = 0
  curscorep2.innerHTML = 0
  curscorep1.innerHTML = 0
  s1.innerHTML = 0
  s2.innerHTML = 0
  player1.classList.add("active")
  player1.classList.remove("win")
  player2.classList.remove("win", "active")

  rollDice.disabled = false
  hold.disabled = false
})

document.addEventListener("keyup", (e) => {
  e.preventDefault()
  if (e.key === "Enter") {
    rollDice.click()
  }
})

document.addEventListener("keyup", (e) => {
  e.preventDefault()

  if (e.key === " ") {
    hold.click()
  }
})

document.addEventListener("keyup", (e) => {
  e.preventDefault()

  if (e.key === "Shift") {
    newgame.click()
    dice.src = "./assets/dice1.png"
  }
})
