let y = document.getElementsByClassName("flex-section");
let count = document.getElementsByClassName("flex-section").length;
for(let i=0; i<count ;i++)
{
    let z = y[i].getElementsByClassName("img-flex");
    let n = z.length;
    let p = 100.0/y[i].getElementsByClassName("hidden")[0].innerHTML;
    for(let j=0; j<n; j++)
    {
        z[j].style.width = `${p}%`
    }
}
