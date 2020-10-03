import React, { useEffect, useRef } from 'react';
import './styles.css';

export default function DataTable({
  items,
  renderHead,
  renderRow,
  loadMore,
}) {
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  function handleScroll(e) {
    const cY = window.scrollY;
    const tbh = ref.current.offsetHeight;
    const thresh = 1000;
    if (tbh - cY - thresh < 0) loadMore();
  }

  return (
    <table className='__dml_table' cellSpacing={0} cellPadding={0}>
      <thead>
        <tr>{renderHead()}</tr>
      </thead>

      <tbody ref={ref}>{items.map((row) => renderRow(row))}</tbody>
    </table>
  );
}
