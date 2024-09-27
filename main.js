$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();

        const addresimage = $('#addres-image').val()
        const newitem = $('<li style="display: none"></li>')

        $(`<img src="${addresimage}" alt="image" />`).appendTo(newitem)

        $(`
            <div class="overlay-img-link">
                <a href="${addresimage}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
            </div>
        `).appendTo(newitem)

        $(newitem).appendTo('ul')
        $(newitem).fadeIn(1000)
        $('#addres-image').val('')
    })
})