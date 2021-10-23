var add = document.getElementById("add");
var names = document.getElementById("names");
var lastnames = document.getElementById("lastnames");
var numbers = document.getElementById("numbers");



  add.addEventListener("click",function(){
    var names = document.getElementById("names").value;
    var lastnames = document.getElementById("lastnames").value;
    var numbers = document.getElementById("numbers").value;
    var numbers = Number(numbers);

    if(names.length && lastnames.length  && numbers > 0 ){
  var target = document.getElementById("tekstas");
  target.innerHTML += '<tbody><tr><td>'+names+'</td><td>'+lastnames+'</td><td>'+numbers+'</td></tr></tbody>';

        document.getElementById("names").value= '';
        document.getElementById("lastnames").value= '';
        document.getElementById("numbers").value= '';
    }else {
      (names.length && lastnames.length  && numbers > 0 )
      alert("Iveskite Teksta");
    }
});
