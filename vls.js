var usuarios = [
    {"login": "bcf", "senha": "bcf"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
];


function Login() {
    var usuario = document.getElementsByName('login')[0].value.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;

    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {
              url("menu.HTML");
            

        }
    }
    var alt=document.getElementById('user').style.backgroundColor='green';

    
}