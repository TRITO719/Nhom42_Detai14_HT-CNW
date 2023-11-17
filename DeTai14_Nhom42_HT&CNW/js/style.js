
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}
//-So chuyen trang
document.getElementById('show-search').addEventListener('click', function() {
  document.getElementById('search-box').classList.add('active');
  document.getElementById('show-search').classList.add('hidden');
});

document.getElementById('hide-search').addEventListener('click', function() {
  document.getElementById('search-box').classList.remove('active');
  document.getElementById('show-search').classList.remove('hidden');
});

