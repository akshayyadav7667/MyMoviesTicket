
import User from '../models/User.js'
import bcrypt from 'bcryptjs'


export const registerUser = async (req, res) => {
    const { email, name, phone, password } = req.body;

    try {

        // console.log(name)

        const existingUser= await User.findOne({email});

        if(existingUser)
        {
            return res.status(400).json({message:"User already exits "});
        }

        const hashedPassword= await bcrypt.hash(password,10);

        // console.log(hashedPassword);

        const newUser= new User({
            name,
            email,
            password: hashedPassword,
            phone
        })
        // console.log(newUser)
        await newUser.save();

        


        res.status(201).json({message:'User registered succesfully '});



    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
}



export const  loginUser= async(req,res)=>{
    try {
        const {email,password}=req.body;

        const validUser= await User.findOne({email});

        if(!validUser)
        {
            return res.status(400).json({message:"User not found !"});
        }

        const isMatch= await bcrypt.compare(password,validUser.password);

        // console.log(isMatch)

        if(!isMatch)
        {
            return res.status(400).json({message:"User credentials Invalids !"})
        }

        

        res.status(200).json({message:"User login ",validUser})
    } catch (error) {
        console.log(error);
        res.status(400).json({error:error.message})
    }
}