const express   = require("express");
const app       = express();

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