function action()
{
    var on=document.getElementById("child");
    var pos=0;
    var id=setInterval(inelement, 5);
    function inelement()
    {
        if(pos==600)
        {
            clearTimeout(id);
        }
        else{
            pos++;
            on.style.top=pos+'px';
            on.style.left=pos+'px';
        }
    }
}