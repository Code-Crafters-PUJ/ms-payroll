import {Router} from 'express';
import {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee

  } from '../controllers/employee';
const router = Router();

router.get('/all', getAllEmployees);
router.post('/create', createEmployee);
router.put('/update/:id', updateEmployee);
router.delete('/delete/:id', deleteEmployee);

export {router}