import * as utils from './utils';

console.log(utils.add(2, 3));

(process.env.NODE_ENV !== 'production') && console.log(utils.subtract(6, 3));

