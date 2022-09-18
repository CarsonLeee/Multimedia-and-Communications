//Javascript to check if name is at least 4 char and does not contain a number
function checkName () {
    var nameBox = document.getElementById("cFullName");
    var name = nameBox.value;
    
    if(!isNaN(name) || name.length < 4){
        nameBox.style.borderColor = "red";
    }else{
        nameBox.style.borderColor = "green";
    }
}

//Javascript to check if email fits the pattern regex
function checkEmail(email){
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var emailBox = document.getElementById("cEmail");
    var email = emailBox.value;
    if (email.match(pattern)){
        emailBox.style.borderColor = "green";
    }else{
        emailBox.style.borderColor = "red";
    }
}

function checkProductID(id){
    var idBox = document.getElementById("cProduct");
    var id = idBox.value;
    
    var productId = ['AA11BB22', 'BB22CC33', 'CC33DD44', 'DD44EE55', 'EE55FF66', 'FF66GG77'];
    
    if(productId.includes(id) == true){
        idBox.style.borderColor = "green";
    }else{
        idBox.style.borderColor = "red";
    }
}

function checkMessage(){
    var messageBox = document.getElementById("cMessage");
    var message = messageBox.value;
    
    if((message.length > 10) && (message.length < 30)){
        messageBox.style.borderColor = "green";
    }else{
        messageBox.style.borderColor = "red";
    }
}

function sendMessage(){
    var modal = $('.modalBox');
    
    $('.login').click(function(){
        modal.show();
    });
    
    $('.close').click(function(){
        modal.hide();
    });
}

function scroll(){
    var t = window.scrollY;
    var para = document.getElementById("para");
    var m = -0.25;
    var b = 0;
    var newY = m*t + b;
    para.style.backgroundPositionY = newY + "px";
}

function scrollFire(){
    var t = window.scrollY;
    var nav = document.getElementById("navBarUnderline");
    
    var icon = document.getElementById("favicon");
    if(t>1000){
        icon.style.transform = "scale(2,2)";
    }
}

 function showAlert() {
    var myText = "Your item has been added to the cart";
    alert(myText);
}

 function showSubmit() {
    var myText = "Your form has been submitted";
    alert(myText);
}
