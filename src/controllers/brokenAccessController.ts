import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
    res.oidc.login({
        returnTo: "/broken-access"
    });
}

const logout = (req: Request, res: Response) => {
    res.oidc.logout({
        returnTo: "/broken-access"
    });
}

const getBrokenAccess = (req: Request, res: Response) => {
    let username : string | undefined;

    if (req.oidc.isAuthenticated()) {
    username = req.oidc.user?.name ?? req.oidc.user?.sub;
    }
    
    if(username === undefined) {
        username = "Guest";
    }

    res.render("broken-access", { username });
}

// done with nicknames, roles are premium on auth0
const getBrokenAccessSafeDash = (req: Request, res: Response) => {
    let isAdmin : boolean | undefined = req.oidc.user?.nickname == 'admin';
    res.render("broken-access-safe-dash", { isAdmin });
}

const getBrokenAccessUnsafeDash = (req: Request, res: Response) => {
    let isAdmin : boolean | undefined = req.oidc.user?.nickname == 'admin';
    res.render("broken-access-unsafe-dash", { isAdmin });
}

const getBrokenAccessSafeAdmin = (req: Request, res: Response) => {
    let isAdmin : boolean | undefined = req.oidc.user?.nickname == 'admin';

    if(!isAdmin) {
        res.redirect("/broken-access/safe/dashboard");
    }

    res.render("broken-access-admin");
}

const getBrokenAccessUnsafeAdmin = (req: Request, res: Response) => {
    res.render("broken-access-admin");
}

const getBrokenAccessUser = (req: Request, res: Response) => {
    res.render("broken-access-user");
}


export { getBrokenAccess, login, logout, getBrokenAccessSafeAdmin, getBrokenAccessUnsafeAdmin, getBrokenAccessUser, getBrokenAccessSafeDash, getBrokenAccessUnsafeDash };