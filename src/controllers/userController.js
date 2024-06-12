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

exports.registerUser = async (req, res) => {
    const {email,password, username} = req.body;

    try {
        const exisitngUser = await User.findOne({email});

        if(exisitngUser) {
            return res.status(400).json({error: 'Email already in use'});
        }

        const newUser = new User({
            email,
            password,
            username
        });

        const savedUser = await newUser.save();

        res.status(201).json(savedUser);

    }catch(error) {
        console.log('Error registering user: ', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}