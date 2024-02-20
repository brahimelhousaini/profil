window.onload = function() {
    document.body.style.display = "block"; 
  };
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(function() {
      var introElement = document.querySelector(".intro");
      introElement.classList.add("hidden");
    }, 1000);
  });
  document.getElementById('message').innerHTML=("From Ibrahim Al-Husseini")
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

window.addEventListener('dragstart', function (e) {
  e.preventDefault();
});

window.addEventListener('selectstart', function (e) {
  e.preventDefault();
});

window.addEventListener('copy', function (e) {
  e.preventDefault();
});
window.addEventListener('cut', function (e) {
  e.preventDefault();
});
window.addEventListener('paste', function (e) {
  e.preventDefault();
});
