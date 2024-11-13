const notFound = (req , res) => res.status(404).send('Route Does not exit');

module.exports = notFound;