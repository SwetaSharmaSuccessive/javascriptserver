export interface IUsers {

    traineeEmail: string;
    reviewerEmail: string;
}

type Users2= {
    all: string[];
    read: string[];
    write: string [];
    delete: string[];
};

export interface IPermissions {
    getUsers: Users2;
    getUsers2: Users2;
}