// Application configuration.

require('dotenv').config();

let CONFIG = {} // Global over the application

CONFIG.app          = process.env.APP;
CONFIG.port         = process.env.PORT;

CONFIG.db_dialect   = process.env.DB_DIALECT;
CONFIG.db_host      = process.env.DB_HOST;
CONFIG.db_port      = process.env.DB_PORT;
CONFIG.db_name      = process.env.DB_NAME;
CONFIG.db_user      = process.env.DB_USER;
CONFIG.db_password  = process.env.DB_PASS;

module.exports = CONFIG;

