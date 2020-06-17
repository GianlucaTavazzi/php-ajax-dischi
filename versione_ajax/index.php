<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" href="../public/app.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    </head>
    <body>
        <div class="header">
            <div class="dropdown">
                <select class="dropdown-list" name="">
                    <option value="">Generi</option>
                    <option value="Rock">Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Metal">Metal</option>
                </select>
            </div>
        </div>
        <div class="container">

        </div>
        <script id="templatecard" type="text/x-handlebars-template">
            <div class="card">
                <img src="{{img}}" alt="">

                <div class="section">
                    <p>Title: <span>{{primoparametro}}</span></p>
                </div>
                <div class="section">
                    <p>Author: <span>{{secondoparametro}}</span></p>
                </div>
                <div class="section genre">
                    <p>Genre: <span>{{terzoparametro}}</span></p>
                </div>
                <div class="section">
                    <p>Year: <span>{{quartoparametro}}</span></p>
                </div>
            </div>
        </script>
        <script src="public/app.js" charset="utf-8"></script>
    </body>
</html>
