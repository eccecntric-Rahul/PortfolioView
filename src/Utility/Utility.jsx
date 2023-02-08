export function truncate(str,n){
    return str?.length? str.substr(0,n-1)+'...':str;
}

export function checkJson (data){
    if(typeof data === 'string'){
        try {
            const res = JSON.parse(data);
            return true
        } catch (error) {
            return false            
        }
    }else{
        return false
    }
}