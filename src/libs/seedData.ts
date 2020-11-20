import UserRepository from '../repositories/user/UserRepository';
import *as bcrypt from 'bcrypt';
import  configuration  from '../config/configuration';

const salt = bcrypt.genSaltSync(10);
const userRepository: UserRepository = new UserRepository();
export async function seed() {
    const res = await userRepository.count();
    if (res === 0) {
        const hash = await bcrypt.hash(configuration.password, 10);
            console.log('data seeding in progress');
            userRepository.create({
                name: 'Head Trainer',
                role: 'head-trainer',
                email: 'head.trainee@successive.tech',
                password: hash
            });
            userRepository.create({
                name: 'Trainee',
                role: 'trainee',
                email: 'trainee@successive.tech',
                password: hash
            });
        }

}
