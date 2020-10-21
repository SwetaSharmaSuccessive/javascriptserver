let permissions={
    'getUsers':{
        all:['head-trainer'],
        read:['trainee','trainer'],
        write:['trainer'],
        delete:[],
    },
    'getAccess':{
        all:['head-tainer'],
        read:['trainee'],
        write:['trainer'],
        delete:['head-trainer'],
    }
  
}


   function hasPermission(moduleName, role, permissionType){  
        for(const [key,value] of Object.entries(permissions)){
            if(key===moduleName){
                if(value.all.includes(role)){
                    return true;
                }
                else{
                    for(const [key1,value1] of Object.entries(value)){
                        if(key1===permissionType){
                            if(value1.includes(role)){
                                return true
                            }
                            return false;
                        }
                        else {
                            continue;
                        }
                    }
                }
            }
            else{
                continue;
            }
        }
}
console.log("'getAccess','head-trainer','delete' : ",hasPermission('getAccess','head-trainer','delete'));
console.log("'getAccess','trainer','read' : ",hasPermission('getAccess','trainer','read'));
console.log("'getUsers','trainer','write' : ",hasPermission('getAccess','trainer','write'));
console.log("'getUsers','trainee','delete' : ",hasPermission('getUsers','trainee','delete'));

