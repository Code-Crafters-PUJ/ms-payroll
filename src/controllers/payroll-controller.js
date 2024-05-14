"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePayroll = exports.updatePayroll = exports.getPayrollById = exports.getAllPayrolls = exports.createPayroll = void 0;
const mockDataPayroll_1 = require("../mockDataPayroll");
let payrolls = mockDataPayroll_1.mockDataPayroll.payrolls;
function getNextPayrollId() {
    const lastPayroll = payrolls[payrolls.length - 1];
    const lastId = lastPayroll.id;
    const nextIdNumber = parseInt(lastId.slice(2)) + 1;
    return "PR" + nextIdNumber.toString().padStart(5, '0');
}
const createPayroll = (req, res) => {
    const { payrollName, month, year, totalIncome, totalDeductions, totalNet, employees } = req.body;
    const newId = getNextPayrollId();
    const newPayroll = {
        id: newId,
        state: "En espera",
        liquidationType: "Mensual",
        payrollName,
        month,
        year: new Date().getFullYear(),
        employees: Array.isArray(employees) ? employees : [],
        totalIncome,
        totalDeductions,
        totalNet
    };
    payrolls.push(newPayroll);
    res.status(201).send({
        message: 'Payroll successfully created',
        payroll: newPayroll
    });
};
exports.createPayroll = createPayroll;
const getAllPayrolls = (req, res) => {
    res.status(200).send(payrolls);
};
exports.getAllPayrolls = getAllPayrolls;
const getPayrollById = (req, res) => {
    const payroll = payrolls.find(p => p.id === req.params.id);
    if (payroll) {
        res.status(200).send(payroll);
    }
    else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};
exports.getPayrollById = getPayrollById;
const updatePayroll = (req, res) => {
    const payrollId = req.params.id;
    const index = payrolls.findIndex(p => p.id === payrollId);
    if (index !== -1) {
        payrolls[index].state = "Consolidado";
        res.status(200).send({
            message: 'Payroll state updated successfully',
            updatedPayroll: payrolls[index]
        });
    }
    else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};
exports.updatePayroll = updatePayroll;
const deletePayroll = (req, res) => {
    const index = payrolls.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        payrolls.splice(index, 1);
        res.status(200).send({
            message: 'Payroll successfully deleted'
        });
    }
    else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};
exports.deletePayroll = deletePayroll;
