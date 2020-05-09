function openMenuItem(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}

function dropdownMenu() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function infoPopUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

var telLinks;

if (window.outerWidth > 768) {
  telLinks = document.querySelectorAll('[href^="tel:"]');

  Array.from(telLinks).forEach(function (link) {
    link.removeAttribute("href");
  });
}

document.getElementById("defaultOpen").click();
