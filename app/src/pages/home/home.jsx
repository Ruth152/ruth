import { Play } from "lucide-react";
import { food } from "../../data";
import { dish } from "../../dish";
import MenuList from "../../components/menuList";
import FoodList from "../../components/foodList";
import { Leaf } from "lucide-react";
import { Motorbike } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { UtensilsCrossed } from "lucide-react";
import { Star } from "lucide-react";
import { Utensils } from "lucide-react";
import {useNavigate} from 'react-router-dom'

function Home() {
    const  navigate = useNavigate();
    const handleClick=()=>{
        navigate("/menu")
    }
  return (
     
    <div className="h-fit bg-gray-50">
        <div className='flex justify-between bg-green-900 px-7 py-1'>
            <div className='flex gap-7'>
                <p className='text-orange-700'>Live Kitchen</p>
                <p className='text-gray-300'>Average courier arrival time:<span className="text-white">24 mins</span> across Lagos</p>
            </div>
            <div className='flex gap-7'>
                <p className='text-gray-300'>100% Compostable  Packaging</p>
                <p className="text-white">Free delivery over ₦15,000 </p>
            </div>
        </div>

        <div className="px-7 w-150">
            <div className="bg-gray-200 w-75 mt-12 flex justify-center rounded-4xl">
                <p className="font-medium">CURATED GASTRONOMY <span className="text-gray-600">/ Issue No. 04</span></p>
            </div>
            <div className="pt-4">
                <h3 className="text-5xl text-green-950 font-medium">Artisanal Craft.</h3>
                <h3 className="text-5xl text-orange-700 font-medium">Everyday Comfort.</h3>
            </div>
            <div className="pt-4">
                <p className="text-gray-600">Carefully curated chef-inspired meals delivered fresh to your door in 30 minutes. Sourced from regenerative farms, seasoned with memory, plated for mordern living.</p>
            </div>
            <div className="flex pt-7 gap-5 items-center">
                <button onClick={handleClick} className="text-white bg-amber-800 px-7 py-1.5 rounded-4xl">Explore Menu</button>
                <button className="flex gap-2 items-center"><span className="bg-gray-200 p-2 rounded-full"><Play color="black" strokeWidth={1.5} /> </span>How It Works</button>
            </div>
            <div className="flex gap-13.75 pt-6">
                <div>
                    <h5 className="text-3xl font-bold font-sans">30<span className="text-2xl text-orange-400 font-medium">min</span></h5>
                    <p className="text-gray-600">Guaranteed warm</p>
                </div>
                <div>
                    <h5 className="text-3xl font-bold font-sans">4.9<span className="text-2xl text-orange-400 font-medium">★</span></h5>
                    <p className="text-gray-600">14k+ reviews</p>
                </div>
                <div>
                    <h5 className="text-3xl font-bold font-sans">100<span className="text-2xl text-orange-400 font-medium">%</span></h5>
                    <p className="text-gray-600">Artisanal scratch</p>
                </div>
            </div>
        </div>


        <div className="p-7 mt-7 bg-gray-200 w-full flex-wrap">
            <div>
                <h4 className="text-orange-700 font-medium">BROWSE BY TASTE</h4>
                <p className="text-2xl font-medium text-green-900">Culinary Disciplines</p>
            </div>
            <div className="flex gap-6">
                {food.map((item) =>(
                    <FoodList key={item.id} name={item.foodName} image={item.foodImage}/>
                ))}
            </div>
        </div>


        <div className="p-7">
            <div className="w-142.5">
                <h4 className="text-orange-700 font-medium">THE KITCHEN VAULT</h4>
                <p  className="text-3xl font-medium text-green-950">Bestselling Offerings</p>
                <p>Every plate is crafted to order with uncompromising culinary integrity and precise timimg</p>
            </div>
             <div className='flex flex-wrap'>
                    {dish?.map((dish) =>(
                      <MenuList key={dish.dish_id} dish={dish} />
                    ))}
                  </div>
        </div>


        <div></div>


        <div className="bg-gray-50 p-10">
            <div className="text-center">
                <h4 className="text-orange-700 font-medium">THE STANDARD</h4>
                <p  className="text-3xl font-medium text-green-950">Why SAVORE Stands Apart</p>
                <p className="text-gray-600">We reimagined culinary logistics from the ground up so that fine dining textures and temperatures arrive intact.</p>
            </div>

            <div className="p-7 w-full flex gap-7">
                <div className="bg-white p-5 rounded-2xl">
                    <div className="bg-gray-300  w-10 h-10 flex items-center justify-center rounded-xl"><Leaf  color="green" strokeWidth={1.5} /></div>
                    
                    <h5 className="text-xl font-medium text-green-950">Farm-to-Kitchen Freshness</h5>
                    <p className="text-gray-600">Direct partnerships with local eco-growers deliver heirloom produce harvested within 18 hours of preparation. No frozen bases, zero synthetic preservations.</p>
                    <p className="text-orange-700 font-medium flex">Read sourcing charter<ChevronRight color="orange" strokeWidth={1.5} /></p>
                </div>
                <div className="bg-white p-5 rounded-2xl">
                   <div className="bg-gray-300  w-10 h-10 flex items-center justify-center rounded-xl"><Motorbike color="orange" strokeWidth={1.5} /></div> 
                    <h5 className="text-xl font-medium text-green-950">Temperature-Controlled Fast Delivery</h5>
                    <p className="text-gray-600">Patented induction heated insulated pods ensure food never loses crispness or steam. Our 30-minute dispatch bubble guarantees oven-fresh temperatures at your table.</p>
                    <p className="text-orange-700 font-medium flex">Explore our fleet tech<ChevronRight color="orange" strokeWidth={1.5} /></p>
                </div>
                <div className="bg-white p-5 rounded-2xl">
                    <div className="bg-gray-300  w-10 h-10 flex items-center justify-center rounded-xl"><UtensilsCrossed color="white" strokeWidth={1.5} /></div> 
                    <h5 className="text-xl font-medium text-green-950">Chef-Crafted Perfection</h5>
                    <p className="text-gray-600">Culinary brigade trained in classical techiques. Every recipe is dailed in through sensory trials to withstand transit while preserving nuanced flavor depths.</p>
                    <p className="text-orange-700 font-medium flex">Meet the brigade<ChevronRight color="orange" strokeWidth={1.5} /></p>
                </div>
            </div>
        </div>


        <div className="bg-gray-200 py-10 px-7">
            <div>
                <h4 className="text-orange-700 font-medium">VERIFIED TABLES</h4>
                <div className="flex justify-between">
                    <p  className="text-3xl font-medium text-green-950">Voices of Our Diners</p>
                    <div className="flex rounded-2xl p-1 bg-white ">
                        <div className="flex "><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /></div>
                        <p className="font-bold">4.92 / 5<span className="text-gray-600">(14,200+ Verified Orders)</span></p>
                    </div>
                </div>
            </div>

            <div className="p-7 w-full flex gap-7">
                <div className="bg-white p-5 rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex "><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /></div>
                        <p className="text-gray-600">Yesterday</p>
                    </div>
                    <p className="py-2 text-gray-600">"The Signature Smash Burger arrived piping hot - the brioche was still crisp and wasn't soggy in the slightest. You can taste the genuine aged cheddar."</p>
                    <div className="flex gap-3">
                        <div  className="flex items-center justify-center color-white bg-green-900 rounded-full w-9 h-9">TO</div>
                        <div>
                            <p className="font-medium">Tola Ogundipe</p>
                            <p className="text-gray-600">Ikoyi <span className="text-green-950  font-bold">.</span> 28 orders</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-2xl ">
                    <div className="flex justify-between">
                        <div className="flex "><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /></div>
                        <p className="text-gray-600">3 days ago</p>
                    </div>
                    <p className="py-2 text-gray-600">"SAVORE ruined all other food apps for me. The smoky firewood nuance in the Jollof Rice Bowl matches top-tier wedding catering. Simply unforgettable."</p>
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center color-white bg-orange-800 rounded-full w-9 h-9">CA</div>
                        <div>
                            <p className="font-medium">Chidinma Anya</p>
                            <p className="text-gray-600">Victoria Island <span className="text-green-950  font-bold">.</span> 41 orders</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white p-5 rounded-2xl">
                    <div className="flex justify-between">
                        <div className="flex "><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /><Star color="orange" strokeWidth={3} /></div>
                        <p className="text-gray-600">5 days ago</p>
                    </div>
                    <p className="py-2 text-gray-600">"The Truffie Alfredo has actual shaved truffle shavings, not synthetic oil aromaa. Packaging was sleek and zero spills. 22 minutes doorstep delivery."</p>
                    <div className="flex gap-3">
                        <div className="flex items-center justify-center color-white bg-green-900 rounded-full w-9 h-9">FA</div>
                        <div>
                            <p className="font-medium">Femi Adeleke</p>
                            <p className="text-gray-600">Lekki 1 <span className="text-green-950  font-bold">.</span> 15 orders</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div className="bg-green-950 p-10 mx-7 my-10 rounded-2xl text-center">
            <div>
                <h5 className="text-orange-700 font-medium">START YOUR DINING EXPERIENCE</h5>
                <p className="text-4xl font-medium text-white p-5">Hungry? Your next great culinary moment is just a few clicks away.</p>
                <p className="text-gray-600">Join thousands enjoying high-craft gastronomy in the comfort of home. Order in under 60 seconds with live courier tracking.</p>
            </div>
            <div className="flex justify-center p-4 gap-6">
                <button onClick={handleClick} className="bg-orange-600 flex gap-2 p-3 rounded-2xl text-white font-medium">Browse Full Menu<Utensils size={24} color="white" strokeWidth={1.5} /></button>
                <button className="bg-transparent text-white">Artisanal Catering</button>
            </div>
        </div>
    </div>

  )
  
}

export default Home;