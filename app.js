const express = require('express');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const { validateReq } = require('./middleware/validateReq');
const { logger } = require('./logger');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(bodyParser.json());



// Define routes
app.use('/orders', validateReq, orderRoutes);

//Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start the server
app.listen(PORT, () => {
    logger.info(`Server started at port: ${PORT}`)
});