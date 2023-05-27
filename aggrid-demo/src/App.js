import './App.css';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';

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
      { field: 'make' },
      { field: 'model' },
      { field: 'price' }]
  });

  return (
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
      <AgGridReact
      rowData={obj.rowData}
      columnDefs={obj.columnDefs}>
      </AgGridReact>
    </div>
  );
}

export default App;
