var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
// Lấy phần tử cần thao tác
const valueElement = document.querySelector('.number-box .value');
const addButton = document.querySelector('.number-box .add');
const subtractButton = document.querySelector('.number-box .subtract');

// Thiết lập giá trị ban đầu
let value = 0;
valueElement.textContent = value;

// Xử lý sự kiện khi nhấn nút cộng
addButton.addEventListener('click', function() {
  value++;
  valueElement.textContent = value;
});

// Xử lý sự kiện khi nhấn nút trừ
subtractButton.addEventListener('click', function() {
  if (value > 0) {
    value--;
    valueElement.textContent = value;
  }
});
