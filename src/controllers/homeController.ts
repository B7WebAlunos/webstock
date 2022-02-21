import { Request, Response } from 'express';

import { sequelize } from '../instances/mysql';

import { Product } from '../models/Product';

export const home = async (req: Request, res: Response)=>{

    let product = await Product.findAll();

    res.render('pages/home', {
        product
    });
};