import Router from 'koa-router';
import { Register, Login, CheckUserValidate, CheckUser, UpdateGeneral, ConfirmEmail, SendChangePW, ChangePassword, DeleteUser, CheckPassword } from './auth.controller';

const auth = new Router();

auth.get('/checkValidation', CheckUserValidate);
auth.get('/checkUser', CheckUser);
auth.get('/confirmEmail', ConfirmEmail);

auth.post('/register', Register);
auth.post('/login', Login);
auth.post('/sendChangePw', SendChangePW);
auth.post('/checkPw', CheckPassword);

auth.patch('/updateGeneral', UpdateGeneral);
auth.patch('/changePw', ChangePassword);

auth.delete('/deleteUser', DeleteUser);

export default auth;