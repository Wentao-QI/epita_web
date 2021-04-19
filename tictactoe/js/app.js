let cols = document.querySelectorAll(".col");
let current_player = 1;
let a1 = document.querySelector('.a1');
let a2 = document.querySelector('.a2');
let a3 = document.querySelector('.a3');
let b1 = document.querySelector('.b1');
let b2 = document.querySelector('.b2');
let b3 = document.querySelector('.b3');
let c1 = document.querySelector('.c1');
let c2 = document.querySelector('.c2');
let c3 = document.querySelector('.c3');

cols.forEach((col) => {
    col.onclick = (e) => {
        //checked if the player can click on the cell
        if(e.target.innerHTML == ""){
            //put the symbol in the col
            e.target.innerHTML = document.querySelector('.player'+current_player+'_play').innerHTML;
            

            
            //check the win(horizontal)
            if(a1.innerHTML != "" && a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            if(b1.innerHTML != "" && b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            if(c1.innerHTML != "" && c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML){
                alert("Player "+current_player+" win the game !");
            }

            //check the win(vertical)
            if(a1.innerHTML != "" && a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            if(a2.innerHTML != "" && a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            if(a3.innerHTML != "" && a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML){
                alert("Player "+current_player+" win the game !");
            }

            //check the win(diagonal)
            if(a1.innerHTML != "" && a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            if(a3.innerHTML != "" && a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML){
                alert("Player "+current_player+" win the game !");
            }
            





            document.querySelector(".player"+current_player).classList.remove("active");
            //switch the current_player after playing
            if(current_player == 1){
                current_player=2;

            }else{
                current_player=1;
            }
            
            document.querySelector(".player"+current_player).classList.add("active");

           
        
        }else{
            //when a player play in a not empty box
            alert("The box is already filled in.");
        }



    }
    
});