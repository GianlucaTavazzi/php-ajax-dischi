$(document).ready(function() {
    var template_html = $('#templatecard').html();
    var template_function = Handlebars.compile(template_html);

    $.ajax({
        'url': 'database/lista_music.php',
        'method': 'GET',
        'success': function(data) {
            for (var i = 0; i < data.length; i++) {
                var dati = data[i];
                console.log(dati);
                var card = {
                'img' : dati.poster,
                'primoparametro' : dati.title,
                'secondoparametro' : dati.author,
                'terzoparametro' : dati.genre,
                'quartoparametro' : dati.year,
                }
                console.log(dati.genre);
                var card_finale = template_function(card);
                $('.container').append(card_finale);
            }
        },
        'error': function() {
            console.log('si è verificato un errore');
        }
    });
});
