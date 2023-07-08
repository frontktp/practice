// Keyboard events
// keydown
// keyup

const inputEl = document.querySelector('input')

// inputEl.addEventListener('keydown', event => {
//   console.log(event.key)
// })

inputEl.addEventListener('keydown', event => {
  if (event.key ==='Enter' && !event.isComposing) {
  console.log(event.isComposing)
  console.log(event.target.value)
  }
})