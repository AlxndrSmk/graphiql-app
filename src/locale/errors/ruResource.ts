const ruErrors = {
  incorrect: 'Неверный логин или пароль',
  alreadyExists: 'Данный аккаунт уже зарегистрирован',
  emailRequired: 'Введите адрес электронной почты',
  emailValid:
    'Введите действительный адрес электронной почты (например, user@example.com)',
  emailDomain: 'Адрес электронной почты должен содержать доменное имя',
  passwordRequired: 'Введите пароль',
  passwordLength: 'Пароль должен иметь длину минимум 8 символов',
  passwordDigit: 'Должен содержать хотя бы одну цифру (0–9)',
  passwordLetter: 'Должен содержать хотя бы одну букву',
  passwordCharacters:
    'Должен содержать хотя бы один специальный символ (!@#$%^&*)',
};

export default ruErrors;
