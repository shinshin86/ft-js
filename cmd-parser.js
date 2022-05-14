module.exports.parse = (args) => {
  const command = args[0];
  let listOption = '';

  if (command === 'list') {
    listOption = args[1] === '--json' && args[1];
  }

  // find address
  const addressIndex = args.findIndex((arg) => arg === '-a');
  const address = addressIndex !== -1 ? args[addressIndex + 1] : '';

  return {
    command: args[0],
    listOption,
    address,
  };
};
