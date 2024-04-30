import { Request, Response } from 'express';
import { mockDataPayroll } from '../mockDataPayroll';

let payrolls = mockDataPayroll.payrolls;

function getNextPayrollId() {
    const lastPayroll = payrolls[payrolls.length - 1];
    const lastId = lastPayroll.id;
    const nextIdNumber = parseInt(lastId.slice(2)) + 1;
    return "PR" + nextIdNumber.toString().padStart(5, '0');
}

export const createPayroll = (req: Request, res: Response): void => {
    const { payrollName, month, year, totalIncome, totalDeductions, totalNet, employees } = req.body;
    const newId = getNextPayrollId();

    const newPayroll = {
        id: newId,
        state: "active",
        liquidationType: "monthly",
        payrollName,
        month,
        year,
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

export const getAllPayrolls = (req: Request, res: Response): void => {
    res.status(200).send(payrolls);
};

export const getPayrollById = (req: Request, res: Response): void => {
    const payroll = payrolls.find(p => p.id === req.params.id);
    if (payroll) {
        res.status(200).send(payroll);
    } else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};

export const updatePayroll = (req: Request, res: Response): void => {
    const payroll = payrolls.find(p => p.id === req.params.id);
    if (payroll) {
        const { payrollName, month, year, totalIncome, totalDeductions, totalNet } = req.body;

        payroll.payrollName = payrollName ?? payroll.payrollName;
        payroll.month = month ?? payroll.month;
        payroll.year = year ?? payroll.year;
        payroll.totalIncome = totalIncome ?? payroll.totalIncome;
        payroll.totalDeductions = totalDeductions ?? payroll.totalDeductions;
        payroll.totalNet = totalNet ?? payroll.totalNet;

        res.status(200).send({
            message: 'Payroll successfully updated',
            payroll
        });
    } else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};

export const consolidatePayroll = (req: Request, res: Response): void => {
    const payroll = payrolls.find(p => p.id === req.params.id);
    if (payroll) {
        if (payroll.state === "active") {
            payroll.state = "consolidated";
            res.status(200).send({
                message: 'Payroll successfully consolidated',
                payroll
            });
        } else {
            res.status(400).send({ message: 'Payroll is not active and cannot be consolidated' });
        }
    } else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};


export const deletePayroll = (req: Request, res: Response): void => {
    const index = payrolls.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
        payrolls.splice(index, 1);
        res.status(200).send({
            message: 'Payroll successfully deleted'
        });
    } else {
        res.status(404).send({ message: 'Payroll not found' });
    }
};
