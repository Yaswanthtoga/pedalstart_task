import jwt from 'jsonwebtoken';
import AppError from "../error/index.js";
import logger from "../logs/index.js";

export const verifyToken = (req, res, next) => {
    
    if (!req.headers.cookie) {
        logger.debug("No cookies found in the request");
        return next(new AppError("No cookies found in the request", 401));
    }

    const cookie = req.headers.cookie;
    const token = cookie.split('=')[1];

    if (!token) {
        logger.debug("User not authenticated, token not found in cookies");
        return next(new AppError("Not authenticated", 401));
    }

    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            logger.debug("Token is not valid");
            return next(new AppError("Token is not valid", 403));
        } else {
            req.body.userId = decoded.id;
            next();
        }
    });
}
