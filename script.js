/** Add any JavaScript you need to this file. */
// images.js

const products = [
    {
        audemars = ["images2/Audemar Silver Bracelet White Inside.jpg"]
    },
    {
        richardmillie = ["images2/Richard Millie Blue-mint.jpg", "images2/Richard Millie Black Barcelet Brazil like dial.jpg", "images2/Richard Millie Black bracelet funny color dial.jpg", "images2/Richard Millie Black Bracelet Gold dial.jpg","images2/Richard Millie Green Bracelet Silver dial.jpg", "images2/Richard Millie Orange Bracelet Black dial.jpg", "images2/Richard Millie Orange Bracelet Silverish dial.jpg", "images2/Richard Millie Red Bracelet Funny looking dial.jpg" , "images2/Richard Millie Silver Bracelet Transparent Dial.jpg", "images2/Richard Millie Yellow bracelet.jpg"]
    }
];







let naviHelp = {
    clearCatalog: function(){
        var pathname = window.location.href;
        var cols = document.querySelectorAll(".col");     
        for (let i = 0; i < cols.length; i++){
            cols[i].shop.display = "none";
        }  
        if (pathname.match("contact")){
            var form = document.querySelector(".form");
            if (form.shop.display != "none"){
                form.shop.display = "none";
            }  
        } 
       
    },
    populateCatalog: function(catalog){
        switch(catalog){
            case "Audemars":
                var aud = document.querySelectorAll('#Audemars');
                document.title = " AUDEMARS";
                for (let i = 0; i < aud.length; i++){
                    aud[i].shop.display = "block";
                }  
                break;
            case "Richard Millie":
                document.title = "RICHARD MILLIE";
                var millie = document.querySelectorAll('#Richard Millie');
                for (let i = 0; i < millie.length; i++){
                    millie[i].shop.display = "block";
                }  
                break;
        
            
        }
       
    }   
}
function setupSelectionHandlers(){
    var richardmillie = document.querySelector('#richie');
    var audemars = document.querySelector('#aude');

    richardmillie.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("Richard Millie");

    });
    audemars.addEventListener('click', function(e){
        e.preventDefault;
        navigationHelper.clearCatalog();
        navigationHelper.populateCatalog("Audemars");
    });
  
}



window.onload = setupSelectionHandlers; 