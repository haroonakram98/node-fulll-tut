function getArrarpre(arr)
{
    let max = arr.reduce((a, b) => { return Math.max(a, b) });
    // console.log(max);
   // let max=arr[arr.length-1];
    let sum=0;
    if(arr.length==1){
        arr[0]=arr[0]+arr[0];
        sum=arr[0]
        console.log(arr);
    console.log(sum);
        return arr;
    }
    

    for(let i=0;i<arr.length;i++)
    {

        arr[i]+=max;
        max=arr[i];
        sum +=max;
        sum=sum%(1000000000+7);
    }
    console.log(arr);
    console.log(sum);
    return arr;

}

let arr=[1,2,3,4,5,6,7,8,9,10];
getArrarpre(arr);