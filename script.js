const choices = Array.from(document.querySelectorAll('[data-option]'))
const players = Array.from(document.querySelectorAll('.player'))
const you = document.querySelector('.you')
const computer = document.querySelector('.computer')
const plays = ['✊', '🖐', '✌']
const compWins = [
   { you: '✊', computer: '🖐' },
   { you: '🖐', computer: '✌' },
   { you: '✌', computer: '✊' }
]
const youWin = [
   { you: '🖐', computer: '✊' },
   { you: '✌', computer: '🖐' },
   { you: '✊', computer: '✌' }
]

let options = {
   you: null,
   computer: null
}

choices.forEach(choice => {
   choice.addEventListener('click', e => {
      let winner = ''
      options.you = e.target.innerText
      options.computer = plays[Math.floor(Math.random() * plays.length)]
      you.innerText = options.you
      computer.innerText = options.computer
      compWins.forEach(win => {
         if (win.you === options.you && win.computer === options.computer) {
            let wins = players[1].innerText === 'Computer' ? 0 : Number(players[1].innerText.slice(-1))
            wins += 1
            players[1].innerText = 'Computer ' + wins
            winner = 'computer'
            computer.classList.remove('lose')
            computer.classList.remove('tie')
            you.classList.add('lose')
         }
      })
      youWin.forEach(win => {
         if (win.you === options.you && win.computer === options.computer) {
            let wins = players[0].innerText === 'You' ? 0 : Number(players[0].innerText.slice(-1))
            wins += 1
            players[0].innerText = 'You ' + wins
            winner = 'you'
            you.classList.remove('lose')
            you.classList.remove('tie')
            computer.classList.add('lose')
         }
      })
      if (winner === '') {
         computer.classList.add('tie')
         you.classList.add('tie')
      }
   })
})