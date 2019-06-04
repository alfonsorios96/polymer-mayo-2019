// INCLUDES();
Array.prototype.cassandraInclude=function(item){
    let myArray=this;
    for(const elemento of myArray){
        if(elemento===item) return true;
    }
    return false;
}