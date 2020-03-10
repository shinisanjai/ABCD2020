function panl(a)
{
    var b= a;
    while(a>0)
    {
        
var rev=0;
var rem=0;
rem=a%10;
rev= rev*10 +rem;
a=parseInt(a/10);
    }
    if (b==rev)
    {
        console.log("number " + b + " is panl");
    }
    else{
        console.log("number " + b + " is  not panl");
    }
   // console.log(a);


}
var z=123;
panl(z);