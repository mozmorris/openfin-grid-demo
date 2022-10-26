import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-balham.css'
import { AgGridReact } from 'ag-grid-react'

function App() {
  return (
    <div className="ag-theme-balham" style={{ height: 600 }}>
      <AgGridReact columnDefs={[{ valueGetter: ({ data }) => data.rowNumber }, { valueGetter: ({ data }) => data.calc }]} rowData={data} />
    </div>
  );
}

export default App;

const data = Array.from({ length: 12_000 }).map((_, i) => ({ rowNumber: `Row: ${i}`, calc: i * 200 }))