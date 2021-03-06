import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import './App.css';
import Job from './Job';
import JobPagination from './JobPagination';
import SearchForm from './SearchForm';
import useFetchJobs from './useFetchJobs'
import {GoMarkGithub} from 'react-icons/go'


function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading, error, hasNextPage} = useFetchJobs(params, page)

  const handleParamChange = e => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prev => {
      return {
        ...prev,
        [param]: value
      }
    })
  }

  return (
    <Container className="my-4">
    <h1 className="mb-4 text-center"><GoMarkGithub /> Github Jobs</h1> 
    <SearchForm params={params} onParamChange={handleParamChange}/>
    <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    {loading && <h1>Loading...</h1>}
    {error && <h1>Error. Try Refreshing.</h1>}
    {jobs.map(job => {
      return <Job key={job.id} job={job}/>
    })}
    <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;
