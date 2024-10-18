let count=0;

function display()
{
    count++
    console.log(count);
    setTimeout( display,1000)
}


setTimeout( display, 1000);

