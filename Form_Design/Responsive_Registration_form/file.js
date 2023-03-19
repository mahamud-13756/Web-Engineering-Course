var regbtn = document.getElementById('register');

regbtn.onclick = function() {



    var password1 = (document.getElementById('password').value);
    var repassword1 = (document.getElementById('repassword').value);
   
    if(password1 !== repassword1){
        alert('Password does not match');
    }
    

}