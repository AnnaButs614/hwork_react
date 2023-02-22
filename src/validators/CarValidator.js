import Joi from "joi";

const carValidator = Joi.object ({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().
        messages ({'string.pattern.base':'Тільки букви від 1 до 20 символів'}),
    price:Joi.number().min(1).max(1000000).required(). messages({'number.min':'min 1'}),
    year:Joi.number().min(1900).max(new Date().getFullYear()).required()
})
export {carValidator}