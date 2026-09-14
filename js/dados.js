let vasco = document.querySelector("form")

vasco.addEventListener('submit', pegandoDados)

function pegandoDados(event){

    event.preventDefault()
    
    let form = document.querySelector('form')

    let user = {
        nome: form.nome.value,
        email: form.email.value,
        idade: form.idade.value,
        sexo: form.sexo.value
    }

    sessionStorage.user = JSON.stringify(user)
    location.href = 'index.html'
}