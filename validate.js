module.exports ={
    isUserNameValid : function(username){
        if(username.length<3||username.length>15){
            return false;
        }
        if(username.toLowerCase()!==username){
            return false;
        }
        return true;
    },isAgeValid : function(age){
        age2 = parseInt(age);
        if(age2 !== parseInt(age)){
            return false;
        }else if(age2 < 18 || age2 > 100){
            return false;
        }
        return true;
    },isPasswordValid: function(password){
        var a;
        var i;
        var special = 0;
        var upper = 0;
        var number = 0;
        for(i = 0;i<password.length;i++){
            a = password.charCodeAt(i);
            if((a>=33&&a<=47)||(a>=58&&a<=64)||(a>=91&&a<=96)||(a>=123&&a<=126)){
                special++;
            }
            if(a>=65&&a<=90){
                upper++;
            }
            if(a>=48&&a<=57){
                number++
            }
        }
        if(password.length < 8){
            return false;
        }if(special<1){
            return false;
        }if(upper<1){
            return false;
        }if(number<3){
            return false;
        }
        return true;
    },isDateValid: function(d,m,y){
        if(parseInt(d) < 1 || parseInt(d) > 31 ){
            return false;
        }else if(parseInt(m) < 1 || parseInt(m) > 12){
            return false;
        }else if(parseInt(y) < 1970 || parseInt(y) > 2020){
            return false;
        }else if(parseInt(m) == 1 || parseInt(m) == 3 || 
                parseInt(m) == 5 || parseInt(m) == 7 || 
                parseInt(m) == 8 || parseInt(m) == 10 || 
                parseInt(m) == 12){
            if(parseInt(d) < 1 || parseInt(d) > 31){
                return false;
            }
        }else if(parseInt(m) == 4 || parseInt(m) == 6 || 
                parseInt(m) == 9 || parseInt(m) == 11){
            if(parseInt(d) < 1 || parseInt(d) > 30){
                return false;
            }    
        }else if(parseInt(m) == 2){
            if(parseInt(y) % 100 == 0 && parseInt(y) % 400 == 0){
                if(parseInt(d) < 1 || parseInt(d) > 29){
                    return false;
                }
            }else{
                if(parseInt(d) < 1 || parseInt(d) > 28){
                    return false;
                }
            }
        }
        return true;
    }
}
