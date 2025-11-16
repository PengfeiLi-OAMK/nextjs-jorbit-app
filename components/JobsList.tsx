'use client';
import JobCard from './JobCard';
import { useSearchParams } from 'next/navigation';
import { getAllJobsAction } from '@/utils/actions';
import { useQuery } from '@tanstack/react-query';

function JobsList() {
  const searchParams= useSearchParams();
  const search = searchParams.get('search')||'';
  const jobStatus= searchParams.get('jobStatus')||'all';
  const pageNumber=Number(searchParams.get('jobStatus'))||1;
  const { data, isPending } = useQuery({
    queryKey: ['jobs', search, jobStatus, pageNumber],
    queryFn: () => getAllJobsAction({search,jobStatus,page:pageNumber}),

  });
  const jobs=data?.jobs||[];
  if (isPending) {
    return <div>Loading...</div>;
  }
  if (jobs.length === 0) {
    return <div>No jobs found.</div>;
  }
  return (<div className="grid md:grid-cols-2 gap-8">
    {
      jobs.map((job)=>{
        return <JobCard key={job.id} job={job} />
      })
    }
  </div>);
}

export default JobsList;
