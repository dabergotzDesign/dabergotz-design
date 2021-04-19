
//first carousel
const gameFirst = document.querySelector(".game_01");
const firstGameBtn = document.querySelector(".Game_one"); 

//second carousel
const gameSecond = document.querySelector(".game_02");
const secondGameBtn = document.querySelector(".Game_two");

//third carousel
const gameThird = document.querySelector(".game_03");
const thirdGameBtn = document.querySelector(".Game_three");


/* //// FIRST GAME ////  */
firstGameBtn.onclick = function(event)
{
    if(!gameFirst.classList.contains('show')){
        gameFirst.classList.add('show');
        gameFirst.classList.remove('hide');

        gameSecond.classList.remove('show');
        gameSecond.classList.add('hide');

        gameThird.classList.remove('show');
        gameThird.classList.add('hide');


        event.preventDefault();
    }
    else
    {
       gameFirst.classList.remove('show');
        gameFirst.classList.add('hide');


        event.preventDefault();
    }
}

/* //// SEDOND GAME ////  */


secondGameBtn.onclick = function(event)
{
    if(!gameSecond.classList.contains('show')){
        gameSecond.classList.add('show');
        gameSecond.classList.remove('hide');

        gameFirst.classList.remove('show');
        gameFirst.classList.add('hide');

        gameThird.classList.remove('show');
        gameThird.classList.add('hide');


        event.preventDefault();
    }
    else
    {
        gameSecond.classList.remove('show');
        gameSecond.classList.add('hide');

        event.preventDefault();
    }
}

/* //// THIRD GAME ////  */

thirdGameBtn.onclick = function(event)
{
    if(!gameThird.classList.contains('show')){
        gameThird.classList.add('show');
        gameThird.classList.remove('hide');

        gameFirst.classList.remove('show');
        gameFirst.classList.add('hide');

        gameSecond.classList.remove('show');
        gameSecond.classList.add('hide');


        event.preventDefault();
    }
    else
    {
        gameThird.classList.remove('show');
        gameThird.classList.add('hide');

        event.preventDefault();
    }
}