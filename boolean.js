function Primeno(num) {
  if(num < 2) return false;
  for (var i = 2; i < num; i++) {
      if(num%i==0)
          return false;
  }
  return true;
}
var array=[];
for(i = 0; i < 101; i++){
  if(Primeno(i))
   array.print(i);}
console.log(array)
