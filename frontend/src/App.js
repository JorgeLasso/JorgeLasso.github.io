import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import XLSX from "xlsx";
import axios from "axios";

const EXTENSIONS = ["xlsx", "xls", "csv"];
function App() {
  const [colDefs, setColDefs] = useState();
  const [data, setData] = useState();

  const getExtention = (file) => {
    const parts = file.name.split(".");
    const extension = parts[parts.length - 1];
    return EXTENSIONS.includes(extension); //True or False
  };

  const convertToJson = (headers, data) => {
    const rows = [];
    data.forEach((row) => {
      let rowData = {};
      row.forEach((element, index) => {
        rowData[headers[index]] = element;
      });
      rows.push(rowData);
    });
    return rows;
  };

  const importCSV = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
      const bstr = event.target.result;
      const workBook = XLSX.read(bstr, { type: "binary" });

      const workSheetName = workBook.SheetNames[0];
      const workSheet = workBook.Sheets[workSheetName];

      const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
      const headers = fileData[0];
      const heads = headers.map((head) => ({ title: head, field: head }));
      const headFilter = heads.filter(
        (head) =>
          head.title === "id" ||
          head.title === "nombres" ||
          head.title === "apellidos" ||
          head.title === "telefonos" ||
          head.title === "direcciones"
      );
      setColDefs(headFilter);
      fileData.splice(0, 1);
      setData(convertToJson(headers, fileData));
    };

    if (file) {
      if (getExtention(file)) {
        reader.readAsBinaryString(file);
      } else {
        alert("Archivo inválido, selecciona archivo excel o CSV");
      }
    } else {
      setData([]);
      setColDefs([]);
    }
  };

  const saveDB = async () => {
    const newData = data.map((item) => {
      return {
        id: item.id,
        nombres: item.nombres,
        apellidos: item.apellidos,
        telefonos: item.telefonos,
        direcciones: item.direcciones,
      };
    });
    console.log(newData);
    await axios.post("/api/file/upload", newData);
  };

  return (
    <div className="App">
      <h1 align="center">Carga de archivo CSV</h1>
      <h4 align="center">Importar información de excel o csv en tabla</h4>
      <input type="file" onChange={importCSV} />
      <MaterialTable
        title="Información extraída"
        data={data}
        columns={colDefs}
        actions={[
          {
            icon: () => <button>Guardar en Base de datos</button>, // you can pass icon too
            tooltip: "Guardar en Base de datos",
            onClick: () => saveDB(),
            isFreeAction: true,
          },
        ]}
      />
    </div>
  );
}

export default App;
