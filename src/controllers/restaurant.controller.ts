import { Request, Response } from 'express';
import { T } from '../libs/types/common';
import MemberService from '../models/Member.service';

const restaurantController: T = {}
restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        // Service Model
        // Logic
        res.send('Home Page');
    } catch (error) {
        console.error("Error, goHome:", error);
    }
}

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        console.log("getLogin");
        res.send('Login Page');
    } catch (error) {
        console.error("Error, getLogin:", error);
    }
}

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send('Signup Page');
    } catch (error) {
        console.error("Error, getSignup:", error);
    }
}

export default restaurantController;