
// hide login form if logged in
function setElements(isLoggedIn){
    if(isLoggedIn){
        document.getElementById('loginBox').style.display = 'none';

    }else{
        document.getElementById('loginBox').style.display = 'flexbox';
    }
}