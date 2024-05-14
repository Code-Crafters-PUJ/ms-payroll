"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const payroll_controller_1 = require("../controllers/payroll-controller");
const router = (0, express_1.Router)();
exports.router = router;
/* router.get('/all', [validateSalesOrAdminRole], getAllPayrolls);
router.get('/:id', [validateSalesRole], getPayrollById);
router.post('/create', [validateSalesOrAdminRole], createPayroll);
router.put('/update/:id', [validateSalesOrAdminRole], updatePayroll);
router.delete('/delete/:id', [validateSalesRole], deletePayroll); */
router.get('/all', payroll_controller_1.getAllPayrolls);
router.get('/:id', payroll_controller_1.getPayrollById);
router.post('/create', payroll_controller_1.createPayroll);
router.put('/update/:id', payroll_controller_1.updatePayroll);
router.delete('/delete/:id', payroll_controller_1.deletePayroll);
