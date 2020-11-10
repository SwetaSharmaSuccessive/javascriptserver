
import { IPermissions, IUsers } from  './interfaces';
export const permissions: IPermissions = {
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
};

export const users: IUsers[] = [
    {
        traineeEmail: 'trainee.S@successive.tech',
        reviewerEmail: 'avinash.thube@successive.tech'
    },

    {
        traineeEmail: 'trainee2.A@live.in' ,
        reviewerEmail: 'reviewer2.B@successive.tech'
    },

    {
        traineeEmail: 'trainee3.C@gmail.com',
        reviewerEmail: 'reviewer3.D@successive.tech'
    }

];

export const payload = {
    'iss': 'successive technologies',
    'iat': 1604767536,
    'exp': 1636303559,
    'aud': 'peers',
    'sub': 'profile setup',
    'email': undefined,
    'password': undefined
};