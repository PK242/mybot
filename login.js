function backFunc() {
  window.open("", "_self");
}

function loginFunc() {
  window.open("/login.html", "_self");
}

var x;

function myLogin() {
  x = document.getElementById("loginpass");
  if(x.value === "astro"){
    window.open("/", "_self");
    localStorage.login = 1;
  } else {
    if(x.value === ""){
      localStorage.login = 0;
    } else {
      localStorage.login = 0;
    }
  }
}
