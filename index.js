function openNav()
{
    document.getElementById("the-sidebar").style.width = "150px";
    document.getElementById("main").style.marginLeft = "150px";
}

function closeNav()
{
    document.querySelector("#the-sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}