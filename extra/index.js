import  {diamond, equilateral} from './pattern';
import { Permissions,validation} from './utils'

diamond()
equilateral()
console.log(Permissions("getUsers2","HR dept", "read"));
//hasPermissions("getUsers2","HR dept", "read");
validation()
