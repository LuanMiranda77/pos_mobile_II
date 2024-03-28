import { createConnection } from 'typeorm';
import * as path from 'path';

const configPath = path.resolve(__dirname, 'ormconfig.json');

createConnection(configPath).then(() => {
    console.log('Connected to the database');
}).catch((error) => {
    console.error('Error connecting to the database:', error);
});