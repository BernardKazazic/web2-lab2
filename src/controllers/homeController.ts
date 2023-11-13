import { Request, Response } from "express";


const home = (req: Request, res: Response) => {
    res.render("home");
}

export default home;