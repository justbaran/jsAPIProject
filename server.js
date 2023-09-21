const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080; // Yeni port numarası

app.use(bodyParser.json());

// Kök dizini için GET yönlendirmesi ekle ve "index.html" dosyasını sun
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // "public" klasörü içindeki "index.html" dosyasının yolu
});

// POST isteği ile gelen giriş verilerini işle
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Burada kullanıcı giriş verilerini doğrula

    // Örnek olarak, basit bir kontrol:
    if (email === 'kullanici@email.com' && password === 'parola123') {
        res.json({ message: 'Giriş Başarılı' });
    } else {
        res.status(401).json({ message: 'Giriş Başarısız' });
    }
});

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda çalışıyor.`);
});
