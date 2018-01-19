var express = require("express")
var crypto = require("crypto")

var app = express()
app.put('/message/:ID', function (req, res) {
    res.end(crypto
        .createHash('sha1')
        .update(new Date().toDateString() + req.params.ID)
        .digest('hex')
    )
})
app.listen(process.argv[2])