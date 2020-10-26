import  { DiamondPattern, EquilateralTriangle } from './pattern';
import { hasPermissions, validateUsers } from './utils';
import { users } from './constant';

console.log('print a diamond pattern with rows 5');
DiamondPattern(5);
console.log('print a equilateral triangle with rows 5');
EquilateralTriangle(5);
hasPermissions('getUsers2', 'HR dept', 'read');
validateUsers(users);
