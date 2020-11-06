function validateName(name) {
  const re = /^[a-z\d\-_\s]+$/i;
  return re.test(String(name).toLowerCase());
}

export default validateName