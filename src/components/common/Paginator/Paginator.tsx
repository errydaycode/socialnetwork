import React from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
  currentPage:number
  onPageChanged:(pageNumber: number) => void
  totalUsersCount: number
  pageSize: number
}

export const Paginator = ({totalUsersCount,  currentPage, pageSize, onPageChanged}: PaginatorPropsType ) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  return (
    <div>
      {
        pages.map((p, index) => {
          let spanClassName = currentPage === p ? s.selectedPage : s.unSelectedPage
          return <span key={index} className={spanClassName} onClick={() => onPageChanged(p)}>
            {p}
          </span>
        })
      }
    </div>

  );
};

