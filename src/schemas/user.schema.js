import joi from "joi"

export const userSchema = joi.object({
    name:joi.string().required().min(3).trim(),
    email:joi.string().email().required() ,
    password: joi.string().required().min(3)
})