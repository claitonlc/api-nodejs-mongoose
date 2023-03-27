const jwt = require('jsonwebtoken');
const Users = require('../Routes/users');
const config = require('../config/config');

const auth = (req, res, next) => {
    const token_header = req.headers.auth;
    if(!token_header) return res.status(401).send( {error: 'Autenticação Recusada!'});

    jwt.verify(token_header, config.jwt_pass, (err, decoded) => {
        if(err) return res.status(401).send({ error: 'Token invalido!'});
        res.locals.auth_data = decoded;
        return next();
    })
}

module.exports = auth;