/**
 * Evite fazer muitas coiass em uma mesma função.
 */

// ruim 👎
function emailUsers(users) {
  users.forEach((user) => {
    const userRecord = database.find(user);
    if (userRecord.isActive()) {
      email(userRecord);
    }
  });
}

// bom 😃
function emailActiveUsers(users) {
  users.filter(isActiveUser).forEach(email);
}

function isActiveUser(user) {
  const userRecord = database.find(user);
  return userRecord.isActive();
}
