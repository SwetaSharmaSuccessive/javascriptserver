import UserRepository from '../repositories/user/UserRepository';
import *as bcrypt from 'bcrypt';
import  configuration  from '../config/configuration';

const userRepository: UserRepository = new UserRepository();
export async function seed() {
    const res = await userRepository.count();
    if (res === 0) {
        console.log('data seeding in progress');
        userRepository.create({
            name: 'Head Trainer',
            role: 'head-trainer',
            email: 'head.trainee@successive.tech',
            password: configuration.password
        });
        userRepository.create({
            name: 'Trainee',
            role: 'trainee',
            email: 'trainee@successive.tech',
            password: configuration.password
        });
    }
}
