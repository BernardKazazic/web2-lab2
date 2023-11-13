import { Request, Response } from "express";

const unsafeGetXss = (req: Request, res: Response) => {
    res.render("xss-unsafe", { message: req.query.message });
}

const unsafePostXss = (req: Request, res: Response) => {
    res.render("xss-unsafe", { message: req.body.message });
}

const safeGetXss = (req: Request, res: Response) => {
    res.render("xss-safe", { message: req.query.message });
}

const safePostXss = (req: Request, res: Response) => {
    res.render("xss-safe", { message: req.body.message });
}

export { unsafeGetXss, unsafePostXss, safeGetXss, safePostXss };