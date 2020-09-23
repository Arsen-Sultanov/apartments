export const friendlyValidetionResult = (validationResult) => {
  if (!validationResult.error) return {};

  return validationResult.error.details.reduce((accumulator, value) => {
    if (accumulator[value.path[0]]) {
      return accumulator;
    }
    accumulator[value.path[0]] = value.message;

    return accumulator;
  }, {});
};

export const getFormElementsValue = (form) => {
  const elements = form.elements;
  const formElementKeyValue = {};
  for (var i = 0; i < elements.length - 1; i++) {
    formElementKeyValue[elements[i].name] = elements[i].value;
  }
  return formElementKeyValue;
};

export const objectToSearch = param => {
  let query = '';
  for (const key in param) {
    if (query !== '' && param[key] !== '') {
      query += '&';
    }
    if (param[key] === '') {
      continue;
    }
    query += `${key}=${param[key]}`;
  };
  return query.toLowerCase();
};

export const searchToObject = param => {
  return JSON.parse(`{"${
    decodeURI(param)
      .replace('?', '')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
  }"}`);
};
