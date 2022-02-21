import { Request, Response } from 'express';

import { sequelize } from '../instances/mysql';

export const login = async (req: Request, res: Response)=>{
    res.render('pages/login');
};
export const logout = async (req: Request, res: Response)=>{
    res.render('pages/logout');
};