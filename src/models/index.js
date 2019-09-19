import Sequelize from 'sequelize';
import path from 'path';

import { User } from './User';
import { Applicant } from './Applicant';
import { Protector } from './Protector';

const config = require(path.join(__dirname, '..', 'config', 'config.json'))['ipse'];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config  
)

const user = User(sequelize, Sequelize);
const applicant = Applicant(sequelize, Sequelize);
const protector = Protector(sequelize, Sequelize);

export { sequelize, Sequelize, user, applicant, protector };  