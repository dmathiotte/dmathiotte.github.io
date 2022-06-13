let project = document.getElementsByClassName("projectname")

project.addEventListener ("mouseover", function(event)
{
    event.target.style.color = "purple";

    setTimeout(function()
    {
        event.target.style.color = "";
    }, 100)
}, false)