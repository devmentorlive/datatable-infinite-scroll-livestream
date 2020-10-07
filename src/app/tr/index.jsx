import React from 'react';
import SortUpIcon from '../../ui/icons/sort/ascending';
import SortDnIcon from '../../ui/icons/sort/descending';

export default function Tr({ sortedBy, sort, label }) {
  function changeSort(direction) {
    sort.changer((prev) => ({
      ...prev,
      sortedBy: {
        [sort.key]: direction,
      },
    }));
  }
  return (
    <th>
      <div className='flex-container'>
        <div className='flex-full'>{label}</div>
        {sort ? (
          <div>
            {sortedBy && sortedBy[sort.key] === 'ascending' ? (
              <SortUpIcon
                active={
                  sortedBy && sortedBy[sort.key] === 'ascending'
                }
                onClick={() => changeSort('descending')}
              />
            ) : (
              <SortDnIcon
                active={
                  sortedBy && sortedBy[sort.key] === 'descending'
                }
                onClick={() => changeSort('ascending')}
              />
            )}
          </div>
        ) : null}
      </div>
    </th>
  );
}
