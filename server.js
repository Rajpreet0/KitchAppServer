const app = require('./src/app');
const config = require('./src/config');

const port = config.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

