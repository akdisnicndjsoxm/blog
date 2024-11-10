const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// 使用 body-parser 中间件解析 JSON 数据
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 处理注册请求
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // 将注册信息写入 user_list.txt 文件
    const userInfo = `${username}:${password}\n`;
    fs.appendFile('user_list.txt', userInfo, (err) => {
        if (err) {
            return res.status(500).send('服务器错误');
        }
        res.send({ message: '注册成功' });
    });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`服务器正在运行，监听端口 ${PORT}`);
});
