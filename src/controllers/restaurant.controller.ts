import { Request, Response } from 'express';
import { T } from '../libs/types/common';
import MemberService from '../models/Member.service';
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const memberService = new MemberService();

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

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.send('Signup Page');
    } catch (error) {
        console.error("Error, getSignup:", error);
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

restaurantController.processSignup = async (req: Request, res: Response) => {
    try {
        console.log("processSignup")

        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        // TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error, processSignup:", err);
        res.send(err);
    }
};

restaurantController.processLogin = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");

        const input: LoginInput = req.body;
        const result = await memberService.processLogin(input);
        // TODO: SESSIONS AUTHENTICATION

        res.send(result);
    } catch (err) {
        console.log("Error, processLogin", err);
        res.send(err);
    }
};

export default restaurantController;