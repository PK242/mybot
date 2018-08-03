window.onload = function() {
  if(login === 0){
    document.getElementById("logged").innerHTML = '<button onclick="pageEdit()">Edit</button>';
  }
  if(login === 1){
    document.getElementById("logged").innerHTML = '<button onclick="myLogin()">Login</button>';
  }
}
