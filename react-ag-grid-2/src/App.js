import './App.css';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function App() {

  const [myData] = useState({
    columnDefs:[
      { field: 'make',sortable: true,filter: true,resizable: true,width:150,pinned:'right' },
      { field: 'model',sortable: true,filter: true,resizable: true,pinned:'left' },
      { field: 'price',sortable: true,filter: true,resizable: true }
  ],
  rowData:[
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
  ]
  });
  return (
    <div className="ag-theme-alpine-dark" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={myData.rowData}
               columnDefs={myData.columnDefs}>
           </AgGridReact>
       </div>
  );
}

export default App;
