"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const employee_controller_1 = require("../controllers/employee-controller");
const router = (0, express_1.Router)();
exports.router = router;
/* router.get('/all', [validateSalesOrAdminRole],getAllEmployees);
router.get('/:id', [validateSalesOrAdminRole], getEmployeeById);
router.post('/create', [validateSalesRole], createEmployee);
router.put('/update/:id', [validateSalesRole], updateEmployee);
router.delete('/delete/:id', [validateSalesRole], deleteEmployee); */
router.get('/all', employee_controller_1.getAllEmployees);
router.get('/:id', employee_controller_1.getEmployeeById);
router.post('/create', employee_controller_1.createEmployee);
router.put('/update/:id', employee_controller_1.updateEmployee);
router.delete('/delete/:id', employee_controller_1.deleteEmployee);
