import React, { useState, useEffect } from 'react';

import DataTable from '../ui/datatable';
import Tr from './tr';
import json from '../data/people.json';

import './styles.css';

function pageData({ data, per = 50, page = 1 }) {
  return data.slice(per * (page - 1), per * page);
}

export default function App({}) {
  const [state, setState] = useState({
    data: pageData({ data: json }),
    loading: false,
    page: 1,
    sortedBy: { first_name: 'ascending' },
  });

  useEffect(() => {
    if (!state.sortedBy) return;
    const sortKey = Object.keys(state.sortedBy)[0];
    const direction = state.sortedBy[sortKey];

    setState((prev) => ({
      ...prev,
      data: json.sort((a, b) => {
        return direction === 'ascending'
          ? a[sortKey] > b[sortKey]
          : a[sortKey] < b[sortKey];
      }),
    }));
  }, [state.sortedBy]);

  function loadMore() {
    if (state.loading) return;
    setState((prev) => ({
      ...prev,
      loading: true,
    }));

    setState((prev) => ({
      data: [
        ...prev.data,
        ...pageData({ data: json, page: prev.page + 1 }),
      ],
      loading: false,
      page: prev.page + 1,
    }));
  }

  return (
    <DataTable
      loadMore={loadMore}
      items={state.data}
      renderHead={() => (
        <>
          <Tr label='ID' />
          <Tr
            label='First name'
            sortedBy={state.sortedBy}
            sort={{ key: 'first_name', changer: setState }}
          />
          <Tr
            label='Last name'
            sortedBy={state.sortedBy}
            sort={{ key: 'last_name', changer: setState }}
          />
          <Tr
            label='Email'
            sortedBy={state.sortedBy}
            sort={{ key: 'email', changer: setState }}
          />
          <Tr label='Gender' />
          <Tr label='IP address' />
        </>
      )}
      renderRow={(row) => (
        <tr>
          <td>{row.id}</td>
          <td>{row.first_name}</td>
          <td>{row.last_name}</td>
          <td>{row.email}</td>
          <td>{row.gender}</td>
          <td>{row.ip_address}</td>
        </tr>
      )}
    />
  );
}
