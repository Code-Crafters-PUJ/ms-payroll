"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEmployee = exports.updateEmployee = exports.getEmployeeById = exports.getAllEmployees = exports.createEmployee = void 0;
const mockDataEmployee_1 = require("../mockDataEmployee");
const createEmployee = (req, res) => {
    const { idCard, firstName, lastName, dateOfBirth, address, city, education, companyId, contact, contract, gender, typeCard, maritalStatus, phoneNumber, } = req.body;
    if (!idCard ||
        !firstName ||
        !lastName ||
        !dateOfBirth ||
        !address ||
        !city ||
        !education || !education.endDate ||
        !companyId ||
        !contact ||
        !contract || contract.some(c => !c.startDate || !c.endDate) ||
        !gender ||
        !typeCard ||
        !maritalStatus ||
        !phoneNumber) {
        return res.status(400).send({
            message: "Error: Data is incomplete or incorrect",
        });
    }
    const existingEmployee = mockDataEmployee_1.mockDataEmployee.employees.find((employee) => employee.idCard === idCard);
    if (existingEmployee) {
        return res.status(409).send({
            message: "Error: Employee already exists",
        });
    }
    const newId = mockDataEmployee_1.mockDataEmployee.employees.length > 0 ? mockDataEmployee_1.mockDataEmployee.employees[mockDataEmployee_1.mockDataEmployee.employees.length - 1].id + 1 : 1;
    const newEmployee = {
        id: newId,
        idCard,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        gender,
        typeCard,
        address,
        city,
        maritalStatus,
        phoneNumber,
        education: Object.assign(Object.assign({}, education), { endDate: new Date(education.endDate) }),
        companyId,
        contact,
        contract: contract.map(cont => (Object.assign(Object.assign({}, cont), { startDate: new Date(cont.startDate), endDate: new Date(cont.endDate) }))),
    };
    mockDataEmployee_1.mockDataEmployee.employees.push(newEmployee);
    res.status(201).send({
        message: "Employee successfully created",
    });
};
exports.createEmployee = createEmployee;
const getAllEmployees = (req, res) => {
    res.status(200).send(mockDataEmployee_1.mockDataEmployee.employees);
};
exports.getAllEmployees = getAllEmployees;
const getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const empleado = mockDataEmployee_1.mockDataEmployee.employees.find((emp) => emp.id === id);
    if (!empleado) {
        res.status(404).send({ message: "Employee not found" });
        return;
    }
    res.status(200).send(empleado);
};
exports.getEmployeeById = getEmployeeById;
const updateEmployee = (req, res) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    const id = parseInt(req.params.id);
    const index = mockDataEmployee_1.mockDataEmployee.employees.findIndex((emp) => emp.id === id);
    if (index === -1) {
        res.status(404).send({ message: "Employee not found" });
        return;
    }
    const empleado = mockDataEmployee_1.mockDataEmployee.employees[index];
    empleado.idCard = (_a = req.body.idCard) !== null && _a !== void 0 ? _a : empleado.idCard;
    empleado.firstName = (_b = req.body.firstName) !== null && _b !== void 0 ? _b : empleado.firstName;
    empleado.lastName = (_c = req.body.lastName) !== null && _c !== void 0 ? _c : empleado.lastName;
    empleado.dateOfBirth = req.body.dateOfBirth ? new Date(req.body.dateOfBirth) : empleado.dateOfBirth;
    empleado.typeCard = (_d = req.body.typeCard) !== null && _d !== void 0 ? _d : empleado.typeCard;
    empleado.address = (_e = req.body.address) !== null && _e !== void 0 ? _e : empleado.address;
    empleado.city = (_f = req.body.city) !== null && _f !== void 0 ? _f : empleado.city;
    empleado.maritalStatus = (_g = req.body.maritalStatus) !== null && _g !== void 0 ? _g : empleado.maritalStatus;
    empleado.phoneNumber = (_h = req.body.phoneNumber) !== null && _h !== void 0 ? _h : empleado.phoneNumber;
    empleado.education = (_j = req.body.education) !== null && _j !== void 0 ? _j : empleado.education;
    empleado.companyId = (_k = req.body.companyId) !== null && _k !== void 0 ? _k : empleado.companyId;
    empleado.contact = (_l = req.body.contact) !== null && _l !== void 0 ? _l : empleado.contact;
    empleado.contract = (_m = req.body.contract) !== null && _m !== void 0 ? _m : empleado.contract;
    res.status(200).send({
        message: "Successfully updated employee",
        empleado: empleado,
    });
};
exports.updateEmployee = updateEmployee;
const deleteEmployee = (req, res) => {
    const id = parseInt(req.params.id);
    const index = mockDataEmployee_1.mockDataEmployee.employees.findIndex((emp) => emp.id === id);
    if (index === -1) {
        res.status(404).send({ message: "Employee not found" });
        return;
    }
    mockDataEmployee_1.mockDataEmployee.employees.splice(index, 1);
    res.status(200).send({
        message: "Employee successfully deleted",
    });
};
exports.deleteEmployee = deleteEmployee;
