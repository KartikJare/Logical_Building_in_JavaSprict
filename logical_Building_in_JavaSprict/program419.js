function Maximum(Brr)
{
    let iMax = Brr[0]

    for(let i = 0;i < Brr.length;i++)
    {
        if(Brr[i] > iMax)
        {
            iMax = Brr[i]
        } 
    }
    return iMax
}

let Arr =[78,45,90,22,66,69]

let iRet = 0

iRet = Maximum(Arr)

console.log("Maximum of all elements : " +iRet)