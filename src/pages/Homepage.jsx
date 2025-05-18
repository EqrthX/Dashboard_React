import Sidebar from '../components/Sidebar'
import {
  Chart as ChartJS, 
  ArcElement, 
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip, 
  Legend,
} from "chart.js";

import {Bar, Pie} from 'react-chartjs-2';
import {ShoppingBasket, ShoppingCart, Users} from "lucide-react"
import useStoreData from '../helper/useStoreData.js';
ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Products'
    }
  }
}

const Homepage = () => {

  const {products, carts, users} = useStoreData();

  const rating = products.map(r => r.rating)
  
  const charData = {

    labels: products.map(p => p.title.length > 15 ? p.title.slice(0, 15) + '...': p.title),

    datasets: [
      {
        label: "จำนวนรีวิว",
        data: rating.map(r => r.count),
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      },
    ]

  }

  const pieData = {
    labels: products.map(p => p.title.length > 5 ? p.title.slice(0, 15) + '...': p.title),

    datasets: [
      {
        label: "คะแนนรีวิว",
        data: rating.map(r => r.rate),
        backgroundColor: rating.map(r => 
          r.rate >= 4 ? 'rgba(34,197,94,0.7)' :
          r.rate >= 3 ? 'rgba(253,224,71,0.7)' :
          'rgba(239,68,68,0.7)'
        )
      }
    ]
  }

  return (
    <>

      <div className='flex flex-col md:flex-row overflow-x-auto min-h-screen'>
        <Sidebar/>

        <div className='flex-1 w-full h-auto flex flex-col px-2 md:px-8'>
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl uppercase tracking-widest font-bold text-blue-900 mb-8">Dashboard</h1>
          
          <div className='flex flex-col items-center justify-between mx-auto w-full'>
            {/* Card Section */}
            <div
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full'
            >
              <div className='flex justify-center items-center bg-[#34ca6d] w-full max-w-xs h-[120px] md:h-[150px] rounded-md mx-auto'>
                <div className='flex justify-between items-center w-full px-4 md:px-10'>
                  <Users size={40} md={48} color='white'/>
                  <div className='flex flex-col text-white'>
                    <h1 className='font-bold uppercase leading-tight mb-1 text-base md:text-lg'>
                      Users
                    </h1>
                    <p className='font-semibold text-right text-lg md:text-xl'>
                      {users.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center items-center bg-[#d0c02f] w-full max-w-xs h-[120px] md:h-[150px] rounded-md mx-auto'>
                <div className='flex justify-between items-center w-full px-4 md:px-10'>
                  <ShoppingBasket size={40} md={48} color='white' />
                  <div className='flex flex-col text-white'>
                    <h1 className='font-bold uppercase leading-tight mb-1 text-base md:text-lg'>
                      Products
                    </h1>
                    <p className='font-semibold text-right text-lg md:text-xl'>
                      {products.length}
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-center items-center bg-[#8432db] w-full max-w-xs h-[120px] md:h-[150px] rounded-md mx-auto'>
                <div className='flex justify-between items-center w-full px-4 md:px-10'>
                  <ShoppingCart size={40} md={48} color='white' />
                  <div className='flex flex-col text-white'>
                    <h1 className='font-bold uppercase leading-tight mb-1 text-base md:text-lg'>
                      Carts
                    </h1>
                    <p className='font-semibold text-right text-lg md:text-xl'>
                      {carts.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className='flex flex-col lg:flex-row w-full items-center justify-between gap-8 mt-8'>
              <div className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[600px] h-[300px] md:h-[400px] mx-auto mb-8 lg:mb-0'>
                <Bar options={options} data={charData} />
              </div>
              <div className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-[600px] h-[300px] md:h-[400px] mx-auto'>
                <Pie options={options} data={pieData}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Homepage
