$(document).ready(function() {



    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__)_____-____'
    })

    $("#cpf").mask("999.999.999-99", {
        placeholder:`000.000.000-00`})

    $('#cep').mask(`00000-000`, {
        placeholder: `99000-000`})
    

    $('form').validate({
        rules: {
            nome: {
                required:true 
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required:true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
            },
            messages: {
                nome: 'Por favor, insira um nome válido'
            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento,validador) {
                let camposIncorretos = validador.numberOfInvalids();
                console.log(camposIncorretos)
            }
    })


    })
