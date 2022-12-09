import React, { lazy, Suspense, useEffect, useState } from "react";
import { Projects } from "../model/projects";
import { Person } from "../model/person";
import Pagination from "../components/pagination/Pagination";
import  api from "./api/api";
import DataTable from "react-data-table-component";
import styles from './projects.module.scss';
import { Button } from "../components/buttons/buttons";
import { TextField } from '@mui/material';
import { Filtering } from "../components/filter/filter";
// import { FilterComponent, Filtering } from "../components/filter/filter";


const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [projectsData, setProjectsData] = useState<Projects[]>(api);


  const findDeadline =(date: Date) => {
    const today= new Date();
    const deadline= date.getDate() -today.getDate();
    return deadline;
  }

  return (
    <div className={styles.main}>
      <div className={styles.main_dataTable}>
        <Filtering  />
      </div>
    </div>
  );
};

export default App;
