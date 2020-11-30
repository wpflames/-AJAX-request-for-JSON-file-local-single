var btn1 = document.getElementById('button1');

btn1.addEventListener('click', loadUser);

// REQUEST SINGLE USER'S DATA
function loadUser(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'assets/json/user.json', true);

    xhr.onload = function(){
        if(this.status = 200){
            var user = JSON.parse(this.responseText);

            var output = '';

            output += '<ul>' +
                '<li>ID: '+ user.id +'</li>' +
                '<li>Name: '+ user.name +'</li>' +
                '<li>Email: '+ user.email +'</li>' +
                '</ul>';
            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
}

