import Joi from 'joi'

const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phone: Joi.string().required(),
    street: Joi.string().required(),
    number: Joi.string().required(),
    zipCode: Joi.string().required(),
    city: Joi.string().required(),
    accountOwner: Joi.string().required(),
    iban: Joi.string().required(),
    paymentDataId: Joi.string().required(),
})

export default userSchema;