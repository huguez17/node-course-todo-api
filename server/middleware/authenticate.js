var {User} = require('./../models/user');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {

        //Return authentication is required
        if (!user){            
            res.status(401).send(e);    
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        //Return authentication is required
        res.status(401).send(e);
    });
};

module.exports = {authenticate};
