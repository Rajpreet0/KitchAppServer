const { User } = require('../db/models');

exports.getUserByEmailAndPassword = async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({email});
        if(!user) {
            return res.status(404).json({error: 'User not found'});
        }

        const isPasswordValid = await user.password
        if(isPasswordValid != password) {
            return res.status(401).json({error: 'Invaild credentials'});
        }

        res.json(user);
    }catch(error) {
        console.log('Error retrieving user: ', error);
        res.status(500).json({error: 'Something went wrong'});
    }
}