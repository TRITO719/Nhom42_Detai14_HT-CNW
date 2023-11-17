document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Lấy thông tin từ form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (password !== confirmPassword) {
      alert('Mật khẩu và xác nhận mật khẩu không khớp.');
      return;
    }
  
    // Lưu thông tin vào localStorage
    const user = {
      name: name,
      email: email,
      password: password
    };
  
    localStorage.setItem('user', JSON.stringify(user));
    alert('Đăng ký thành công!');
    window.location.href="/index.html"
    // Có thể redirect hoặc thực hiện các hành động khác sau khi đăng ký thành công
  });
  