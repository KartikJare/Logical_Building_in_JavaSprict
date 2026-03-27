function CheckPerfect(No)
{
    let iSum = 0

    for(let i = 1;i <= (No/2); i++)
    {
        if((No % i) == 0)
        {
            iSum = iSum + i
        }    
    }
    if(iSum == No)
    {
        return true
    }
    else
    {
        return false
    }
}    

let Value = 28
let bRet = false

iRet = CheckPerfect(Value)

if(bRet == true)
{
    console.log(Value+"  is a perfect number")
}
else
{
    console.log(Value+"  is not perfect number")
}    