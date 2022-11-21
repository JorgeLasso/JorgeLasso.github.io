const stream = require('stream');
const await = require('await')
const fs = require('fs');
const path = require('path');

const db = require('../config/db.config.js');
const CRM = db.CRM;

const csv = require('fast-csv');
const Json2csvParser = require('json2csv').Parser;

/**
 * Upload Single CSV file/ and Import data to MySQL
 * @param {*} req 
 * @param {*} res 
 */
exports.uploadFile = (req, res) => {
    try{
        const crm = [];
        fs.createReadStream(__basedir + "/uploads/" + req.file.filename)
            .pipe(csv.parse({ headers: true }))
            .on('error', error => {
                console.error(error);
                throw error.message;
            })
            .on('data', row => {
                crm.push(row);
                console.log(row);
            })
            .on('end', () => {
                
                CRM.bulkCreate(crm).then(() => {
                    const result = {
                        status: "ok",
                        filename: req.file.originalname,
                        message: "Información cargada correctamente",
                    }
    
                    res.json(result);
                });    
            });
    }catch(error){
        const result = {
            status: "fail",
            filename: req.file.originalname,
            message: "Error al cargar archivo " + error.message
        }
        res.json(result);
    }
}