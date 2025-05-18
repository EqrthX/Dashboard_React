import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import useStoreData from '../helper/useStoreData'

const E_commercePage = () => {

  const { products } = useStoreData();
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col px-2 sm:px-4 md:px-8 py-4">
        <h1 className="text-center text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest font-bold text-blue-900 mb-8">
          E-commerce
        </h1>

        <div className="w-full flex-1 flex flex-col items-center">
          <div className="w-full overflow-x-auto rounded-lg shadow bg-white">
            <table className="min-w-[600px] w-full text-sm md:text-base text-left text-gray-700">
              <thead className="text-xs md:text-sm uppercase bg-blue-100 text-blue-900">
                <tr>
                  <th scope="col" className="px-4 py-3">Id</th>
                  <th scope="col" className="px-4 py-3">Title</th>
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Price</th>
                  <th scope="col" className="px-4 py-3">Image</th>
                </tr>
              </thead>
              <tbody>
                {paginatedProducts.map((product) => (
                  <tr
                    className="bg-white border-b last:border-b-0 hover:bg-blue-50 transition"
                    key={product.id}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{product.id}</td>
                    <td className="px-4 py-3">{product.title}</td>
                    <td className="px-4 py-3">{product.category}</td>
                    <td className="px-4 py-3">{product.price}</td>
                    <td className="px-4 py-3">
                      <img src={product.image} alt={product.title} className="w-10 h-10 sm:w-12 sm:h-12 object-contain mx-auto" />
                    </td>
                  </tr>
                ))}
                {paginatedProducts.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-gray-400">No products found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            <button
              className="px-3 py-1 bg-blue-200 text-blue-900 rounded-lg font-semibold disabled:opacity-50 transition cursor-pointer"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </button>
            <span className="text-gray-700 font-medium">
              Page {page} of {totalPages}
            </span>
            <button
              className="px-3 py-1 bg-blue-200 text-blue-900 rounded-lg font-semibold disabled:opacity-50 transition cursor-pointer"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default E_commercePage