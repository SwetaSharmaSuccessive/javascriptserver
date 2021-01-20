export interface IUsers {

    traineeEmail: string;
    reviewerEmail: string;
}

type Users= {
    all: string[];
    read: string[];
    write: string [];
    delete: string[];
};

export interface IPermissions {
    getUsers: Users;
    getNewUser: Users;
}