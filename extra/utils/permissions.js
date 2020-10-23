
const permissions = {
    getUsers: {
    all: ['head-trainer'],
    read : ['trainee', 'trainer'],
    write : ['trainer'],
    delete: []
    },
    
    getUsers2: {
    all: ['CEO'],
    read : ['HR dept', 'IT dept'],
    write : ['IT dept'],
    delete: []
    }
    }
    
    const hasPermissions = (moduleName, role, permissionType) => {
    try{
    if (permissions[moduleName].all.includes(role) || permissions[moduleName][permissionType].includes(role)){
    console.log(`${role} has ${permissionType} permissions`)
    return true
    }
    
    console.log(`${role} does not has ${permissionType} permissions`)
    return false
    }
    catch(err) {
    console.log(`Error: ${moduleName} is not a valid module Name`)
    }
    
    }

    export default hasPermissions;
    // hasPermissions("getUsers2","HR dept", "read")
    // hasPermissions("getUsers2", "CEO", "all")
    // hasPermissions("getAccess", "IT dept", "write")
    // hasPermissions("getUsers", "head-trainer", "write")
    // hasPermissions("getUsers", "trainee", "all")