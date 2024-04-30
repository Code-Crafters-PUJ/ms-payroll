import {Router} from 'express';
import {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
  } from '../controllers/employee-controller';
  import { validateSalesOrAdminRole, validateSalesRole } from '../middlewares/validate-role';

const router = Router();

/* router.get('/all', [validateSalesOrAdminRole],getAllEmployees);
router.get('/:id', [validateSalesOrAdminRole], getEmployeeById);
router.post('/create', [validateSalesRole], createEmployee);
router.put('/update/:id', [validateSalesRole], updateEmployee);
router.delete('/delete/:id', [validateSalesRole], deleteEmployee); */

router.get('/all',getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id',deleteEmployee);

export {router}