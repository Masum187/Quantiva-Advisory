// ES Module wrapper for craco.config.cjs
// Required because package.json has "type": "module"
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

// Load the CommonJS config
const config = require(join(__dirname, 'craco.config.cjs'));

export default config;
