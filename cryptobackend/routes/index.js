var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    value:"Server connected"
  });
});

router.get('/getbtc', (req, res) => {
  const currencies = [
    {name:"Bitcoin", value:"BTC"},
    {name:"Etherium", value: "ETH"}
  ]
  res.send(currencies);
})

router.get('/getcurrencies', (req, res) => {
  const currencies = [
    {name:"USD", value:"USD"},
    {name:"Euro", value: "EUR"}
  ]
  res.send(currencies);
})

module.exports = router;
