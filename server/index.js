const express = require('express')
const path = require('path')
const PORT = 9081 || process.env.PORT;

const app = express()

const distPath = path.join(__dirname, '../')

app.get('/', (req, res) => res.sendFile(`${distPath}/index.html`))
app.use('/static', express.static('./dist'))
app.listen(PORT, () => console.log(`App is listening at PORT ${PORT}`))