import {Router} from 'express';
import {
    getAllPayrolls,
    createPayroll,
    updatePayroll,
    deletePayroll,
    getPayrollById
} from '../controllers/payroll-controller';
const router = Router();

router.get('/all', getAllPayrolls);
router.get('/:id', getPayrollById);
router.post('/create', createPayroll);
router.put('/update/:id', updatePayroll);
router.delete('/delete/:id', deletePayroll);

export {router}