


function ContactURL(parameter,url){
    if(parameter){

        let newURL=  url+'?'
        let text={
            LIMIT:'limit',
            SORT:'sort',
            MODIFED:'modifiedSince',
            OFFSET:'offset'
        }
        
        if(parameter.limit){
            newURL=`${newURL}${text.LIMIT}=${parameter.limit}${CheckSize(parameter,parameter.limit)}`
        }
        if(parameter.sort){
            newURL=`${newURL}${text.SORT}=${parameter.sort}${CheckSize(parameter,parameter.sort)}`
        }
        if(parameter.offset){
            newURL=`${newURL}${text.OFFSET}=${parameter.offset}${CheckSize(parameter,parameter.offset)}`
        }
        if(parameter.modifiedSince){
            newURL=`${newURL}${text.MODIFED}=${parameter.modifiedSince}${CheckSize(parameter,parameter.modifiedSince)}`
        }

    return newURL
}
return url
}

function CheckSize(parameter,value){
    var Size=Object.keys(parameter).length
    var LastItem = Object.values(parameter)[Size-1]

    if(value!==LastItem &&Size>1){
        return '&' 
    }else{
        return '' 
    }



}

exports.ContactURL=ContactURL
