import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {
  const [obj] = useState({
    rowData:[
      {make: "Toyota", model: "Celica", price: 35000},
      {make: "Ford", model: "Mondeo", price: 32000},
      {make: "Porsche", model: "Boxster", price: 72000}
    ],
    columnDefs:[ 
      { field: 'make',sortable:true,filter:true,resizable:true,pinned: 'right' },
      {field: 'model' },
      {field: 'price' }]
  });
  const defaultColDef = {
      sortable: true,
      resizable: true,
      width: 100,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
    };
  return (
    <div className="ag-theme-alpine-dark" style={{height: 400, width: '100%'}}>
      <AgGridReact
        rowData={obj.rowData}
        //defaultColDef={defaultColDef}
        columnDefs={obj.columnDefs}>
      </AgGridReact>
    </div>
  );
}
export default App;
