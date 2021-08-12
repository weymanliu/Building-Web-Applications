let x=0;
function task() {
  if (x==0)
  {
    document.querySelector("#sp").classList.remove("d-none");
    x=1;
  }
  else {
    {
      document.querySelector("#sp").classList.add("d-none");
      x=0;
    }
  }
}

let y=0;
function t1() {
  if (y==0)
  {
    document.querySelector("#head1").classList.remove("text-left");
    document.querySelector("#head2").classList.remove("text-left");
    document.querySelector("#head3").classList.remove("text-left");
    document.querySelector("#head4").classList.remove("text-left");
    document.querySelector("#head5").classList.remove("text-left");

    document.querySelector("#head1").classList.add("text-center");
    document.querySelector("#head2").classList.add("text-center");
    document.querySelector("#head3").classList.add("text-center");
    document.querySelector("#head4").classList.add("text-center");
    document.querySelector("#head5").classList.add("text-center");
  }
  if (y==1)
  {
    document.querySelector("#head1").classList.remove("text-center");
    document.querySelector("#head2").classList.remove("text-center");
    document.querySelector("#head3").classList.remove("text-center");
    document.querySelector("#head4").classList.remove("text-center");
    document.querySelector("#head5").classList.remove("text-center");

    document.querySelector("#head1").classList.add("text-right");
    document.querySelector("#head2").classList.add("text-right");
    document.querySelector("#head3").classList.add("text-right");
    document.querySelector("#head4").classList.add("text-right");
    document.querySelector("#head5").classList.add("text-right");
  }
  if (y==2)
  {
    document.querySelector("#head1").classList.remove("text-right");
    document.querySelector("#head2").classList.remove("text-right");
    document.querySelector("#head3").classList.remove("text-right");
    document.querySelector("#head4").classList.remove("text-right");
    document.querySelector("#head5").classList.remove("text-right");

    document.querySelector("#head1").classList.add("text-left");
    document.querySelector("#head2").classList.add("text-left");
    document.querySelector("#head3").classList.add("text-left");
    document.querySelector("#head4").classList.add("text-left");
    document.querySelector("#head5").classList.add("text-left");
  }
  y++;
  if(y==3) y=0;
}

function t2() {
  var hob = prompt("enter a new hobby");

  if (hob != 0) {
    let newHobby = document.createElement("div");
    let element = '<div></div>';
    newHobby.innerHTML = element;
    newHobby.className = "d-flex";
    newHobby.querySelectorAll("div")[0].className = "m-2 p-3 bg-primary";
    newHobby.querySelector("div").innerHTML = hob;
    document.querySelector("#hobby").appendChild(newHobby);
  }
}

z=0;
function t3() {
  if (z==0)
  {
    document.querySelector("#bar").classList.remove("d-none");
    z=1;
  }
  else {
    {
      document.querySelector("#bar").classList.add("d-none");
      z=0;
    }
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar1").style.width = scrolled + "%";
}

function checkEmail()
{
  var format = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (document.querySelector("#new-email").value.match(format))
  {
    return (true)
  }
  else
  {
    return (false)
  }

}

let wrong = 0;
function checkform()
{
  var e =   document.querySelector("#new-email").value;
  if(e==0)
  {
    document.querySelector("#new-email").classList.add("is-invalid");
    wrong++;
  }
  else
  {
      document.querySelector("#new-email").classList.remove("is-invalid");
  }

  var c = document.querySelector("#new-comment").value;
  if(c==0)
  {
    document.querySelector("#new-comment").classList.add("is-invalid");
    wrong++;
  }
  else
  {
    document.querySelector("#new-comment").classList.remove("is-invalid");
  }

  if(checkEmail()==false)
  {
    document.querySelector("#new-email").classList.add("is-invalid");
    wrong++;
  }
  else
  {
      document.querySelector("#new-email").classList.remove("is-invalid");
  }

  if (wrong==0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function processform()
{
  if (checkform()==true)
  {
    document.querySelector("#new-email").classList.remove("is-invalid");
    document.querySelector("#new-comment").classList.remove("is-invalid");
    let lastComment = document.querySelector("#comments").lastElementChild;
    let newComment = document.createElement("div");
    let element = '<div><svg height="100" width="100"><circle cx="50" cy="50" r="40"></svg></div><div><h5></h5><p></p><p1></p1><br><p2></p2><br><p3></p3><br><p4></p4></div>';
    newComment.innerHTML = element;
    newComment.className = "d-flex";
    newComment.querySelectorAll("div")[0].className = "flex-shrink-0";
    newComment.querySelectorAll("div")[1].className = "flex-grow-1";
    newComment.id = 'c' + (Number(lastComment.id.substr(1)) + 1);
    newComment.querySelector("h5").innerHTML = document.querySelector("#new-email").value;
    newComment.querySelector("p").innerHTML = document.querySelector("#new-comment").value;
    newComment.querySelector("p1").innerHTML ="system language:" + navigator.language;
    newComment.querySelector("p2").innerHTML = "system platform:" +navigator.platform;
    var d = new Date();
    newComment.querySelector("p3").innerHTML = "date:" +d;
    newComment.querySelector("p4").innerHTML = "lat:"+lat+" lng:"+lng;
    let color = document.querySelectorAll("input[name=new-color]:checked")[0].value;
    newComment.querySelector("circle").setAttribute("fill", color);
    document.querySelector("#comments").appendChild(newComment);
    document.querySelector("form").reset();
    savefile();
  }
  else
  {
      wrong=0;
  }
}

var lat = 0;
var lng = 0;
getLocation();

function getLocation() {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(geoSuccess);
        }
    }

    function geoSuccess(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
    }



function loadfile() {
  fetch("file.txt")
  .then(res => res.text())
  .then(txt => document.querySelector("#comments").innerHTML = txt);
}

loadfile();

function savefile() {
    fetch("file.txt", {
      method: 'PUT',
      body: document.querySelector("#comments").innerHTML
    });
}
