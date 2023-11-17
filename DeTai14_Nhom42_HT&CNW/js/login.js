// Kiểm tra xem đã có thông tin tài khoản trong localStorage hay chưa
function hasAccount() {
    const savedUser = localStorage.getItem('user');
    return savedUser !== null;
  }
  
  // Kiểm tra và chuyển hướng sang trang đăng ký nếu chưa có tài khoản
  function redirectToSignup() {
    window.location.href = 'signup.html';
  }
  
  // Xử lý đăng nhập
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Lấy thông tin từ form đăng nhập
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
  
    // Kiểm tra xem thông tin đăng nhập có trùng khớp với thông tin đã đăng ký trong localStorage hay không
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser && savedUser.email === loginEmail && savedUser.password === loginPassword) {
      alert('Đăng nhập thành công!');
      window.location.href="/index.html"
      // Có thể thực hiện các hành động sau khi đăng nhập thành công
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.');
    }
  });
  
  // Thêm sự kiện cho liên kết tạo tài khoản mới
  document.getElementById('createAccountLink').addEventListener('click', function(event) {
    event.preventDefault();
  
  });
  
  // Kiểm tra và chuyển hướng người dùng đến trang đăng ký nếu chưa có tài khoản
  
  