import joi from 'joi';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const emailSchema = joi
  .string()
  .trim()
  .empty('')
  .min(4)
  .lowercase()
  .email({ tlds: { allow: false } })
  .messages({
    'string.empty': 'Email is empty.',
    'string.min': 'Password is too short - should be 4 chars minimum.',
    'string.email': 'Email is not valid.'
  });


const passwordSchema = joi
  .string()
  .empty('')
  .min(4)
  .messages({
    'string.empty': 'Password is empty.',
    'string.min': 'Password is too short - should be 4 chars minimum.'
  });

const nameSchema = joi
  .string()
  .trim()
  .empty('')
  .min(1)
  .messages({
    'string.empty': 'Name is empty.',
    'string.min': 'Name is too short.'
  });


const surnameSchema = joi
  .string()
  .trim()
  .empty('')
  .min(1)
  .messages({
    'string.empty': 'Surname is empty.',
    'string.min': 'Surname is too short.'
  });

const phoneSchema = joi
  .string()
  .trim()
  .empty('')
  .min(8)
  .max(15)
  .pattern(phoneRegExp)
  .messages({
    'string.empty': 'Phone is empty.',
    'string.min': 'Phone is too short.',
    'string.max': 'Phone is too long.',
    'string.pattern.base': 'Phone number is not valid.'
  });

const signUp = joi
  .object()
  .keys({
    name: nameSchema,
    surname: surnameSchema,
    email: emailSchema,
    phone: phoneSchema,
    password: passwordSchema,
    passwordConfirmation: joi
      .string()
      .valid(joi.ref('password'))
      .messages({
        'any.only': 'The confirmed password does not match the password'
      })
  })
  .required();

const signIn = joi
  .object()
  .keys({
    email: emailSchema,
    phone: phoneSchema,
    password: passwordSchema.required()
  })
  .or('email', 'phone');

export default {
  signUp,
  signIn
};
