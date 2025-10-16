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
        // send /json /redirect /end /render  - type of respond
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

restaurantController.processLogin = (req: Request, res: Response) => {
    try {
        console.log("processLogin")
        res.send("processLogin Done")

    } catch (err) {
        console.log("Error, processLogin", err);
    }
};

restaurantController.processSignup = (req: Request, res: Response) => {
    try {
        console.log("processSignup")
        res.send("processSignup Done");
    } catch (err) {
        console.log("Error, processSignup:", err);
    }
};


export default restaurantController;