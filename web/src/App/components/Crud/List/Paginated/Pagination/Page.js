import React from 'react'
import formatNumber from '../formatNumber'
import BeforeIcon from 'react-icons/lib/md/chevron-left'
import NextIcon from 'react-icons/lib/md/chevron-right'
export default function Page(props) {
  return (
    <div>
      <div
        className={
          props.result.hasPreviousPage
            ? 'paginated-pagination-page-icon'
            : 'paginated-pagination-page-icon-disabled'
        }
        onClick={() => props.result.hasPreviousPage && props.setPage(props.page - 1)}>
        <BeforeIcon size={25} />
      </div>
      <div className="paginated-pagination-page-input-container">
        page{' '}
        <input
          name="pageInput"
          value={String(props.page)}
          onChange={event => props.setPage(Number(event.target.value))}
          className="paginated-pagination-page-input"
        />{' '}
        of {formatNumber(props.result.totalPages)}
      </div>
      <div
        className={
          props.result.hasNextPage
            ? 'paginated-pagination-page-icon'
            : 'paginated-pagination-page-icon-disabled'
        }
        onClick={() => props.result.hasNextPage && props.setPage(props.page + 1)}>
        <NextIcon size={25} />
      </div>
    </div>
  )
}
