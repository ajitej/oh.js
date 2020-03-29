const find = {
    find: function(Obj, key, returnValue = true){
        if(Obj && Obj != {}){  // add check for valid obj here
            if(returnValue) {
                let val;
                Object.keys(Obj).map(item => {
                    if(item == key){
                        val = Obj[key];
                    }
                });
                return val;
            }else{
                return Obj.hasOwnProperty(key);
            }
        }
    }
}

module.exports = find;