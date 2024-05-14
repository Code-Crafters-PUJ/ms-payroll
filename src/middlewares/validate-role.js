"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSalesOrAdminRole = exports.validateSalesRole = void 0;
const jwt_1 = require("../helpers/jwt");
const validateSalesRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: 'No autorizado' });
        return;
    }
    if (!(0, jwt_1.hasSalesRole)(authorization)) {
        res
            .status(403)
            .json({ error: 'No tienes permisos para realizar esta operación' });
        return;
    }
    next();
});
exports.validateSalesRole = validateSalesRole;
const validateSalesOrAdminRole = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: 'No autorizado' });
        return;
    }
    if (!((0, jwt_1.hasSalesRole)(authorization) ||
        (0, jwt_1.hasAdminRole)(authorization))) {
        res
            .status(403)
            .json({ error: 'No tienes permisos para realizar esta operación' });
        return;
    }
    next();
});
exports.validateSalesOrAdminRole = validateSalesOrAdminRole;
