$(document).ready(function () {

    console.log($('form button'));

    $('form').on('submit', function (e) {
        e.preventDefault();
        const adicionaTarefa = $('#escreve-tarefa').val();
        const novaTarefa = $('<li style="display:none"></li>');
        $(`<p>${adicionaTarefa}</p>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $(novaTarefa).slideDown(500);
        $('#escreve-tarefa').val('')
    })
    
     $(document).on('click', 'li', function () {
        $(this).addClass('item-completado')
    });
    

})
