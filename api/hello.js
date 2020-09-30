module.exports = (req, res) => {
  console.log(req)
  res.status(200)
    .send('hello');
};
