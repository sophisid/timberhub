import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import IconButton from '@material-ui/core/IconButton';
// import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LooksOneIcon from '@mui/icons-material/LooksOne';
// import LastPageIcon from '@material-ui/icons/LastPage';
import styles from './Pagination.module.scss';

function getNumberOfPages(count: number, rowsPerPage: number) {
  return Math.ceil(count/rowsPerPage);
} 

function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
    const handleFirstPageButtonClick = () => {
        onChangePage(1);
    };
    const handleCustomPageButtonClick= (selectedPage:number) =>{
        onChangePage(selectedPage);
    }

    // RDT uses page index starting at 1, MUI starts at 0
    // i.e. page prop will be off by one here
    const handleBackButtonClick = () => {
        onChangePage(page);
    };

    const handleNextButtonClick = () => {
        onChangePage(page + 2);
    };

    const handleLastPageButtonClick = () => {
        onChangePage(getNumberOfPages(count, rowsPerPage));
    };

    return (
        <>
            {page === 0 ? (
            <IconButton className={styles.btnDis} onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                <KeyboardDoubleArrowLeftIcon className={styles.btnDis_icon}/>
            </IconButton>):(
            <IconButton className={styles.btn} onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                <KeyboardDoubleArrowLeftIcon className={styles.btn_icon}/>
            </IconButton>)}
            {page === 0 ? (
            <IconButton className={styles.btnDis} onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                <KeyboardArrowLeft className={styles.btnDis_icon}/>
            </IconButton>):(<IconButton className={styles.btn} onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                <KeyboardArrowLeft className={styles.btn_icon}/>
            </IconButton>)}
            {4 >= getNumberOfPages(count, rowsPerPage)? (<div className={styles.multipleBtns}> 
                <IconButton className={page === 0 ? styles.multipleBtns_btn : styles.multipleBtns_btndis}  aria-label="previous page">
                   1
                </IconButton>
                <IconButton className={page === 1 ? styles.multipleBtns_btn : styles.multipleBtns_btndis}   aria-label="previous page">
                   2
                </IconButton>
                <IconButton className={page === 2 ? styles.multipleBtns_btn : styles.multipleBtns_btndis}   aria-label="previous page">
                   3
                </IconButton>
                <div className={styles.multipleBtns_text}>...</div>
                <IconButton className={page === 5 ? styles.multipleBtns_btn : styles.multipleBtns_btndis} aria-label="previous page">
                   5
                </IconButton>
            </div>):(<div>

            </div>)}

            {/* todo buttons with numbers */}
            {page >= getNumberOfPages(count, rowsPerPage) - 1 ? (
            <IconButton className={styles.btnDis}
                onClick={handleNextButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight className={styles.btnDis_icon}/>
            </IconButton>):(  <IconButton className={styles.btn}
                onClick={handleNextButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="next page"
            >
                <KeyboardArrowRight className={styles.btn_icon}/>
            </IconButton>)}
            {page >= getNumberOfPages(count, rowsPerPage) - 1 ? (
            <IconButton
                className={styles.btnDis}
                onClick={handleLastPageButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="last page"
            >
                <KeyboardDoubleArrowRightIcon className={styles.btnDis_icon}/>
            </IconButton>):(<IconButton
                className={styles.btn}
                onClick={handleLastPageButtonClick}
                disabled={page >= getNumberOfPages(count, rowsPerPage) - 1}
                aria-label="last page"
            >
                <KeyboardDoubleArrowRightIcon className={styles.btn_icon}/>
            </IconButton>)}
        </>
    );
}

const CustomMaterialPagination = ({ rowsPerPage, rowCount, onChangePage, onChangeRowsPerPage, currentPage }) => (
    <TablePagination
        component="nav"
        count={rowCount}
        rowsPerPage={rowsPerPage}
        page={currentPage - 1}
        onChangePage={onChangePage}
        onChangeRowsPerPage={({ target }) => onChangeRowsPerPage(Number(target.value))}
        ActionsComponent={TablePaginationActions}
        labelRowsPerPage={""} 
        getItemAriaLabel={""}
          />
);

export default CustomMaterialPagination;

