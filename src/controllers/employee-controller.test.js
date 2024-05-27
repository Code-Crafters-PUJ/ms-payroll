// Import the necessary dependencies
const request = require('supertest');
const app = require('../app');
const EmployeeController = require('../controllers/EmployeeController');

// Create a test case for the createEmployee method
describe('createEmployee', () => {
  it('should create a new employee with valid input', async () => {
    // Mock the database dependency
    const mockCreateEmployee = jest.fn(() => Promise.resolve());
    EmployeeController.createEmployee = mockCreateEmployee;

    // Send a request to the controller
    const response = await request(app)
   .post('/employees')
   .send({
       idCard: '1234567890',
       firstName: 'John',
       lastName: 'Doe',
       dateOfBirth: '1990-01-01',
       address: '123 Main St',
       city: 'Anytown',
       education: {
         degree: 'Bachelor',
         institution: 'University of Anytown',
         startDate: '2008-09-01',
         endDate: '2012-05-15'
       },
       companyId: 1,
       contact: {
         email: 'john.doe@example.com',
         phone: '123-456-7890'
       },
       contract: {
         startDate: '2022-01-01',
         endDate: '2023-12-31'
       },
       gender: 'Male',
       typeCard: 'National ID',
       maritalStatus: 'Single',
       phoneNumber: '123-456-7890'
     });

    // Assert that the response has the correct status code
    expect(response.status).toBe(201);

    // Assert that the createEmployee method was called with the correct arguments
    expect(mockCreateEmployee).toHaveBeenCalledWith({
       idCard: '1234567890',
       firstName: 'John',
       lastName: 'Doe',
       dateOfBirth: '1990-01-01',
       address: '123 Main St',
       city: 'Anytown',
       education: {
         degree: 'Bachelor',
         institution: 'University of Anytown',
         startDate: '2008-09-01',
         endDate: '2012-05-15'
       },
       companyId: 1,
       contact: {
         email: 'john.doe@example.com',
         phone: '123-456-7890'
       },
       contract: {
         startDate: '2022-01-01',
         endDate: '2023-12-31'
       },
       gender: 'Male',
       typeCard: 'National ID',
       maritalStatus: 'Single',
       phoneNumber: '123-456-7890'
     });
  });

  it('should return an error message with invalid input', async () => {
    // Mock the database dependency
    const mockCreateEmployee = jest.fn(() => Promise.reject(new Error('Invalid input')));
    EmployeeController.createEmployee = mockCreateEmployee;

    // Send a request to the controller
    const response = await request(app)
   .post('/employees')
   .send({
       idCard: '',
       firstName: 'John',
       lastName: 'Doe',
       dateOfBirth: '1990-01-01',
       address: '123 Main St',
       city: 'Anytown',
       education: {
         degree: 'Bachelor',
         institution: 'University of Anytown',
         startDate: '2008-09-01',
         endDate: '2012-05-15'
       },
       companyId: 