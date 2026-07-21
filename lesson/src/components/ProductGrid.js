import React, {useState} from "react";
import ProductCart from "./ProductCart";
import ProductDetailModel from "./ProductDetailModel";
import "./ProductGrid.css"

const products = [
    {id:1,name:"Loba",price:240,catogary:"Latinas",
        image:"https://r34xyz.b-cdn.net/posts/630/630814/630814.small.jpg",
        description:"Loba-grade Vagina sound wave",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://rule34vault.com/loba_%28apex_legends%29"
    },
    {id:2,name:"Maya",price:240,catogary:"Arab BEST ONE",
        image:"https://imagex1.sx.cdn.live/images/pinporn/2017/01/16/17228907.jpg?width=620",
        description:"Maya-grade Vagina 'OMAR'S Favorite!!!'",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://www.sex.com/en/pics?search=hijab+asian"
    },
    {id:3,name:"Therese",price:240,catogary:"Christian vagina",
        image:"https://photos.xgroovy.com/contents/albums/sources/472000/472222/475176.jpg",
        description:"Therese-grade Vagina hot",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://www.pornpics.com/?q=chubby+tattoo"
    },
    {id:4,name:"Lara",price:240,catogary:"Lara",
        image:"https://cdni.pornpics.com/1280/7/369/65593028/65593028_198_5847.jpg",
        description:"Lara-grade Vagina animals vagina",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://www.pornpics.com/?q=short+latina"
    },
    {id:5,name:"Rasha",price:240,catogary:"Shia vagina",
        image:"https://static-eu-cdn.eporner.com/gallery/lM/pE/e6f3PYqpElM/168840-chubby-ginger_880x660.jpg",
        description:"Rasha-grade Vagina shia nice",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://www.pornpics.com/?q=chubby+ginger"
    },
    {id:6,name:"Sara",price:240,catogary:"Nerdy vagina",
        image:"https://static-eu-cdn.eporner.com/gallery/2Y/eW/6BHweUUeW2Y/1045252-would-you-date-a-girl-with-small-boobs-how-about_880x660.jpg",
        description:"Sara-grade Vagina glasses vagina",
        details:"Her vagina crafted from pure sexual needs"
        ,type:"https://www.pornpics.com/?q=redhead+with+glasses"
    }
]

function ProductGrid(){
 const [selected,setSelected] = useState(null);
 return(
    <>
    <section className="product-grid">
        {
            products.map((p)=>(
                <ProductCart key={p.id} product={p} onClick={()=>setSelected(p)}/>
            ))
        }
    </section>
    {selected && (<ProductDetailModel product={selected} onClose={()=>setSelected(null)}/>)}
    </>
 )
}

export default ProductGrid;