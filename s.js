// 用户数据存储（简单示例，实际应用中应使用后端数据库）
const users = [];

// 登录表单提交处理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert("登录成功！");
    } else {
        alert("用户名或密码错误！");
    }
});

// 注册按钮点击处理
document.getElementById('registerBtn').addEventListener('click', function() {
    document.getElementById('registerContainer').style.display = 'block';
});

// 注册表单提交处理
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // 检查用户名是否已存在
    if (users.find(u => u.username === newUsername)) {
        alert("用户名已存在，请选择其他用户名。");
        return;
    }

    // 保存用户信息
    users.push({ username: newUsername, password: newPassword });
    alert("注册成功！请返回登录。");

    // 清空表单并隐藏注册表单
    document.getElementById('registerForm').reset();
    document.getElementById('registerContainer').style.display = 'none';
});
