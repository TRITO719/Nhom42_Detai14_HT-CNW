document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Xử lý thông tin đặt hàng ở đây (có thể gửi thông tin điều này đến server hoặc xử lý dưới dạng mô phỏng)
    
    // Hiển thị thông báo đăng ký thành công
    alert('Đặt hàng thành công!');

    // Chuyển hướng về trang index.html
    window.location.href = '../index.html';
});