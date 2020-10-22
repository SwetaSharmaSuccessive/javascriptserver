import {validation} from './validation'

export const validateEmail = (email) => {
    const regex = /\w+[.]\w+@successive.tech$/i;
    return regex.test(email)
}