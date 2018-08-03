function backFunc() {
  window.open("/", "_self");
}

function loginFunc() {
  window.open("/login.html", "_self");
}

var x;

function myLogin() {
  x = document.getElementById("loginpass");
  if(x.value === "astro"){
    
    window.open("/", "_self");
  } else {
    if(x.value === ""){
    } else {
    }
  }
}
