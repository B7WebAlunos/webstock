import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';

export interface ProductInstance extends Model {
    id: number;
    nome: string;
    quantidade: number;
    peso: number;
    unidademedida: string;
    categoria: number;
    imgproduto: string;
    preco: number;
}

export const Product = sequelize.define<ProductInstance>("Product",{
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING
    },
    quantidade: {
        type: DataTypes.INTEGER
    },
    peso: {
        type: DataTypes.INTEGER
    },
    unidademedida: {
        type: DataTypes.STRING
    },
    categoria: {
        type: DataTypes.INTEGER
    },
    imgproduto: {
        type: DataTypes.STRING
    },
    preco: {
        type: DataTypes.INTEGER
    },
}, {
    tableName: 'produtos',
    timestamps: false
});