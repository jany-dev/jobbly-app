import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs';
import { Jumbotron, Container, } from 'react-bootstrap';
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import './App.css';

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }


  return (
    <Container fluid className="pb-2">
      <Jumbotron className="p-3" style={{backgroundColor:'#333333', textAlign:'center', color: '#ffff', height: '15rem'}}>
<h1 className="mb-4 pt-5" > Jobbly </h1>
<h5 className="text-muted">Find your perfect programming job</h5>
</Jumbotron>
      <SearchForm params={params} onParamChange={handleParamChange} />

      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1> Loading.. </h1>}
      {error && <h1> Error. Please refresh the page. </h1>}

      {jobs.map(job => {
        return <Job key={job.id} job={job}> </Job>
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>

  )
}

export default App;
