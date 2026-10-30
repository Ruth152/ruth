import { Dot } from "lucide-react";
import { dish } from "../../dish";
import { CookingPot } from "lucide-react";
import { Search } from "lucide-react";
import MenuList from "../../components/menuList";
import { useState } from "react";
import SearchFood from "../../components/searchFood";
import Error from "../error/error";


function Menu() {
  const [search, setSearch] = useState('');
   
      const filteredDishes = dish.filter((item) => {
        const query = search.trim().toLowerCase();

        return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.cuisine.toLowerCase().includes(query)
        
        )
    })
 
  console.log(dish)
  return (
    <div className="p-7 bg-gray-50 w-full">
      <div>
        <h5 className="text-orange-900 font-medium flex items-center"><span><Dot size={24} color="orange" strokeWidth={3} /></span>CULINARY COLLECTION 2026</h5>
        <div className="flex justify-between items-center">
         <div>
          <p className="text-green-950 font-medium text-4xl">Explore Our Curated Menu</p>
          <p className="text-gray-600">From fire-roasted mains to handcrafted desserts, explore seasonal dishes made to order by resident master chefs.</p>
         </div>
         <div className="flex gap-3 items-center">
         <div className="bg-green-900 flex items-center justify-center rounded-xl w-10 h-10"><CookingPot size={16} color="white" strokeWidth={1.5} /></div> 
         <div>
          <h6 className="font-medium text-xl">Kitchen Operational</h6>
          <p className="text-gray-600">Average delivery:28-35 mins</p>
         </div>
         </div>
        </div>
      </div>


      <div className="flex justify-between py-7">
        <div className="flex gap-3 bg-white rounded-xl p-2 w-220">
          <SearchFood search={search} setSearch={setSearch}/>
        </div>
        <div className="flex gap-4">
          <div>
            <select className="outline-none">
                <option value="price">Price</option>
                <option value="price:all">Price: All</option>
              </select>
          </div>
          <div>
            <select className="outline-none">
              <option value="sort">Sort</option>
              <option value="sort:popular">Sort: Popular</option>
            </select>
          </div>
        </div>
      </div>

      
      <div className="flex gap-7  ">
        <button>All</button>
        <button >Burgers</button>
        <button >Pizza</button>
        <button >Rice & Bowls</button>
        <button>Pasta</button>
        <button >Salads</button>
        <button >Sides & Wings</button>
        <button >Desserts</button>
        <button >Artisanal Dishes</button>
      </div>
     <div className="flex flex-wrap">
      {filteredDishes.length > 0 ? (
      filteredDishes.map((item) => (
      <MenuList key={item.dish_id} dish={item} />
    ))
  ) : (
    <p><Error/></p>
  )}
</div>
    </div>
  )
}

export default Menu;
