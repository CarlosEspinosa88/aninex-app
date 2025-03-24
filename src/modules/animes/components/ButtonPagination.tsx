import Button from '@/components/Button';
import React from 'react'

type ButtonPaginationProps = {
  pageInfo: {
    hasNextPage: boolean;
    currentPage: number;
  },
  loading: boolean;
  handleLoadMore: () => void; 
  handlePreviousPage: () => void;
}

export default function ButtonPagination({ 
  pageInfo, 
  loading, 
  handleLoadMore,
  handlePreviousPage,
}: ButtonPaginationProps) {
  return (
    <div className='flex flex-row justify-center gap-5 pb-10'>
      {pageInfo?.hasNextPage && (
        <div className='mt-[1rem]'>
          <Button
            disabled={loading || pageInfo?.currentPage === 1} 
            onClick={handlePreviousPage} 
            label={loading ? 'Loading...' : 'Previous page'} 
          />  
        </div>
      )}
      {pageInfo?.hasNextPage && (
        <div className='mt-[1rem]'>
          <Button
            disabled={loading}
            onClick={handleLoadMore}
            label={loading ? 'Loading...' : 'Next page'}
          />
        </div>
      )}  
    </div>
  )
}
