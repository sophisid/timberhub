import React from "react";
import api from "../../pages/api/api";
import {TextField} from "@mui/material";
import { Person } from "../../model/person";
import DataTable from "react-data-table-component";
const columns = [
    {
        name: 'Project Name',
        selector: (row: { title: string; }) => row.title,
    },
    {
      name:'Created by',
      selector: (row:{creator : Person ;}) =>row.creator.name,
    }, 
    {
      name:"Progress",
      selector: (row: {progress: number;}) => row.progress,
    },
    {
      name:"Deadline",
      selector: (row: {deadline: Date;}) => row.deadline.getDay(),
    }
]; 

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    	<div>
    		<TextField
    			id="search"
    			type="text"
    			placeholder="Filter By Name"
    			aria-label="Search Input"
    			value={filterText}
    			onChange={onFilter}
    		/>
    		<button type="button" onClick={onClear}>
    			X
    		</button>
    	</div>
    );
export const Filtering = () => {
    	const [filterText, setFilterText] = React.useState('');
    	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    	const filteredItems = api.filter(
    		item => item.title && item.title.toLowerCase().includes(filterText.toLowerCase()),
    	);
    
    	const subHeaderComponentMemo = React.useMemo(() => {
    		const handleClear = () => {
    			if (filterText) {
    				setResetPaginationToggle(!resetPaginationToggle);
    				setFilterText('');
    			}
    		};
    
    		return (
    			<FilterComponent onFilter={(e: { target: { value: React.SetStateAction<string>; }; }) => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    		);
    	}, [filterText, resetPaginationToggle]);
    
    	return (
    		<DataTable
    			title="Contact List"
    			columns={columns}
    			data={filteredItems}
    			pagination
    			paginationResetDefaultPage={resetPaginationToggle} 
    			subHeader
    			subHeaderComponent={subHeaderComponentMemo}
    			selectableRows
    			persistTableHead
    		/>
    	);
    };
    
    export default {
    	title: 'Examples/Filtering',
    	component: Filtering,
    };