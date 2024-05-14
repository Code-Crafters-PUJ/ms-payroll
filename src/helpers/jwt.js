"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasAdminRole = exports.hasSalesRole = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET || 'secret';
const hasSalesRole = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return true;
        /*  return decoded['role'] === 'VENTAS' */
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error al verificar el token:', error.message);
        }
        else {
            console.error('Error al verificar el token:', error);
        }
        return false;
    }
};
exports.hasSalesRole = hasSalesRole;
const hasAdminRole = (token) => {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        return true;
        /* return decoded['role'] === 'ADMIN' */
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error al verificar el token:', error.message);
        }
        else {
            console.error('Error al verificar el token:', error);
        }
        return false;
    }
};
exports.hasAdminRole = hasAdminRole;
