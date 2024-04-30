import {Router} from 'express';
import {
    getAllPayrolls,
    createPayroll,
    updatePayroll,
    deletePayroll,
    getPayrollById
} from '../controllers/payroll-controller';
import { validateSalesOrAdminRole, validateSalesRole } from '../middlewares/validate-role';

const router = Router();

router.get('/all', [validateSalesOrAdminRole], getAllPayrolls);
router.get('/:id', [validateSalesRole], getPayrollById);
router.post('/create', [validateSalesOrAdminRole], createPayroll);
router.put('/update/:id', [validateSalesOrAdminRole], updatePayroll);
router.delete('/delete/:id', [validateSalesRole], deletePayroll);

export {router}