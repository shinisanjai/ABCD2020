var x=12321;
var y=x;
var rev=0;
var rem=0;
while(x>0)
{
rem=x%10;
rev = rev*10+rem;
x=parseInt(x/10);
}
console.log(rev);
if (y==rev)
{console.log("numer is panlindrome");}
else
{console.log("number is not a panlindrome");}