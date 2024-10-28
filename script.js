//O código só vai ser executado depois que o Dom for totalmente carregado
document.addEventListener('DOMContentLoaded', () => {
    //Obtém o elemento html com o id signup e armazena na constante form 
    const form = document.getElementById('signup-form');
    //Mensagem de cadastro realizado
    const messageDiv = document.getElementById('message');
    //Submit vai ser disparado quando o formulário for enviado 
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário,ou seja,não vai enviar igual uum formulário padrão

        // Cria um objeto interface
        const formData = new FormData(form);

        //Objeto vazio onde os dados são armazenados 
        const formObject = {};
        //Pares-chaves, para cada par adicionar uma nova propiedade ao formObject
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        // Converte o objeto JavaScript para uma string JSON,o null e o 2 vai ser utilizado para a saída do Json
        const jsonString = JSON.stringify(formObject, null, 2);

        
        console.log(jsonString); //Exibir console

        messageDiv.textContent = "Cadastro realizado com sucesso!";

    });
});