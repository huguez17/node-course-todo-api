const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            validate: {
                //Same as below
                /* validator: (value) => {
                    validator.isEmail(value);
                }, */
                validator: validator.isEmail,
                message: "{VALUE} is not a valid email"
            }
        },
        password: {
            type: String,
            require: true,
            minlength: 6
        },
        tokens: [{
            access: {
                type: String,
                required: true
            },
            token: {
                type: String,
                required: true
            }
        }]
    }
);

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = "auth";
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();    

    //ES 6
    //user.tokens.push({access, token});

    //Similar 1
    //user.tokens.push({access: access, token: token});

    //Similar 2
    user.tokens = user.tokens.concat([{access, token}]);

    return user.save().then(() => {
        return token;
    });
};

UserSchema.methods.toJSON = function () {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

var User = mongoose.model('User', UserSchema);

module.exports = {
    User: User
}