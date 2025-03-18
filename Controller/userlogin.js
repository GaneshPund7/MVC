const UserModel = require('../Modal/user');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
const verifyUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const getLoginDetails = await UserModel.findOne({ email });
        const myPassword = getLoginDetails.password;

        const decryptPassword = await bcrypt.compare(password, myPassword);

        if (!decryptPassword) {
            return res.status(400).send("Login faild, password is inccrect..!");
        }

        
        return res.status(200).json("You have successfully login..!");

    } catch (error) {
        return res.status(404).send("Login faild, Email is inccrect..!");
    }
}
module.exports = { verifyUser }