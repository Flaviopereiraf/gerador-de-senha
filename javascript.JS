
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value; 

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){ 

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;

    password.addEventListener('click', function() {
        // Cria um elemento input
        var input = document.createElement('input');
        input.value = password.textContent; // obtém o texto da senha
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy'); // copia o texto
        document.body.removeChild(input); // remove o elemento input
        alert('Senha copiada para a área de transferência!');
    });    
    
}
