var form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault();
    verificar();
})

function verificar(){
    var tnum = document.getElementById('tnum')
    var num1 = Number(tnum.value)
    var tnum2 = document.getElementById('tnum2')
    var num2 = Number(tnum2.value)
    var resp  = document.getElementById('res')

    if (num1 > num2){
        resp.innerHTML = `O valor é INVÁLIDO`

    } else{
        resp.innerHTML = 'O valor é VÁLIDO'
    }
}