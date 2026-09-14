const user = JSON.parse(sessionStorage.user)

let spans = document.querySelectorAll('pele')

spans[0].textContent = user.nome
spans[1].textContent = user.email
spans[2].textContent = user.idade
spans[3].textContent = pessoa.sexo
