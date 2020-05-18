//top nav responsive
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//for the nested li
var toggler = document.getElementsByClassName("caret");
var i;
for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function () {
    this.parentElement.querySelector(".nested").classList.toggle("activee");
    this.classList.toggle("caret-down");
  });
}

// footer functions
function myMovemail() {
  document.getElementById("empty-box").style.display = "block";
  document.getElementById("e-mail").style.display = "block";
  document.getElementById("location").style.display = "none";
  document.getElementById("share-p").style.display = "none";

  var elem = document.getElementById("empty-box");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 65) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
    }
  }
}

function myMovelocation() {
  document.getElementById("empty-box").style.display = "block";
  document.getElementById("e-mail").style.display = "none";
  document.getElementById("location").style.display = "block";
  document.getElementById("share-p").style.display = "none";

  var elem = document.getElementById("empty-box");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 65) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
    }
  }
}

function myMoveshare() {
  // if ($(window).width() > 900) {
  document.getElementById("empty-box").style.display = "block";
  document.getElementById("e-mail").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("share-p").style.display = "block";

  var elem = document.getElementById("empty-box");
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 65) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.bottom = pos + "px";
    }
  }
  //}
}

function mymovedis() {
  document.getElementById("empty-box").style.display = "block";
  document.getElementById("e-mail").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("share-p").style.display = "none";
  document.getElementById("empty-box").style.bottom = "0px";

  var elem = document.getElementById("empty-box");
  var pos = 65;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.bottom = pos + "px";
    }
  }
}

//button cliked location
var timesClicked = 0;
$("#svg-button").click(function () {
  if ($(window).width() > 900) {
    timesClicked++;
    if (timesClicked > 1) {
      mymovedis();
    } else {
      myMovelocation();
    }
    //rest counter
    if (timesClicked >= 2) {
      timesClicked = 0;
    }
  } else {
    timesClicked++;
    myMovelocation2();
    //rest counter
    if (timesClicked >= 1) {
      timesClicked = 0;
    }
  }
});

//button cliked mail
var timesClickedd = 0;
$("#svg-button2").click(function () {
  if ($(window).width() > 900) {
    timesClickedd++;
    if (timesClickedd > 1) {
      mymovedis();
    } else {
      myMovemail();
    }
    //rest counter
    if (timesClickedd >= 2) {
      timesClickedd = 0;
    }
  } else {
    timesClickedd++;
    myMovemail2();
    //rest counter
    if (timesClickedd >= 1) {
      timesClickedd = 0;
    }
  }
});
$("#exit-dropit-button").click(function () {
  mymovedisdis();
});
/*
$("#svg-button2").click(function () {
  myMovemail2();
});
$("#svg-button").click(function () {
  myMovelocation2();
});*/

function myMovemail2() {
  document.getElementById("empty-box").classList.add("myMovemail2");
  document.getElementById("e-mail").style.display = "inline-block";
  document.getElementById("exit-dropit").style.display = "inline-block";
  document.getElementsByClassName("myMovemail2").style.display = "inline-block";
}

function myMovelocation2() {
  document.getElementById("empty-box").classList.add("myMovemail2");
  document.getElementById("location").style.display = "inline-block";
  document.getElementById("exit-dropit").style.display = "inline-block";
  document.getElementsByClassName("myMovemail2").style.display = "inline-block";
}

function mymovedisdis() {
  document.getElementById("empty-box").classList.remove("myMovemail2");
  document.getElementById("e-mail").style.display = "none";
  document.getElementById("location").style.display = "none";
  document.getElementById("share-p").style.display = "none";
}
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */
/*////////////////////////////////// */

sleep(300).then(() => {
  //do stuff
});
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
