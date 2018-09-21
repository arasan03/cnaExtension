var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd < 10) {
    dd = '0' + dd
}

if(mm<10) {
    mm = '0' +mm
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);



document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
  });

  window.addEventListener("load", function() {
  console.log("Everything is loaded");
});

document.addEventListener("load", function() {
  console.log("DOM is ready");
});
