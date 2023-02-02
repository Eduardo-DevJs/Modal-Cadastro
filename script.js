const openModal = document.querySelector(".js-open")
const modal = document.querySelector('.js-form')
const small = document.querySelectorAll('small')
const btnJs = document.querySelector('.js-btn')

// inputs
const nomeInput = document.querySelector('.js-nome')
const sobrenomeInput = document.querySelector('.js-sobrenome')
const emailInput = document.querySelector('.js-email')
const senhaInput = document.querySelector('.js-senha')

function abrirModal() {
  modal.classList.toggle('ativo')
}

function validacao() {
  if (nomeInput.value === '' || sobrenomeInput.value === '' || emailInput.value === '' || senhaInput.value === '') {
    small.forEach(item => {
      item.classList.add('ativo')
    })
  }else {
    small.forEach(item => {
      item.classList.remove('ativo')
    })
  }
}

// eventos
openModal.addEventListener("click", abrirModal)