const UserModel = require('../Modal/user');
const bcrypt = require('bcrypt');
const { verifyDetails } = require('../middleware/user');
const jwt = require('jsonwebtoken');
const secretkey = "GanuBhai";
// const verifyUser = async (req, res, next) => {
//     //  await UserModel.find();
//     const { age } = req.body;
//     console.log("my age", age);
//   try{

//     if( age <= 20){
//         res.send("Your are not able to access this service");
//     }
//     res.send("Congratulation you are log in..!");

//   }catch(error){
//     res.status(404).send(error.message);
//   }
//     next();
// }

const getUsers = async (req, res) => {
    try {
        let getUsers = await UserModel.find();
        return res.status(200).json(getUsers);

    } catch (error) {
        return res.status(404).send(error.message);
    }
}

const addUsers = async (req, res) => {  
    const { userName, email, mobileNumber, password } = req.body;
    try {
        // Verify user added fields or not 
        if (!userName || !email || !mobileNumber || !password) {
            return res.status(400).send("All fields are required..!");
        }
        // convert Normal Password into encryption
        const demoSalt = 10;

        const hashpassword = await bcrypt.hash(password, demoSalt);

        // Create user
        const addUser = await UserModel.create({ userName, email, mobileNumber, password: hashpassword })
        jwt.sign(addUser,  secretkey, {expiresIn: '500s'}, (error, token)=>{
            console.log(token)
        })
        return res.status(200).json(addUser)

        // handle error
    } catch (error) {
        return res.status(404).send(error.message);
    }
}


const updateUsers = async (req, res) => {
    res.send("This is function for update data..!")

}
const deleteUsers = async (req, res) => {
    res.send("This is function for delete data..!")

}


module.exports = { getUsers, addUsers, updateUsers, deleteUsers };