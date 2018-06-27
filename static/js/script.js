$(document).ready(function() {
    //
    $.ajax({
        url: 'http://localhost:3002/users',
        type: 'GET',
        success: function (affichInfo) {
            console.log(affichInfo);
            for (var i = 0; i < affichInfo.length; i++) {
                console.log(affichInfo[i]);  
                var info = "";
                $('#utilisateurs').append('Nom: ' + affichInfo[i].nom + '<p>Prenom: '  + affichInfo[i].prenom + ' </p>'); 
        }; 
        },
        error: function (resultat, statut, erreur) {

            alert('ERROR ERROR');
        }
    });
    //

    $('#add').click(function () {
        var nom = $('#nom').val();
        var prenom = $('#prenom').val();
        $.ajax({
            url: 'http://localhost:3002/add',
            type: 'POST',
            data: {
                nom: nom,
                prenom: prenom
            },
            success: function (data) {
                console.log(data);
                location.reload();
            },
            error: function (e) {
                console.error("erreur :", e);
            }
        });
});
});


