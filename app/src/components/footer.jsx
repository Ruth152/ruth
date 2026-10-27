import React from 'react'
import { Utensils } from 'lucide-react'
import { Coffee } from 'lucide-react'
import { Share2 } from 'lucide-react'
import { Copyright } from 'lucide-react'


function Footer() {
  return (
    <div>
      <footer>
        <div className='bg-gray-200 w-full p-7 '>
            <div className=' flex justify-between'>
                <div className='w-[320px]'>
                    <h4 className='text-green-900  font-bold text-3xl font-serif'>SAVORE</h4>
                    <p className='text-gray-500'>Good food. Great moments. Crafted culinary deliveries celebrating vibrant flavors and artisanal ingredients directly to your table.</p>
                    <div className='flex gap-5'>
                    <button className='bg-gray-100 rounded-full p-1'><Utensils size={24} color="gray" strokeWidth={1.5} /></button> 
                    <button className='bg-gray-100 rounded-full p-1'><Coffee color="gray" strokeWidth={1.5} /></button>
                    <button className='bg-gray-100 rounded-full p-1'><Share2 color="gray" strokeWidth={1.5} /></button>
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='font-bold text-xl'>Quick Links</h4>
                    <p className='text-gray-500'>Menu & Foods</p>
                    <p className='text-gray-500'>Artisanal Catering</p>
                    <p className='text-gray-500'>Seasonal Deals</p>
                    <p className='text-gray-500'>SAVORE Gift Cards</p>
                </div>
                <div  className='flex flex-col gap-2'>
                    <h4 className='font-bold text-xl'>Company</h4>
                    <p className='text-gray-500'>Our story</p>
                    <p className='text-gray-500'>Culinary Careers</p>
                    <p className='text-gray-500'>Press & Media</p>
                    <p className='text-gray-500'>Substainable Sourcing</p>
                </div>
                <div className='w-92.5 flex flex-col gap-2'>
                    <h4 className='font-bold text-xl'>Stay Inspired</h4>
                    <p className='text-gray-500'>Subscribe for curated seasonal menus, chef insights, and special weekend tastings.</p>
                    <div className='flex justify-between gap-2'>
                        <input className='bg-white text-gray-500 rounded-2xl outline-none w-75 p-3' placeholder='Enter your email' type='text'/>
                        <button className='text-white bg-orange-800 w-14 h-10 rounded-2xl'>Join</button>
                    </div>
                </div>
            </div>
            <div className='pt-7 flex justify-between'>
                    <div className='text-gray-500'>
                        <p className='flex items-center'><Copyright size={16} color="gray" strokeWidth={1.5} /> 2026 SAVORE Culinary Ltd. All rights reserved.</p>
                    </div>
                    <div className='flex gap-3 text-gray-500'>
                        <p>FAQs</p>
                        <p>Delivery Areas</p>
                        <p>Contact Support</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                    </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
