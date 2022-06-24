const {Router} = require('express');
const axios = require('axios');

const router = Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
});

router.post('/access_logs', () => {
    const data = JSON.stringify({
        "object": "access_logs"
    });

    var configs = {
        method: 'post',
        url: '192.168.0.129/load_objects.fcgi?session=',
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    axios(configs)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});


module.exports = router;