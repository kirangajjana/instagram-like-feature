let like =document.querySelector('#cardborder')
let love=document.querySelector('i')
let content=document.querySelector('#like')


like.addEventListener('click',function()
{
    love.style.color='red';
    love.style.opacity=1;
    setTimeout(function()
{
    love.style.transform="Transition(-50%,-50%)scale(0)";
    love.style.opacity=0;

},3000)
})



