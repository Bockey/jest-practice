export function checkName(name) {
  //name must be at least 5 characters and not include spaces
  if (name.trim().length < 5 || name.includes(" ")) {
    return false;
  }
  return true;
}
