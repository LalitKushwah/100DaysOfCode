const userService = require('../service/user')

module.exports.register = async (req, res) => {
    const body = req.body;
    try {
        const response = await userService.registerUser(body);
        res.status(response.status).send(response);
    } catch (ex) {
        res.status(500).send('Error while creating user:controller ' + ex);
    }
}
module.exports.login = async (req, res) => {
    const userId = req.query.id;
    const password = req.query.password;
    let response = {};
    if (!userId || !password) {
        return res.status(400).send({ message: 'Either User Id or password missing' });
    } else {
        try {
            response = await userService.login(userId, password);
            res.status(response.status).send(response);
        } catch (error) {
            res.status(response.status).send(response);
        }
    }
}
module.exports.users = async (_req, res) => {
    try {
        const response = await userService.users();
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}
module.exports.user = async (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        res.status(400).send({ message: 'Id is must' });
    }
    try {
        const response = await userService.user(userId);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}
module.exports.deleteUser = async (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        res.status(400).send({ message: 'Id is must' });
    }
    try {
        const response = await userService.deleteUser(userId);
        res.status(response.status).send(response);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}