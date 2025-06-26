import jwt from 'jsonwebtoken'
import User from '../models/User.js';

const userAuth = async  (req, res, next) => {
    // let token;

    try {
        const token = req.headers.authorization.split(" ")[1];
        // console.log(token)
        if(!token)
        {
            return res.json({message:'Not Authorized Login Again'});
        }

        const decodedToken= jwt.verify(token, process.env.JWT_SECRET);

        // console.log(decodedToken);

        req.user= await User.findById(decodedToken.id).select('-password');
        // console.log(req.user);


        next();

    } catch (error) {
        console.log(error);
        res.json({ message: error.message })
    }


}

export { userAuth }