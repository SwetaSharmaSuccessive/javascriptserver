import { permissions } from '../constant';


const hasPermissions = (moduleName: string, role: string, permissionType: string): boolean => {
    try {
        if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)) {
            console.log(`${role} has ${permissionType} permissions`);
            return true;
        }

        console.log(`${role} does not has ${permissionType} permissions`);
        return false;
    }
    catch (err) {
        console.log(`Error: ${moduleName} is not a valid module Name`);
    }
};

export default hasPermissions;
