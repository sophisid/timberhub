import React from "react";
import api from "../../pages/api/api";
import {TextField} from "@mui/material";
import { Person } from "../../model/person";
import DataTable from "react-data-table-component";
import styles from "./filter.module.scss";
import CustomMaterialPagination from "../pagination/Pagination";
const columns = [
    {
        name: 'Project Name',
        selector: (row: { title: string; }) => row.title,
        sortable: true,
    },
    {
      name:'Created by',
      selector: (row:{creator : Person ;}) =>row.creator.name,
      sortable: true,
    }, 
    {
      name:"Progress",
      selector: (row: {progress: number;}) => row.progress,
      sortable: true,
    },
    {
      name:"Deadline",
      selector: (row: {deadline: Date;}) => row.deadline.getDay(),
      sortable: true,
    }
]; 

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    	<div className={styles.filter}>
    		<TextField
    			id="search"
    			type="text"
    			placeholder="Search project..."
    			aria-label="Search Input"
    			value={filterText}
    			onChange={onFilter}
                className={styles.filter_searchbar}
    		/>
    		<button type="button" onClick={onClear}>
    			Clear
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
                paginationComponent={CustomMaterialPagination}
    			selectableRows
    			persistTableHead
    		/>
    	);
    };
    
    export default {
    	title: 'Examples/Filtering',
    	component: Filtering,
    };