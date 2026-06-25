const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ================= REGISTER =================

const registerUser = async (req, res) => {

    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {

            return res.status(400).json({

                success:false,
                message:"All fields are required"

            });

        }

        const existingUser = await User.findOne({ email });

        if(existingUser){

            return res.status(400).json({

                success:false,
                message:"User already exists"

            });

        }

        // Encrypt Password

        const hashedPassword = await bcrypt.hash(password,10);

        const user = await User.create({

            name,
            email,
            password:hashedPassword

        });

        return res.status(201).json({

            success:true,
            message:"Registration Successful"

        });

    }

    catch(error){

        return res.status(500).json({

            success:false,
            message:error.message

        });

    }

};

// ================= LOGIN =================

const loginUser = async (req,res)=>{

    try{

        const {email,password}=req.body;

        if(!email || !password){

            return res.status(400).json({

                success:false,
                message:"Email and Password required"

            });

        }

        const user = await User.findOne({email});

        if(!user){

            return res.status(404).json({

                success:false,
                message:"User not found"

            });

        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){

            return res.status(401).json({

                success:false,
                message:"Invalid Password"

            });

        }

        const token = jwt.sign(

            {

                id:user._id

            },

            "mysecretkey",

            {

                expiresIn:"1d"

            }

        );

        return res.status(200).json({

            success:true,

            message:"Login Successful",

            token

        });

    }

    catch(error){

        return res.status(500).json({

            success:false,

            message:error.message

        });

    }

};

module.exports={

    registerUser,

    loginUser

};