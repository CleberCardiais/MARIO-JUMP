const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
let score = 0

function newGame() {
    window.location.reload()
}

function jump() {
    mario.classList.add('jump')

    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}

function increaseScore() {
    score++
    document.getElementById('score').textContent = score
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 70) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`

        mario.src = './IMG/game-over.png'
        mario.style.width = '75px'
        mario.style.left = '50px'

        clearInterval(loop)
    } else {
        increaseScore() // Incrementar pontuação continuamente
    }
}, 10)

document.addEventListener('keydown', jump)


