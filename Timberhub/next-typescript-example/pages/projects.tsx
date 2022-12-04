import React, { lazy, Suspense, useEffect, useState } from "react";
import { Projects } from "../model/projects";
import Pagination from "../components/pagination/Pagination";
import { Api } from "./api/api";

const App: React.FC = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [coinsData, setProjectsData] = useState<Projects[]>([]);

  const findDeadline =(date: Date) => {
    const today= new Date();
    const deadline= date.getDate() -today.getDate();
    return deadline;
  }
  const handlePrevPage = (prevPage: number) => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = (nextPage: number) => {
    console.log(nextPage);
    setPage((nextPage) => nextPage + 1);
  };

  useEffect(() => {
    console.log("effct");

    const fetchData = async () => {
      setProjectsData(Api);
      setTotalPages(totalPages);
    };
  });
  return (
    <div>
      <table className="table" width="80%">
          <thead>
              <tr>
                  <th>PROJECT NAME</th>
                  <th>CREATED BY</th>
                  <th>PROGRESS</th>
                  <th>DEADLINE</th>
              </tr>
          </thead>
          <tbody>
              {coinsData.map((project) => {
                  return (
                      <tr key={project.id}>
                          <th>
                            <div>
                                <div>{project.name}</div>
                                <div>{project.hasCompany.name}</div>
                            </div>
                         </th>
                          <th>
                            <div>
                                <div>{project.creator.name}</div>
                                <div>{project.creator.occupation}</div>
                            </div>
                          </th>
                          <th>
                            <div>{project.progress}</div>
                          </th>
                          <th>
                            <div>
                                <div>icon</div>
                                <div>{findDeadline(project.deadline)}</div>
                            </div>
                         </th>
                      </tr>
                  );
              })}
          </tbody>
      </table>
        <div>
            <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    handlePrevPage={handlePrevPage}
                    handleNextPage={handleNextPage} />
        </div>
    </div>
  );
};

export default App;
