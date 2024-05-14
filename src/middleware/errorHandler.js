// Export an error-handling middleware function
module.exports = (err, req, res, next) => {
    console.log(err.stack);
    // Send a 500 Internal Server Error response with a generic error message
    res.status(500).send('Something broke!');
};