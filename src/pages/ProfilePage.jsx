import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import useStoreData from '../helper/useStoreData'

const ProfilePage = () => {

    const {users} = useStoreData();

    const [page, setPage] = useState(1);
    const itemPerPage = 5;
    const totalPages = Math.ceil(users.length / itemPerPage);

    const paginateUsers = users.slice(
        (page - 1) * itemPerPage,
        page * totalPages
    )
    console.log(users);
    return (
    <div className='flex flex-col md:flex-row overflow-x-auto min-h-screen'>
        <Sidebar/>

        <div className='flex-1 w-full h-auto flex flex-col px-2 md:px-8'>
            <h1 className="text-center text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest font-bold text-blue-900 mb-8">Profile</h1>

            <div className="w-full flex-1 flex flex-col items-center">
                <div className="w-full overflow-x-auto rounded-lg shadow bg-white">

                    <table className="min-w-[600px] w-full text-sm md:text-base text-left text-gray-700">
                        <thead className="text-xs md:text-sm uppercase bg-blue-100 text-blue-900">
                            <tr>
                                <th scope="col" className="px-4 py-3">Id</th>
                                <th scope="col" className="px-4 py-3">username</th>
                                <th scope="col" className="px-4 py-3">Email</th>
                                <th scope="col" className="px-4 py-3">Phone</th>
                                <th scope="col" className="px-4 py-3">Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr
                                    className="bg-white border-b last:border-b-0 hover:bg-blue-50 transition"
                                    key={user.id}
                                >
                                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{user.id}</td>
                                    <td className="px-4 py-3">{user.username}</td>
                                    <td className="px-4 py-3">{user.email}</td>
                                    <td className="px-4 py-3">{user.phone}</td>
                                    <td className="px-4 py-3">
                                    {user.address
                                        ? `${user.address.street} ${user.address.number}, ${user.address.city}, ${user.address.zipcode}`
                                        : <span className="text-gray-400 italic">No address</span>
                                    }
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
      
    </div>
  )
}

export default ProfilePage
