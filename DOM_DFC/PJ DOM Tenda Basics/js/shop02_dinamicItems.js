document.querySelectorAll(".cardAdd").forEach(function(element){
    element.addEventListener('click', function(){
        var dataID = element.getAttribute('data-id');
        addToCart(dataID);
    });
});
