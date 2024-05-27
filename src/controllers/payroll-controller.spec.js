// Import the necessary dependencies
const request = require('supertest');
const app = require('../app');
const PayrollController = require('../controllers/PayrollController');

// Create a test case for the createPayroll method
describe('createPayroll', () => {
  it('should create a new payroll with valid input', async () => {
    const mockCreatePayroll = jest.fn(() => Promise.resolve());
    PayrollController.createPayroll = mockCreatePayroll;

    // Send a request to the controller
    const response = await request(app)
    .post('/payrolls')
    .send({
       payrollName: 'Test Payroll',
       month: 1,
       year: 2023,
       totalIncome: 1000,
       totalDeductions: 200,
       totalNet: 800,
       employees: []
     });

    // Assert that the response has the correct status code
    expect(response.status).toBe(201);

    // Assert that the createPayroll method was called with the correct arguments
    expect(mockCreatePayroll).toHaveBeenCalledWith({
      payrollName: 'Test Payroll',
      month: 1,
      year: 2023,
      totalIncome: 1000,
      totalDeductions: 200,
      totalNet: 800,
      employees: []
    });
  });

  it('should return an error message with invalid input', async () => {
    const mockCreatePayroll = jest.fn(() => Promise.reject(new Error('Invalid input')));
    PayrollController.createPayroll = mockCreatePayroll;

    // Send a request to the controller
    const response = await request(app)
    .post('/payrolls')
    .send({
       payrollName: '',
       month: 1,
       year: 2023,
       totalIncome: 1000,
       totalDeductions: 200,
       totalNet: 800,
       employees: []
     });

    // Assert that the response has the correct status code
    expect(response.status).toBe(400);

    // Assert that the error message is correct
    expect(response.body.message).toBe('Invalid input');
  });
});