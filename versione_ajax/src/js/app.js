$(document).ready(function() {
    var template_html = $('#templatecard').html();
    var template_function = Handlebars.compile(template_html);

    $.ajax({
        'url': 'database/lista_music.php',
        'method': 'GET',
        'success': function(data) {
            var authors =[];
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
                var card_finale = template_function(card);
                $('.container').append(card_finale);


                if (!authors.includes(dati.author)) {
                    (authors).push(dati.author);
                }
            }

            for (var i = 0; i < authors.length; i++) {
                var value = parseInt(i+1)
                console.log(authors[i]);
                $('.dropdown-list').append('<option value="' + authors[i] + '">' + authors[i] + '</option>');
            }

            $('.dropdown-list').change(function() {
                var val_select = $(this).val();
                if (val_select != '') {
                    $('.container').empty();
                    $.ajax({
                        'url': 'database/lista_music.php',
                        'method': 'GET',
                        'success': function(data) {
                            var authors =[];
                            for (var i = 0; i < data.length; i++) {
                                var dati = data[i];
                                var card = {
                                'img' : dati.poster,
                                'primoparametro' : dati.title,
                                'secondoparametro' : dati.author,
                                'terzoparametro' : dati.genre,
                                'quartoparametro' : dati.year,
                                }
                                if (val_select == dati.author) {
                                    var card_finale = template_function(card);
                                    $('.container').append(card_finale);
                                }
                            }
                        },
                        'error': function() {
                            console.log('si è verificato un errore');
                        }
                    });
                } else {
                    $('.container').empty();
                    for (var i = 0; i < data.length; i++) {
                        var dati = data[i];
                        var card = {
                        'img' : dati.poster,
                        'primoparametro' : dati.title,
                        'secondoparametro' : dati.author,
                        'terzoparametro' : dati.genre,
                        'quartoparametro' : dati.year,
                        }
                        var card_finale = template_function(card);
                        $('.container').append(card_finale);
                    }
                }
            })
        },
        'error': function() {
            console.log('si è verificato un errore');
        }
    });
});
