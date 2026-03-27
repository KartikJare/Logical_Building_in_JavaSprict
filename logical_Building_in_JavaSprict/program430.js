function CountSamll(Arr)
{
    let iCount = 0

    for(let i = 0; i <Arr.length;i++)
    {
        if(Arr[i] >= 'a' && Arr[i] <= 'z')
        {
            iCount++;
        }    
    }    
    return iCount
}

let Ret = 0

Ret = CountSamll("InDiA")

console.log("Number of small characters are : "+Ret)