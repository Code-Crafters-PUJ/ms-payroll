import { Request, Response } from 'express';
import { mockdata } from '../mockdata';


export const createEmployee = (req: Request, res: Response): void => {
    const { idCard, firstName, lastName, dateOfBirth, address, city, education, companyId, contact, contract } = req.body;

    const newId = mockdata.employees[mockdata.employees.length - 1].id + 1;

    const newEmpleado = {
        id: newId,
        idCard,
        firstName,
        lastName,
        dateOfBirth: new Date(dateOfBirth),
        address,
        city,
        education,
        companyId,
        contact,
        contract
    };

    mockdata.employees.push(newEmpleado);

    res.status(201).send({
        message: 'Employee successfully created',
        empleado: newEmpleado
    });
};


export const getAllEmployees = (req: Request, res: Response): void => {
  res.status(200).send(mockdata.employees);
};


export const getEmployeeById = (req: Request, res: Response): void => {
    const id = parseInt(req.params.id);

    const empleado = mockdata.employees.find(emp => emp.id === id);

    if (!empleado) {
        res.status(404).send({ message: 'Empleado no encontrado' });
        return;
    }
    res.status(200).send(empleado);
};


export const updateEmployee = (req: Request, res: Response): void => {

  const id = parseInt(req.params.id);
  const index = mockdata.employees.findIndex(emp => emp.id === id);

  if (index === -1) {
      res.status(404).send({ message: 'Employee not found' });
      return;
  }

  const empleado = mockdata.employees[index];
  empleado.idCard = req.body.idCard ?? empleado.idCard;
  empleado.firstName = req.body.firstName ?? empleado.firstName;
  empleado.lastName = req.body.lastName ?? empleado.lastName;
  empleado.dateOfBirth = req.body.dateOfBirth ? new Date(req.body.dateOfBirth) : empleado.dateOfBirth;
  empleado.address = req.body.address ?? empleado.address;
  empleado.city = req.body.city ?? empleado.city;
  empleado.education = req.body.education ?? empleado.education;
  empleado.companyId = req.body.companyId ?? empleado.companyId;
  empleado.contact = req.body.contact ?? empleado.contact;
  empleado.contract = req.body.contract ?? empleado.contract;


  res.status(200).send({
      message: 'Successfully updated employee',
      empleado: empleado
  });
};

export const deleteEmployee = (req: Request, res: Response): void => {

  const id = parseInt(req.params.id);

  const index = mockdata.employees.findIndex(emp => emp.id === id);

  if (index === -1) {
      res.status(404).send({ message: 'Employee not found' });
      return;
  }

  mockdata.employees.splice(index, 1);
  res.status(200).send({
      message: 'Employee successfully deleted'
  });
};