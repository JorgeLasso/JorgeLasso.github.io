const { create } = require("../services/crm/create");

async function _create(crm) {
  return await create(crm);
}

module.exports = {
  _create,
};
