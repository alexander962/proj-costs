const Cost = require('../../db/models/index');

module.exports.getAllCosts = (req, res, next) => {
  Cost.find().then(result => {
    res.send({data: result});
  });
};

module.exports.createNewCost = (req, res, next) => {
  const cost = new Cost(req.body);
  cost.save().then( () => {
    Cost.find().then(result => {
      res.send({data: result});
    });
  });
}

module.exports.changeCost = (req, res, next) => {
  Cost.updateOne({_id: req.body._id}, req.body).then(result => {
    Cost.find().then(result => {
      res.send({data: result});
    });
  })
}

module.exports.deleteCost = (req, res, next) => {
  Cost.deleteOne({_id: req.query.id}).then(result => {
    Cost.find().then(result => {
      res.send({data: result});
    });
  });
}