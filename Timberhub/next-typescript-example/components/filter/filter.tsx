import React from "react";
import api from "../../pages/api/api";
// import {TextField} from "@mui/material";
import { Person } from "../../model/person";
import DataTable from "react-data-table-component";
import styles from "./filter.module.scss";
import CustomMaterialPagination from "../pagination/Pagination";
import { ReactComponent as Filtersvg } from "../../shared/images/icons/Filter.svg";
import { CreatedBy, DeadlineCell, ProgressCell, ProjectName } from "../cells/cells";
import { Projects } from "../../model/projects";


const customStyles = {
    rows: {
        style: {
            '&:not(:last-of-type)': {
				borderBottomStyle: 'solid',
				borderBottomWidth: '1px',
				borderBottomColor: '#E8E9EB'
			},
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
            
        },
    },
    headRow: {
		style: {
			borderBottomColor: "#E8E9EB",
		},},
    cells: {
        style: {
            paddingLeft: '8px', 
            paddingRight: '8px',
        },
    },
};
const columns = [
	{
        name: 'PROJECT NAME',
        selector: (row: { title: string; }) => row.title,
		cell: (row: Projects) => <ProjectName title={row.title} hasCompany={row.hasCompany} img={row.img} progress={row.progress} id={0} creator={row.creator} deadline={row.deadline}/> ,
        sortable: true,
    },
    {
      name:'CREATED BY',
      selector: (row: { creator: string; }) => row.creator.name,
	  cell: (row: Projects) => <CreatedBy title={row.title} hasCompany={row.hasCompany} img={row.img} progress={row.progress} id={0} creator={row.creator} deadline={row.deadline}/> ,
      sortable: true,
    }, 
    {
      name:"PROGRESS",
      selector: (row: { progress: number; }) => row.progress,
	  cell: (row: Projects) => <ProgressCell title={row.title} hasCompany={row.hasCompany} img={row.img} progress={row.progress} id={0} creator={row.creator} deadline={row.deadline}/> ,
      sortable: true,
    },
    {
      name:"DEADLINE",
      selector: (row: { deadline: Date; }) => row.deadline,
	  cell: (row: Projects) => <DeadlineCell title={row.title} hasCompany={row.hasCompany} img={row.img} progress={row.progress} id={0} creator={row.creator} deadline={row.deadline}/> ,
      sortable: true,
    }
]; 

const FilterComponent = ({ filterText, onFilter, onClear }) => (
    	<div className={styles.filter}>
    		<input
    			id="search"
    			placeholder="Search project..."
    			aria-label="Search Input"
    			value={filterText}
    			onChange={onFilter}
                className={styles.filter_searchbar}
    		/>
    		<button type="button" onClick={onClear}>
				Clear
				{/* <img src="/images/icons/Filter.svg" /> */}
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
    			// title="Contact List"
    			columns={columns}
    			data={filteredItems}
    			pagination
    			paginationResetDefaultPage={resetPaginationToggle} 
    			subHeader
    			subHeaderComponent={subHeaderComponentMemo}
                paginationComponent={CustomMaterialPagination}
    			// selectableRows
    			persistTableHead
                customStyles={customStyles} 
    		/>
    	);
    };
    
    export default {
    	title: 'Examples/Filtering',
    	component: Filtering,
    };