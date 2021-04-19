
//first carousel
const webFirst = document.querySelector(".web_01");
const firstWebBtn = document.querySelector(".Web_one"); 

//second carousel
const webSecond = document.querySelector(".web_02");
const secondWebBtn = document.querySelector(".Web_two");

//third carousel
const webThird = document.querySelector(".web_03");
const thirdWebBtn = document.querySelector(".Web_three");


/* //// FIRST WEBSITE ////  */
firstWebBtn.onclick = function(event)
{
    if(!webFirst.classList.contains('show')){
        webFirst.classList.add('show');
        webFirst.classList.remove('hide');

        webSecond.classList.remove('show');
        webSecond.classList.add('hide');

        webThird.classList.remove('show');
        webThird.classList.add('hide');


        event.preventDefault();
    }
    else
    {
       webFirst.classList.remove('show');
        webFirst.classList.add('hide');


        event.preventDefault();
    }
}

/* //// SEDOND WEBSITE ////  */


secondWebBtn.onclick = function(event)
{
    if(!webSecond.classList.contains('show')){
        webSecond.classList.add('show');
        webSecond.classList.remove('hide');

        webFirst.classList.remove('show');
        webFirst.classList.add('hide');

        webThird.classList.remove('show');
        webThird.classList.add('hide');


        event.preventDefault();
    }
    else
    {
        webSecond.classList.remove('show');
        webSecond.classList.add('hide');

        event.preventDefault();
    }
}

/* //// THIRD WEBSITE ////  */

thirdWebBtn.onclick = function(event)
{
    if(!webThird.classList.contains('show')){
        webThird.classList.add('show');
        webThird.classList.remove('hide');

        webFirst.classList.remove('show');
        webFirst.classList.add('hide');

        webSecond.classList.remove('show');
        webSecond.classList.add('hide');


        event.preventDefault();
    }
    else
    {
        webThird.classList.remove('show');
        webThird.classList.add('hide');

        event.preventDefault();
    }
}