const Test = require("../models/testModel");

exports.createTest = (async (req, res, next) => {
    if (!req.body) {
        return next(res.status(400).send({message : "body not found"}));
    }
    const test = await Test.create(req.body);
    res.status(201).send(test);
    // test.save()
    //     .then(() => res.status(201).send(test))
    //     .catch((e) => res.status(400).send(e));
});

exports.getTestById = (async (req, res, next) => {
    let testId = req.params.id;
    const test = await Test.findOne({_id: testId})
    if (!test) {
        return next(res.status(400).send({message : "test not found"}));
     }
    res.status(200).send(test);
});

