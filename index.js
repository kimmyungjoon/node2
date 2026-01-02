const express = require('express');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 메인
app.get('/', async(req, res) => {
    res.json({
        resultcode: "0000",
        resultmsg: "성공"
    });
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});