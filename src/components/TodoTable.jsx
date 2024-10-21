import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import dayjs from "dayjs";



export default function TodoTable(props) {
    const dateFormatter = params => {
        return dayjs(params.value).format('DD.MM.YYYY');
    }
    const [columnDefs] = useState([
        { field: 'desc', sortable: true, filter: true, floatingFilter: true },
        { field: 'date', sortable: true, filter: true, floatingFilter: true, valueFormatter: dateFormatter },
        {
            field: 'priority', sortable: true, filter: true, floatingFilter: true,
            cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        }
    ])



    return (
        <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
            <AgGridReact
                ref={props.gridRef}
                onGridReady={params => props.gridRef.current = params.api}
                rowData={props.todos}
                columnDefs={columnDefs}
                rowSelection="single"
            />
        </div>
    );
}

