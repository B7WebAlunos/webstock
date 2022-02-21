import { Request, Response } from 'express';

import { sequelize } from '../instances/mysql';

export const index = async (req: Request, res: Response)=>{
    res.render('pages/landingpage');
};