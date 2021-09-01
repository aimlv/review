export function debounce(func,delay){
    let timer = null
    return function(...args){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

export function formatDate(date,fmt){
    //1.获取年份（因为年份跟其他的月份，天数格式不同，所以单独进行处理）
    //对正则表达式进行测试，test如果符合就返回true，不符合就返回false
    if(/(y+)/.test(fmt)){
        //RegExp.$1表示的就是上面匹配到的结果，yyyy
        fmt = fmt.replace(RegExp.$1,(date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    //2.获取月份，天数等
    let o = {
        'M+' : date.getMonth() + 1,
        'd+' : date.getDate(),
        'h+' : date.getHours(),
        'm+' : date.getMinutes(),
        's+' : date.getSeconds()
    };
    for(let k in o){
        //这个是决定匹配到格式的字符是一个长度还是两个长度
        if(new RegExp(`(${k})`).test(fmt)){
            let str = o[k] + '';
            //如果匹配到的格式字符长度为1，则直接返回str，否则，返回处理过的函数。
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length === 1) ? str : padLeftZero(str))
        }
    }
    return fmt;
}
function padLeftZero(str){
    return ('00' + str).substr(str.length)
}