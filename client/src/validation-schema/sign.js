import joi from 'joi';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const phoneOrEmailRegExp = /(^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$)|(^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$)/;

const emailSchema = joi
  .string()
  .trim()
  .empty('')
  .min(4)
  .lowercase()
  .email({ tlds: { allow: false } })
  .required()
  .messages({
    'string.empty': 'Не указана почта',
    'string.min': 'Почта слишком короткая - минимум 4 символа',
    'string.email': 'Почта указана неверно',
    'any.required': 'Почта обязательное поле'
  });


const passwordSchema = joi
  .string()
  .empty('')
  .min(4)
  .required()
  .messages({
    'string.empty': 'Пароль не указан',
    'string.min': 'Пароль слишком короткий - минимум 4 символа',
    'any.required': 'Пароль обязательное поле'
  });

const nameSchema = joi
  .string()
  .trim()
  .empty('')
  .min(1)
  .required()
  .messages({
    'string.empty': 'Не указанно имя',
    'string.min': 'Имя слишком короткое',
    'any.required': 'Имя обязательное поле'
  });


const surnameSchema = joi
  .string()
  .trim()
  .empty('')
  .min(1)
  .required()
  .messages({
    'string.empty': 'Не указанно отчество',
    'string.min': 'Отчество слишком короткое',
    'any.required': 'Отчество обязательное поле'
  });

const phoneSchema = joi
  .string()
  .trim()
  .empty('')
  .min(10)
  .max(15)
  .pattern(phoneRegExp)
  .required()
  .messages({
    'string.empty': 'Не указан номер телефона',
    'string.min': 'Телефон слишком короткий',
    'string.max': 'Телефон слишком длинный',
    'string.pattern.base': 'Не правильно указан номер телефона',
    'any.required': 'Телфон обязательное поле'
  });

const phoneOrEmail = joi
  .string()
  .trim()
  .empty('')
  .pattern(phoneOrEmailRegExp)
  .required()
  .messages({
    'string.empty': 'Не указана почта или номер телефона',
    'string.pattern.base': 'Не правильная почта или номер телефона',
    'any.required': 'Почта или номер телефона обязательное поле'
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
      .empty('')
      .required()
      .valid(joi.ref('password'))
      .messages({
        'string.empty': 'Подтвержденный пароль обязательное поле',
        'any.only': 'Подтвержденный пароль не соответствует паролю',
        'any.required': 'Подтвержденный пароль обязательное поле'
      })
  });


const signIn = joi
  .object()
  .keys({
    emailOrPhone: phoneOrEmail,
    password: passwordSchema
  });

export default {
  signUp,
  signIn
};
