 
 const Avis=(e) =>     {
                        let like = e.parentElement.querySelector(".fa-heart")
                        console.log(like)
                        if(like.style.color !== "red")
                        like.style.color = "red"
                         else like.style.color = "black"

                        }



 const Delete = (d) => {  
                        let icon = d.parentElement.parentElement
                        console.log(icon)
                        icon.remove() 
                       } 

console.log()
           
            let z = document.querySelectorAll(".increment");
             for(let i of z) {
             i.addEventListener("click", (e) => { 

                     /***** increment quantity *****/

              let x=e.target.parentNode.querySelector (".quantity");
              x.innerText=(parseInt(x.innerText)) + 1;
  
                     /***** update the total *****/
            
             let t = e.target.parentNode.querySelector (".total");
             let unit = e.target.parentNode.querySelector(".price");
             t.innerText= (parseInt (t.innerText)) + (parseInt (unit)); 
                                                 });
             }


        let w = document.querySelectorAll(".decrement");
        for(let i of w){
        i.addEventListener("click", (e) =>{
        /***** increment quantity *****/
        let x=e.target.parentNode.querySelector(".quantity");
        if (parseInt(x.innerText) > 0) {
            x.innerText = (parseInt(x.innerText))-1;
            let t =  e.target.parentNode.querySelector (".total") ;
            let unit = e.target.parentNode.querySelector (".price");
            t.innerText = ( parseInt (t.innerText)) - (parseInt(unit));
        }

    });
    }
    








