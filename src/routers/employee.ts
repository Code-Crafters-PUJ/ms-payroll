import {Router, Request, Response} from 'express';
import {
    getAllEmployees,
    createEmployee,
    updateEmployee

  } from '../controllers/empleados';
const router = Router();

router.get('/all', getAllEmployees);
router.post('/', createEmployee);
router.put('/update/:id', updateEmployee);

export {router}