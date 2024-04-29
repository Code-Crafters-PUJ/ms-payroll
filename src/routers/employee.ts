import {Router} from 'express';
import {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployeeById
  } from '../controllers/employee-controller';
const router = Router();

router.get('/all', getAllEmployees);
router.get('/:id', getEmployeeById);
router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export {router}