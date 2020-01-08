//first gallery
const game_nav_01 = document.querySelector(".game_nav_01");
const gallery_01 = document.querySelector(".gallery_01");

//second gallery
const game_nav_02 = document.querySelector(".game_nav_02");
const gallery_02 = document.querySelector(".gallery_02");

//third gallery
const game_nav_03 = document.querySelector(".game_nav_03");
const gallery_03 = document.querySelector(".gallery_03");

//first web img
const web_nav_01 = document.querySelector(".web_nav_01");
const web_01 = document.querySelector(".web_01");

//second web img
const web_nav_02 = document.querySelector(".web_nav_02");
const web_02 = document.querySelector(".web_02");

//third web img
const web_nav_03 = document.querySelector(".web_nav_03");
const web_03 = document.querySelector(".web_03");

////////////////////
//  FIRST GALLERY
///////////////////

game_nav_01.addEventListener("click",()=>{
    
    // if no gallery is active, activate first gallery
    // if(gallery_01.classList.contains("c-disabled")){

    //     //activate first
    //     gallery_01.classList.remove("c-disabled");
    //     gallery_01.classList.add("c-active");
    // } 
    
     // if second gallery is active, activate first gallery
     if(gallery_02.classList.contains("c-active")){
        
        //disable second
        gallery_02.classList.remove("c-active");
        gallery_02.classList.add("c-disabled");
        
        //activate first
        gallery_01.classList.remove("c-disabled");
        gallery_01.classList.add("c-active");
    } 

      // if third gallery is active, activate first gallery
      if(gallery_03.classList.contains("c-active")){
        
        //disable third
        gallery_03.classList.remove("c-active");
        gallery_03.classList.add("c-disabled");
        
        //activate first
        gallery_01.classList.remove("c-disabled");
        gallery_01.classList.add("c-active");
    } 

    ////////CONNECT WEB IMAGES////////////////////

       // if first web is active, activate first gallery
    if(web_01.classList.contains("c-active")){

         //disable first web
         web_01.classList.remove("c-active");
         web_01.classList.add("c-disabled");

        //activate first game
        gallery_01.classList.remove("c-disabled");
        gallery_01.classList.add("c-active");
    } 
    
       // if second web is active, activate first gallery
        if(web_02.classList.contains("c-active")){

            //disable first web
            web_02.classList.remove("c-active");
            web_02.classList.add("c-disabled");

        //activate first game
        gallery_01.classList.remove("c-disabled");
        gallery_01.classList.add("c-active");
    } 

        // if third web is active, activate first gallery
    if(web_03.classList.contains("c-active")){

        //disable first web
        web_03.classList.remove("c-active");
        web_03.classList.add("c-disabled");

       //activate first game
       gallery_01.classList.remove("c-disabled");
       gallery_01.classList.add("c-active");
   } 

       
});

////////////////////
//  SECOND GALLERY
///////////////////

game_nav_02.addEventListener("click",()=>{
   
    // if no gallery is active, activate second gallery
    if(gallery_02.classList.contains("c-disabled")){

        //activate second
        gallery_02.classList.remove("c-disabled");
        gallery_02.classList.add("c-active");
    }
    
    // if first gallery is active, activate second gallery
    if(gallery_01.classList.contains("c-active")){
        
        //disable second
        gallery_01.classList.remove("c-active");
        gallery_01.classList.add("c-disabled");
        
        //activate first
        gallery_02.classList.remove("c-disabled");
        gallery_02.classList.add("c-active");
    }

    // if third gallery is active, activate second gallery
    if(gallery_03.classList.contains("c-active")){
        
        //disable second
        gallery_03.classList.remove("c-active");
        gallery_03.classList.add("c-disabled");
        
        //activate first
        gallery_02.classList.remove("c-disabled");
        gallery_02.classList.add("c-active");
    }

    ////////CONNECT WEB IMAGES////////////////////

       // if second web is active, activate second gallery
       if(web_02.classList.contains("c-active")){

        //disable first web
        web_02.classList.remove("c-active");
        web_02.classList.add("c-disabled");

       //activate first game
       gallery_02.classList.remove("c-disabled");
       gallery_02.classList.add("c-active");
   } 

   
   
      // if first web is active, activate second gallery
       if(web_01.classList.contains("c-active")){

           //disable first web
           web_01.classList.remove("c-active");
           web_01.classList.add("c-disabled");

       //activate first game
       gallery_02.classList.remove("c-disabled");
       gallery_02.classList.add("c-active");
   } 

       // if third web is active, activate second gallery
   if(web_03.classList.contains("c-active")){

       //disable first web
       web_03.classList.remove("c-active");
       web_03.classList.add("c-disabled");

      //activate first game
      gallery_02.classList.remove("c-disabled");
      gallery_02.classList.add("c-active");
  }

});

////////////////////
//  THIRD GALLERY
///////////////////
game_nav_03.addEventListener("click",()=>{
   
    // if no gallery is active, activate second gallery
    if(gallery_03.classList.contains("c-disabled")){

        //activate third
        gallery_03.classList.remove("c-disabled");
        gallery_03.classList.add("c-active");
    }
    
    // if first gallery is active, activate third gallery
    if(gallery_01.classList.contains("c-active")){
        
        //disable second
        gallery_01.classList.remove("c-active");
        gallery_01.classList.add("c-disabled");
        
        //activate first
        gallery_03.classList.remove("c-disabled");
        gallery_03.classList.add("c-active");
    } 

    // if second gallery is active, activate third gallery
    if(gallery_02.classList.contains("c-active")){
        
        //disable second
        gallery_02.classList.remove("c-active");
        gallery_02.classList.add("c-disabled");
        
        //activate first
        gallery_03.classList.remove("c-disabled");
        gallery_03.classList.add("c-active");
    }


    ////////CONNECT WEB IMAGES////////////////////

       // if third web is active, activate third gallery
       if(web_03.classList.contains("c-active")){

        //disable first web
        web_03.classList.remove("c-active");
        web_03.classList.add("c-disabled");

       //activate first game
       gallery_03.classList.remove("c-disabled");
       gallery_03.classList.add("c-active");
   } 
   
      // if first web is active, activate third gallery
       if(web_01.classList.contains("c-active")){

           //disable first web
           web_01.classList.remove("c-active");
           web_01.classList.add("c-disabled");

       //activate first game
       gallery_03.classList.remove("c-disabled");
       gallery_03.classList.add("c-active");
   } 

       // if third web is active, activate second gallery
   if(web_03.classList.contains("c-active")){

       //disable first web
       web_03.classList.remove("c-active");
       web_03.classList.add("c-disabled");

      //activate first game
      gallery_02.classList.remove("c-disabled");
      gallery_02.classList.add("c-active");
  } 


  if(web_02.classList.contains("c-active")){

    web_02.classList.remove("c-active");
    web_02.classList.add("c-disabled");

    gallery_03.classList.remove("c-disabled");
    gallery_03.classList.add("c-active");

}

});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////
//  FIRST WEB
///////////////////

web_nav_01.addEventListener("click",()=>{
    //if second web is active ,activate first web
    if(web_02.classList.contains("c-active")){

        
        web_02.classList.remove("c-active");
        web_02.classList.add("c-disabled");

        web_01.classList.remove("c-disabled");
        web_01.classList.add("c-active");
    }

     //if third web is active ,activate first web
     if(web_03.classList.contains("c-active")){

        
        web_03.classList.remove("c-active");
        web_03.classList.add("c-disabled");

        web_01.classList.remove("c-disabled");
        web_01.classList.add("c-active");
    }

      ////////CONNECT GAME CAROUSELS////////////////////

     //if first game is active, activate first web
     if(gallery_01.classList.contains("c-active")){


        gallery_01.classList.remove("c-active");
        gallery_01.classList.add("c-disabled");

        web_01.classList.remove("c-disabled");
        web_01.classList.add("c-active");
    }

    //if second game is active, activate first web
    if(gallery_02.classList.contains("c-active")){


        gallery_02.classList.remove("c-active");
        gallery_02.classList.add("c-disabled");

        web_01.classList.remove("c-disabled");
        web_01.classList.add("c-active");
    }

    //if third game is active, activate first web
    if(gallery_03.classList.contains("c-active")){


        gallery_03.classList.remove("c-active");
        gallery_03.classList.add("c-disabled");

        web_01.classList.remove("c-disabled");
        web_01.classList.add("c-active");
    }
})

////////////////////
//  SECOND WEB
///////////////////

web_nav_02.addEventListener("click",()=>{

     //if first web is active ,activate second web
     if(web_01.classList.contains("c-active")){

        
        web_01.classList.remove("c-active");
        web_01.classList.add("c-disabled");

        web_02.classList.remove("c-disabled");
        web_02.classList.add("c-active");
    }

     //if third web is active ,activate second web
     if(web_03.classList.contains("c-active")){

        
        web_03.classList.remove("c-active");
        web_03.classList.add("c-disabled");

        web_02.classList.remove("c-disabled");
        web_02.classList.add("c-active");
    }

      ////////CONNECT WEB IMAGES////////////////////

     //if second game is active, activate second web
     if(gallery_02.classList.contains("c-active")){


        gallery_02.classList.remove("c-active");
        gallery_02.classList.add("c-disabled");

        web_02.classList.remove("c-disabled");
        web_02.classList.add("c-active");
    }

    //if first game is active, activate second web
    if(gallery_01.classList.contains("c-active")){


        gallery_01.classList.remove("c-active");
        gallery_01.classList.add("c-disabled");

        web_02.classList.remove("c-disabled");
        web_02.classList.add("c-active");
    }

    //if third game is active, activate second web
    if(gallery_03.classList.contains("c-active")){


        gallery_03.classList.remove("c-active");
        gallery_03.classList.add("c-disabled");

        web_02.classList.remove("c-disabled");
        web_02.classList.add("c-active");
    }
})

////////////////////
//  THIRD WEB
///////////////////

web_nav_03.addEventListener("click",()=>{

     //if first web is active ,activate third web
     if(web_01.classList.contains("c-active")){

        
        web_01.classList.remove("c-active");
        web_01.classList.add("c-disabled");

        web_03.classList.remove("c-disabled");
        web_03.classList.add("c-active");
    }

    //if second web is active ,activate third web
    if(web_02.classList.contains("c-active")){

        
        web_02.classList.remove("c-active");
        web_02.classList.add("c-disabled");

        web_03.classList.remove("c-disabled");
        web_03.classList.add("c-active");
    }


       ////////CONNECT WEB IMAGES////////////////////

        //if first game is active,activate third web 
    if(gallery_01.classList.contains("c-active")){

        
        gallery_01.classList.remove("c-active");
        gallery_01.classList.add("c-disabled");

        web_03.classList.remove("c-disabled");
        web_03.classList.add("c-active");
    }

     //if second game is active, activate third web
     if(gallery_02.classList.contains("c-active")){


        gallery_02.classList.remove("c-active");
        gallery_02.classList.add("c-disabled");

        web_03.classList.remove("c-disabled");
        web_03.classList.add("c-active");
    }

    //if third game is active, activate third web
    if(gallery_03.classList.contains("c-active")){


        gallery_03.classList.remove("c-active");
        gallery_03.classList.add("c-disabled");

        web_03.classList.remove("c-disabled");
        web_03.classList.add("c-active");
    }
 
})