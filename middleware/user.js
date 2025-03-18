const UserModel = require('../Modal/user');
const verifyDetails = async (req, res, next) => {
    const { email, mobileNumber } = req.body;
    try {
        const getUsers = UserModel.findOne({ email });
        if ( email=== getUsers.email || mobileNumber === getUsers.mobileNumber) {
            return res.status(400).send("Email alredy registed");
        }
        next();
    } catch (error) {
        return res.status(500).send("Somthing went wrong..!");
    }
}
module.exports = { verifyDetails };