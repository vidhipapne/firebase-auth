
const loggedOut = document.querySelectorAll('.logout');
const loggedIn = document.querySelectorAll('.login');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
        window.location = "index.html";
    }
    else{
        loggedOut.forEach(item => item.styledisplay = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
    }
}

const login = document.querySelector('#login-form');
login.addEventListener('submit',(e) => {
    e.preventDefault();
    const email = login['email'].value;
    const psw = login['psw'].value;
    firebase.auth().signInWithEmailAndPassword(email, psw).then(function(user) {
     }).catch(function(error) {
         var errorCode = error.code;
         var errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
             alert('Wrong password.');
         } else {
             alert(errorMessage);         
         }
         console.log(error);
     });
     login.reset();
});


const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
});


//after authentication

auth.onAuthStateChanged(user => {
    if (user){
        setupui(user);
    }
    else{
        setupui();
    }
})
