import { Request, Response } from "express";
import { Employee } from "../interfaces/employee-interface";
import { mockDataEmployee } from "../mockDataEmployee";

export const createEmployee = (req: Request, res: Response) => {
  const {
    idCard,
    firstName,
    lastName,
    dateOfBirth,
    address,
    city,
    education,
    companyId,
    contact,
    contract,
    gender,
    typeCard,
    maritalStatus,
    phoneNumber,
  } = req.body as Employee;

  if (
    !idCard ||
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !address ||
    !city ||
    !education ||
    !companyId ||
    !contact ||
    !contract ||
    !gender ||
    !typeCard ||
    !maritalStatus ||
    !phoneNumber
  ) {
    return res.status(400).send({
      message: "Error: Data is incomplete or incorrect",
    });
  }

  const newId =
    mockDataEmployee.employees[mockDataEmployee.employees.length - 1].id + 1;

  const newEmpleado: Employee = {
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
    education,
    companyId,
    contact,
    contract,
  };

  mockDataEmployee.employees.push(newEmpleado);

  res.status(201).send({
    message: "Employee successfully created",
    empleado: newEmpleado,
  });
};

export const getAllEmployees = (req: Request, res: Response): void => {
  res.status(200).send(mockDataEmployee.employees);
};

export const getEmployeeById = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);

  const empleado = mockDataEmployee.employees.find((emp) => emp.id === id);

  if (!empleado) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }
  res.status(200).send(empleado);
};

export const updateEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);
  const index = mockDataEmployee.employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }

  const empleado = mockDataEmployee.employees[index];
  empleado.idCard = req.body.idCard ?? empleado.idCard;
  empleado.firstName = req.body.firstName ?? empleado.firstName;
  empleado.lastName = req.body.lastName ?? empleado.lastName;
  empleado.dateOfBirth = req.body.dateOfBirth
    ? new Date(req.body.dateOfBirth)
    : empleado.dateOfBirth;
  empleado.typeCard = req.body.typeCard ?? empleado.typeCard;
  empleado.address = req.body.address ?? empleado.address;
  empleado.city = req.body.city ?? empleado.city;
  empleado.maritalStatus = req.body.maritalStatus ?? empleado.maritalStatus;
  empleado.phoneNumber = req.body.phoneNumber ?? empleado.phoneNumber;
  empleado.education = req.body.education ?? empleado.education;
  empleado.companyId = req.body.companyId ?? empleado.companyId;
  empleado.contact = req.body.contact ?? empleado.contact;
  empleado.contract = req.body.contract ?? empleado.contract;

  res.status(200).send({
    message: "Successfully updated employee",
    empleado: empleado,
  });
};

export const deleteEmployee = (req: Request, res: Response): void => {
  const id = parseInt(req.params.id);

  const index = mockDataEmployee.employees.findIndex((emp) => emp.id === id);

  if (index === -1) {
    res.status(404).send({ message: "Employee not found" });
    return;
  }

  mockDataEmployee.employees.splice(index, 1);
  res.status(200).send({
    message: "Employee successfully deleted",
  });
};
