const express   = require("express");
const cors      = require('cors');
const app       = express();
app.use(cors());

app.get("/getPrimeAssets", (request, response) => {
    return response.json({
        "result": [
            'Coyle', 'Gooseberry', 'Franco',
            'Otto', 'Arora', 'Cici'
        ]
    })
})

app.listen(8081, () => {
})