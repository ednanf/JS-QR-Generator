// Properties
const container = document.querySelector('.container')
const textInput = document.querySelector('#text-input')
const resetBtn = document.querySelector('#reset-btn')
const generateBtn = document.querySelector('#generate-btn')
const qrCodeImg = document.querySelector('#qr-code img')

// Events
generateBtn.addEventListener('click', () => {
  generateQR()
})

generateBtn.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    generateQR()
  }
})

resetBtn.addEventListener('click', () => {
  resetBtnPressed()
})

// Functions
function generateQR() {
  const textInputValue = textInput.value

  if (!textInputValue) return

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${textInputValue}`

  showQRDiv()
}

function showQRDiv() {
  qrCodeImg.addEventListener('load', () => {
    container.classList.add('active')
  })
  generateBtn.disable = true
  textInput.disabled = true
}

function resetBtnPressed() {
  container.classList.remove('active')
  textInput.value = ''
  textInput.disabled = false
}