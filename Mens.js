let MensData=[
    {
        type:"pant",
        name:"Bonobos",
        img_url:"https://n.nordstrommedia.com/id/sr3/4414f97d-cadf-41a4-ba5b-9aa8e5a0a580.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",        
        price: "8,252.26"
    },
    {
        type:"pant",
        name:"vuori",
        img_url:"https://n.nordstrommedia.com/id/sr3/cea59391-4670-41e4-9f96-583266948809.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"7,418.70"
    },
    {
        type:"pant",
        name:"AG",
        img_url:"https://n.nordstrommedia.com/id/sr3/0e7486a9-93bb-47d9-947c-5a4052ff4157.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"16,504.53"
    },
    {
        type:"pant",
        name:"Devil-Dog Dungarees",
        img_url:"https://n.nordstrommedia.com/id/sr3/0c42f6d8-50b0-47d4-b057-330b2622f7f9.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",     
        price:"4,938.85"
    },
    {
        type:"pant",
        name:"Bonobos",
        img_url:"https://n.nordstrommedia.com/id/sr3/f553ea53-5fe2-4b95-917b-d1250db7c161.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"8,168.91"
    },
    {
        type:"pant",
        name:"vuori",
        img_url:"https://n.nordstrommedia.com/id/sr3/3eba4372-4be0-4864-80ef-7adb28bca83f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"7,001.92"
    },
    {
        type:"short",
        name:"vuori",
        img_url:"https://n.nordstrommedia.com/id/sr3/937d5b3b-70ec-411c-b430-514b9dc8b1e1.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"5,668.22"
    },
    {
        type:"short",
        name:"Kore Shorts",
        img_url:"https://n.nordstrommedia.com/id/sr3/6e25ad32-57e1-4038-8d58-cc5e1d433bb3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"5,668.22"
    },
    {
        type:"short",
        name:"Zella",
        img_url:"https://n.nordstrommedia.com/id/sr3/68f62117-fff3-4d2a-b0bd-f851fde947df.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"4,918.02"
    },
    {
        type:"jeans",
        name:"PAIGE",
        img_url:"https://n.nordstrommedia.com/id/sr3/f305d54f-b29d-44cd-b946-8667a0964ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"15,420.90"
    },
    {
        type:"jeans",
        name:"PAIGE",
        img_url:"https://n.nordstrommedia.com/id/sr3/f305d54f-b29d-44cd-b946-8667a0964ab6.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"12,420.90"
    },
    {
        type:"jeans",
        name:"PURPLE BRAND",
        img_url:"https://n.nordstrommedia.com/id/sr3/bf62c12f-2694-476f-b2a2-f8b4a290ae40.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"15,670.97"
    },
    {
        type:"jeans",
        name:"PURPLE BRAND",
        img_url:"https://n.nordstrommedia.com/id/sr3/bf62c12f-2694-476f-b2a2-f8b4a290ae40.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"10,670.97"

    },
    {
        type:"jeans",
        name:"AG",
        img_url:"https://n.nordstrommedia.com/id/sr3/c21b278c-c21d-4f3f-962c-96ffd679daba.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"12,340.67"
    },
    {
        type:"shirt",
        name:"ROBERT BARAKETT",
        img_url:"https://n.nordstrommedia.com/id/sr3/18edfd0b-1602-4909-9263-6ea261993b69.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"3,670"
    },
    {
        type:"shirt",
        name:"Zella",
        img_url:"https://n.nordstrommedia.com/id/sr3/c5851198-17e4-40c3-b8d3-68c0c27041c3.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"7,444.60"
    },
    {
        type:"polo-shirt",
        name:"Matrix",
        img_url:"https://n.nordstrommedia.com/id/sr3/cfe14caf-6c6e-4154-8687-c0b2cf757c4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"6,750"
    }
    ,{
        type:"polo-shirt",
        name:"Matrix",
        img_url:"https://n.nordstrommedia.com/id/sr3/cfe14caf-6c6e-4154-8687-c0b2cf757c4c.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        price:"7,750"
    }


];
let Mens_Page=document.getElementById("Mens_product");
let filter_tag=document.getElementById("Mens");
DisplayMensProduct(MensData)

filter_tag.addEventListener("change",function ()
{
    if(filter_tag.value==="All")
    {
        DisplayMensProduct(MensData)
    }
    else if(filter_tag.value=="pant")
    {
        let products=MensData.filter(function(el)
        {
            return el.type===filter_tag.value
        })
        console.log(products)
        DisplayMensProduct(products)
    }
    else if(filter_tag.value=="short")
    {
        let products=MensData.filter(function(el)
        {
            return el.type===filter_tag.value
        })
        DisplayMensProduct(products)
    }else if(filter_tag.value=="jeans")
    {
        let products=MensData.filter(function(el)
        {
            return el.type===filter_tag.value
        })
        
        DisplayMensProduct(products)
    }else if(filter_tag.value=="polo-shirt")
    {
        let products=MensData.filter(function(el)
        {
            return el.type===filter_tag.value
        })
        
        DisplayMensProduct(products)
    }else if(filter_tag.value=="shirt")
    {
        let products=MensData.filter(function(el)
        {
            return el.type===filter_tag.value
        })
        
        DisplayMensProduct(products)
    }
    
})
//DisplayMensProduct(MensData)
function DisplayMensProduct(product_Data)
{
    Mens_Page.innerHTML="";
    product_Data.forEach(function(el)
    {
        let product=document.createElement("div");
        product.setAttribute("class","product")
        document.innerHTML="&#9733; &#9733; &#9733;"
        let image=document.createElement("img");
        let p1=document.createElement("p");
        let p2=document.createElement("p");
        let bt=document.createElement("button")
        bt.innerText="Add to Bag"
        p2.textContent="INR: "+el.price;
        p1.textContent=el.name;
        image.src=el.img;
        
        product.append(image,p1,p2,bt);
        Mens_Page.append(product)

    })
    
}



