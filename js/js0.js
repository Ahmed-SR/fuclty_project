function clear0() {
    document.getElementById('warning1_pass').innerHTML = ""; document.getElementById('warning2_pass').innerHTML = "";
    document.getElementById('warning3_pass').innerHTML = ""; document.getElementById('warningg4_pass').innerHTML = "";
    document.getElementById('warning5_pass').innerHTML = ""; document.getElementById('warning_email').innerHTML = "";
    document.getElementById('warning_phone').innerHTML = ""; document.getElementById('warning1_phone').innerHTML = "";
    document.getElementById('warning_name1').innerHTML = ""; document.getElementById('warning_name2').innerHTML = "";
    document.getElementById('warning_address').innerHTML = "";document.getElementById('warning_email2').innerHTML = "";
     document.getElementById('warning_phone3').innerHTML = "";document.getElementById('warning6_pass').innerHTML = "";
}
//var counter1 = 0, counter2 = 0, counter3 = 0;
function passwordd() {
    let user_data;
        //user_data = document.getElementById('pass').value;
        user_data = document.forms["myForm"]["fpass"].value;
    let data = user_data;
    if(data.length != 8){
        document.getElementById('warning5_pass').innerHTML = "number of char (8 characters).</br>";
    }else{
        document.getElementById('warning5_pass').innerHTML = "";
    }
    function check_data(data){
        if(data[0]< 'A' || data[0]>'Z'){
            document.getElementById('warning1_pass').innerHTML = "the first letter should be Uppercase Character.</br>";
              check_data(z);
        }else{
            document.getElementById('warning1_pass').innerHTML = ""; 
            var i,counter1 = 0,counter2 = 0,counter3 = 0;
            for(i=1;i<8;++i){
                if(data[i]>= '!' && data[i]<='/'){
                    counter1 += 1;
                }
                if(data[i] == ' '){
                    counter2 +=1;
                }
                if(data[i]>=0 && data[i] <= 9){
                    counter3 += 1;   
                }
            }
            if(counter1 == 0){
                document.getElementById('warning2_pass').innerHTML = "password should have special char like *,+,%,$.</br>";  
                //counter1 = 0;
            }else{
                document.getElementById('warning2_pass').innerHTML = ""; 
            }
            if(counter2 != 0){
                document.getElementById('warning3_pass').innerHTML = "password should not have any spaces.</br>";
                //counter2 = 0;
            }else{
                document.getElementById('warning3_pass').innerHTML = "";
            }
            if(counter3 != 0){
                document.getElementById('warningg4_pass').innerHTML = "";   
            }else{
                document.getElementById('warningg4_pass').innerHTML = "password should have one digit at least.";
                //counter3 = 0;
            }
        }
    }
    check_data(data);
}
function email(){
    let mail,i,counter4=0;
    mail = document.getElementById('e_mail').value;
    for(i=0;i<mail.length;++i){
        if(mail[i] == '@'){
            counter4 += 1;
        }
    }
    if(counter4 == 0){
        document.getElementById('warning_email').innerHTML = "email should have one ( @ )"; 
    }else{
        document.getElementById('warning_email').innerHTML = "";
    }
    if(counter4 > 1 && counter4 != 0){
        document.getElementById('warning_email').innerHTML = "please email should have only one ( @ ) no more than one";
    }     
}
function phhone(){
    let phonne,i,counter5=0;
    phonne = document.getElementById('phonee').value;
//    console.log(phonne[10]));
    if(phonne.length != 11){
        document.getElementById('warning_phone').innerHTML = "phone number (11 numbers)</br>";
    }else{
        document.getElementById('warning_phone').innerHTML = "";
    }
    for(i=0;i<11;++i){
        if(phonne[i]>=0){
            ;
        }else{
            counter5 += 1;
        }
    }
    if(counter5 != 0){
        document.getElementById('warning1_phone').innerHTML = "All input must be Numbers";
    }else{
        document.getElementById('warning1_phone').innerHTML = "";
    }
}
function namee() {
    var fn = document.getElementById('fname').value;
    var ln = document.getElementById('lname').value;
    var ad = document.getElementById('address').value;
    var pas = document.getElementById('pass').value;
    var pho = document.getElementById('phonee').value;
    var ema = document.getElementById('e_mail').value;
    console.log("ds");
    if(fn == ""){
    document.getElementById('warning_name1').innerHTML = "Required.";
    }else{
        document.getElementById('warning_name1').innerHTML = "";
    }
    if(ln == ""){
    document.getElementById('warning_name2').innerHTML = "Required.";
    }else{
        document.getElementById('warning_name2').innerHTML = "";
    }
    if(ad == ""){
    document.getElementById('warning_address').innerHTML = "Required.";
    }else{
        document.getElementById('warning_address').innerHTML = "";
    }
    if(pas == ""){
    document.getElementById('warning6_pass').innerHTML = "Required.";
    }else{
        document.getElementById('warning6_pass').innerHTML = "";
    }
   if(ema == ""){
    document.getElementById('warning_email2').innerHTML = "Required.";
    }else{
        document.getElementById('warning_email2').innerHTML = "";
    }
   if(pho == ""){
    document.getElementById('warning_phone3').innerHTML = "Required.";
    }else{
        document.getElementById('warning_phone3').innerHTML = "";
    }
}


