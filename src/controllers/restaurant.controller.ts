import { Request, Response } from 'express';
import { T } from '../libs/types/common';

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send('Home Page');
    } catch (error) {
        console.error("Error, goHome:", error);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login Page');
    } catch (error) {
        console.error("Error, getLogin:", error);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Signup Page');
    } catch (error) {
        console.error("Error, getSignup:", error);
    }
}

export default restaurantController;