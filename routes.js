const routes = require('next-routes')();

routes
    .add('/help', '/help')
    .add('/:address', '/will/home')
    .add('/:address/new', '/will/new')
    .add('/:address/role','/will/role')
    .add('/:address/help', '/will/help')
    .add('/:address/selfdestruct','/will/selfdestruct')
    .add('/will/:address', '/will/show')
    .add('/:address/executeWill/:address','/will/executeWill');

module.exports = routes;
