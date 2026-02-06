import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DashBord() {
  const [data, setData] = useState({})

  useEffect(() => {
    const res = axios.get('http://localhost:5000/api/auth/dash')

    res
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const menuItems = [
    'Configuration',
    'Online Data',
    'RFQ',
    'Online Enrollment',
    'Cash Deposit Balance',
    'VAS',
    'Reports And Analysis',
    'Utility',
    'Claim Intimation',
    'Claim Submision',
    'Online Payment status',
    'Natural Submission'
  ]

  return (
    <div className="flex min-h-screen bg-gray-100">

      <div className="w-64 bg-gradient-to-b from-gray-800 to-black text-white p-4 rounded-xl m-4">

        <h1 className="bg-teal-500 rounded-lg p-3 text-center mb-6 font-semibold flex items-center justify-center gap-2">
          <span className="material-symbols-outlined">grid_view</span>
          Dashboard
        </h1>

        {menuItems.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center px-3 py-2 rounded hover:bg-gray-700 cursor-pointer text-sm mb-1"
          >
            <span>{item}</span>
            <span className="material-symbols-outlined text-base">
              expand_more
            </span>
          </div>
        ))}
      </div>

      <div className="flex-1 p-6">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Policy</p>
              <h2 className="text-2xl font-bold">52</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-black text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">description</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Corporates</p>
              <h2 className="text-2xl font-bold">34</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-green-500 text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">apartment</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Employees</p>
              <h2 className="text-2xl font-bold">62951</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-cyan-500 text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">person</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Lives</p>
              <h2 className="text-2xl font-bold">182172</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-blue-500 text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">groups</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Insurer</p>
              <h2 className="text-2xl font-bold">10</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-orange-400 text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">umbrella</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-4 flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Payer</p>
              <h2 className="text-2xl font-bold">9</h2>
              <p className="text-xs text-gray-400">Just updated</p>
            </div>
            <div className="bg-purple-600 text-white p-3 rounded-xl shadow">
              <span className="material-symbols-outlined">currency_rupee</span>
            </div>
          </div>

        </div>

        <div className="bg-white rounded-xl shadow p-4">

          <div className="flex justify-between items-center mb-4">
            <select className="border px-2 py-1 text-sm rounded">
              <option>10 entries</option>
              <option>25 entries</option>
            </select>

            <div className="flex gap-3">
              <button className="border px-3 py-1 text-sm rounded shadow">
                Excel
              </button>
              <input
                className="border px-3 py-1 text-sm rounded"
                placeholder="Search ..."
              />
            </div>
          </div>

          <table className="w-full text-sm">
            <thead className="border-b text-gray-500">
              <tr>
                <th className="text-left">Date</th>
                <th>Policies</th>
                <th>Corporates</th>
                <th>Active Members</th>
                <th>Inactive Members</th>
                <th>Total Members</th>
                <th>Total Lives</th>
              </tr>
            </thead>

            <tbody>
              {data?.data?.tableData?.map((row, i) => (
                <tr key={i} className="border-b text-center">
                  <td className="text-left">{row.date}</td>
                  <td>{row.policies}</td>
                  <td>{row.corporates}</td>
                  <td>{row.activeMembers}</td>
                  <td>{row.inactiveMembers}</td>
                  <td>{row.totalMembers}</td>
                  <td>{row.totalLives}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default DashBord
