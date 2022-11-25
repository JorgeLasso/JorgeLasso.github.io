const db = require("../../models");

async function create(crm) {
  if (!crm.nombres) throw new Error("Nombres es requerido");
  if (!crm.apellidos) throw new Error("Apellidos es requerido");
  if (!crm.telefonos) throw new Error("Telefonos es requerido");
  if (!crm.direcciones) throw new Error("Direcciones es requerido");

  return await db.crm.create(crm);
}

module.exports = {
  create,
};
