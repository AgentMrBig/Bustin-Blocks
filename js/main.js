/**-------------------------------------------------------------
 *  Initialization
 * -------------------------------------------------------------
 *//////////////////////////////////////////////////////////////

// init on dom load
document.addEventListener('DOMContentLoaded', init);

// init app
function init(){
    // const canvas = document.getElementById("gameScreen");
    // const logRegForm = document.getElementById('loginBox');
}

/**-------------------------------------------------------------
 *  FACEBOOK START
 * -------------------------------------------------------------
 *//////////////////////////////////////////////////////////////

// FB init


// hide login form if logged in
function setElements(isLoggedIn){
    if(isLoggedIn){
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById("gameScreen").style.display = 'flexbox';
        

    }else{
        document.getElementById('loginBox').style.display = 'flexbox';
        document.getElementById("gameScreen").style.display = 'none';
    }
}