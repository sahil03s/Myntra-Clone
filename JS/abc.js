function abc() {
    let y = $(".freeShipping-sidebar")[0];
    let x = $(".freeShipping-arrow")[0]; 
    if(y.style.right == "576px")
    {   
        y.style.right = "0px";
        x.style.borderRight = "14px solid #fff";
        x.style.borderLeft = "0px";
        document.getElementsByClassName("freeShipping-banner-expanded")[0].style.display = "none";
    }
    else
    {
        y.style.right = "576px";
        x.style.borderLeft = "14px solid #fff";
        x.style.borderRight = "0px";
        document.getElementsByClassName("freeShipping-banner-expanded")[0].style.display = "block";  
    }
}