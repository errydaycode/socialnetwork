import React, {useState} from 'react';
import s from "./Paginator.module.css";

type PaginatorPropsType = {
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  totalItemsCount: number
  pageSize: number
  portionSize?: number
}

export const Paginator = ({
                            totalItemsCount,
                            currentPage,
                            pageSize,
                            onPageChanged,
                            portionSize = 10
                          }: PaginatorPropsType) => {

  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  const [portionNumber, setPortionNumber] = useState(1)
  let leftPortionNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionNumber = portionNumber * portionSize


  return (
    <div>

      {portionNumber > 1 &&
          <button onClick={() => {setPortionNumber( prevState => prevState - 1) } }>Назад</button>
      }

      {
        pages.filter(p => p >= leftPortionNumber && p <=rightPortionNumber)
          .map((p, index) => {
          let spanClassName = currentPage === p ? s.selectedPage : s.unSelectedPage
          return <span key={index} className={spanClassName} onClick={() => onPageChanged(p)}>
            {p}
          </span>
        })
      }
      { portionCount > portionNumber &&
          <button onClick={() => {setPortionNumber( prevState => prevState  + 1) } }>Далее</button>
      }

    </div>

  );
};

