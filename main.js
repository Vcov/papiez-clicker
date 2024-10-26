const scoreLabel = document.getElementById('score')
const papiezImg = document.getElementById('papiez')
const eventLabel = document.getElementById('event')
const muzyka = document.getElementById('muza')

let score = 0
let jackpot = 100

document.addEventListener('click', () => {
    score++
    scoreLabel.textContent = score
    scoreLabel.text

    if (muzyka.paused) {
        muzyka.play()
    }

    if (score % jackpot == 0) {
        if (jackpot == 100) {
            eventLabel.textContent = "JACKPOT!"
            jackpot = 200
        } else if (jackpot == 200) {
            eventLabel.textContent = "MEGA BIG WIN!!"
            jackpot = 300
        } else if (jackpot == 300) {
            eventLabel.textContent = "MEGA JACKPOT!!!"
            jackpot = 400
        } else if (jackpot == 400) {
            eventLabel.textContent = "TRIPLE MEGA BIG WIN!!!!"
            jackpot = 500
        } else if (jackpot == 500) {
            eventLabel.textContent = "PAPIEŻ JACKPOT!!!!!"
            jackpot = 1000
        }  else if (jackpot == 1000) {
            eventLabel.textContent = "JAN PAWEŁ 2!!!!!!!"
            jackpot = 100
        }
        
        for (let i=0; i < 10; i++) {
            createFallingIcon()
        }
    }

    createFallingIcon();
})

document.addEventListener('mousedown', () => {
    papiezImg.style.height = '430px'
    papiezImg.style.width = '350px'
    papiezImg.src='images/zly-papiez.png'
})

document.addEventListener('mouseup', () => {
    papiezImg.style.height = '400px'
    papiezImg.style.width = '320px'
    papiezImg.src = 'images/ok-papiez.png'
})

function createFallingIcon() {
    const icon = document.createElement('div');
    icon.classList.add('falling-icon')
    icon.innerHTML = "<img src='images/ok-papiez.png' width='50px' height='50px'>"

    icon.style.left = `${Math.random() * window.innerWidth}px`
    document.body.appendChild(icon)

    icon.addEventListener('animationend', () => {
        icon.remove();
    })
}