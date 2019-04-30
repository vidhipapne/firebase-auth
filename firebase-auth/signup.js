//signup

const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = signup['email'].value;
    const psw = signup['psw'].value;
        firebase.auth().createUserWithEmailAndPassword(email, psw).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if ( errorCode == 'email-already-in-use' ) {
                alert('You already have an account with that email.');
            } else if ( errorCode == 'auth/invalid-email' ) {
                alert('Please provide a valid email');
            } else if ( errorCode == 'auth/weak-password' ) {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            signup.reset();
        });
});

//logout
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
//for showing content which is for logged in user
const loggedOut = document.querySelectorAll('.login');
const loggedIn = document.querySelectorAll('.logout');

const setupui = (user) =>{
    if(user){
        loggedOut.forEach(item => item.style.display = 'block');
        loggedIn.forEach(item => item.style.display = 'none');
        window.location = "index.html";
    }
    else{
        loggedOut.forEach(item => item.style.display = 'none');
        loggedIn.forEach(item => item.style.display = 'block');
    }
}



