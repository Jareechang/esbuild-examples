import * as utils from './utils';
import getConfig from './config';

console.log(utils.add(2, 3));

// Not removed, but unused
const result1 = utils.subtract(5, 3);

// removed because of no annotation and of no reference
const result2 = /* @__PURE__ */ utils.subtract(5, 3);

// keep code even with annotation because of variable reference
const result3 = /* @__PURE__ */ utils.subtract(5, 3);
console.log(result3)

// Alternative syntax. removed due to annotation and no reference
const config = /* #__PURE__ */ getConfig();
