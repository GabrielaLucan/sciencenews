

import {
    MANDATORY_FIELD, EXPECTED_MAX_LENGTH, EXPECTED_EMAIL_FIELD,
    EXPECTED_STRING_FIELD, EXPECTED_MIN_LENGTH, INVALID_VALUE
} from './constants.js'
import Validator from 'validatorjs';

const loginRules = {
    username: 'required|string|min:1|max:32|regex:/^[a-zA-Z0-9_-]+$/',
    password: 'required|string|min:4|max:72'
};

const loginCustomMessages = {
    'required.username': MANDATORY_FIELD,
    'required.password': MANDATORY_FIELD,
    'string.username': EXPECTED_STRING_FIELD,
    'string.password': EXPECTED_STRING_FIELD,
    'min.username': EXPECTED_MIN_LENGTH,
    'min.password': EXPECTED_MIN_LENGTH,
    'max.username': EXPECTED_MAX_LENGTH,
    'max.password': EXPECTED_MAX_LENGTH,
    'regex.username': INVALID_VALUE
};

export function validateLogin(req, res, next) {
    const validation = new Validator(req.body, loginRules, loginCustomMessages);

    if (validation.fails()) {
        return next(validation.errors);
    }

    return next();
};

export function validateRegister(req, res, next) {
    const rules = {
        ...loginRules,
        name: 'required|string|min:1|max:72',
        title: 'string',
        email: 'required|email',
        country: 'required|string',
        city: 'required|string',
        address: 'string',
        phone: 'required|string',
        affiliation: 'string'
    };

    const customMessages = {
        ...loginCustomMessages,
        'required.name': MANDATORY_FIELD,
        'required.email': MANDATORY_FIELD,
        'required.country': MANDATORY_FIELD,
        'required.city': MANDATORY_FIELD,
        'required.phone': MANDATORY_FIELD,
        'string.name': EXPECTED_STRING_FIELD,
        'string.country': EXPECTED_STRING_FIELD,
        'string.city': EXPECTED_STRING_FIELD,
        'string.title': EXPECTED_STRING_FIELD,
        'string.phone': EXPECTED_STRING_FIELD,
        'string.affiliation': EXPECTED_STRING_FIELD,
        'email.email': EXPECTED_EMAIL_FIELD,
        'min.name': EXPECTED_MIN_LENGTH,
        'max.name': EXPECTED_MAX_LENGTH
    };

    const validation = new Validator(req.body, rules, customMessages);

    if (validation.fails()) {
        return next(validation.errors);
    }

    return next();
};