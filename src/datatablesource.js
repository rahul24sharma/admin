import React from 'react'
export const userColumns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'user',
    headerName: 'User',
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      )
    },
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 230,
  },

  {
    field: 'password',
    headerName: 'Password',
    width: 200,
  },
  {
    field: 'games',
    headerName: 'Games',
    width: 200,
  },
]
