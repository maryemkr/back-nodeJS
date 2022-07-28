const router = require('express').Router();
const userController = require('../controllers/userController');

router.post('/' ,userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id',userController.deleteUser);
router.get('/adherents', userController.getAdherent);
router.get('/admins', userController.getAdmin);
router.get('/:id', userController.userInfo);
router.get('/' ,userController.getAllUsers);

module.exports = router;