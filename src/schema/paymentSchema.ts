
import Joi from 'joi'

const paymentSchema = Joi.object({
    customerId: Joi.number(),
    iban: Joi.string(),
    owner: Joi.string()
})

export default paymentSchema;