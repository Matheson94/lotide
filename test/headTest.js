const head = require("../head");
const assertEqual = require('../assertEqual');


assertEqual(head([1,2], 1));
assertEqual(head([4,5,6,7,8], 4));
assertEqual(head(['hi', 'LHL'], 'hi'));