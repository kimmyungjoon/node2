const express = require('express');
const sql = require('mssql');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 토큰 암호화용 비밀키
const SECRET_KEY = 'photomon';

// MSSQL 연결설정
const dbConfig = {
    user: 'start6254',
    password: 'silverred78_',
    server: 'localhost',
    database: 'node',
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
}

// 메인
app.get('/', async(req, res) => {
    res.json({
        resultcode: "0000",
        resultmsg: "성공"
    });
});

// 회원가입
app.post('/register', async (req, res) => {
    const {id, pwd, name} = req.body;
    
    // 필수 입력값 확인
    if (!id || !pwd || !name) {
        return res.status(400).json({
            resultcode:"9400",
            resultmsg:"아이디, 비밀번호, 이름을 모두 입력해주세요."
        });
    }

    try {
        let pool = await sql.connect(dbConfig);

        // 아이디 중복 확인
        
    } catch(err) {
        console.error(err);
        res.status(500).json({
            resultcode: "9500",
            resultmsg:"회원가입 처리 중 오류 발생"
        });
    }
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});