import  bcscrypjs from 'bcryptjs'

export const hashPassword = (password) => 
    bcscrypjs.hashSync(password)

export const comparePassword = (password, hash) => 
    bcscrypjs.compareSync(password, hash)