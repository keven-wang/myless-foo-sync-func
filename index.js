module.exports = function(myless){
    var args = [].slice.call(arguments, 1).map(function(i){ 
        return i.value;
    });

    var result = JSON.stringify(""
        + "foo-sync-func => input args: " 
        + args.join(", ")
    );
    
    return myless.util.value.toLessStr(result);
}