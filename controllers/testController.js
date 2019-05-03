exports.test = (req, res, next) => {
    console.log('Keep alive');
    res.send('Keep alive');
};