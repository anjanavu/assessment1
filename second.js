const array = [3, 4, 5, 2, 1, 4, 3, 3, 5, 5, 5];
let maxitem, maxcount=0;
for(let i=0;i<array.length;i++)

{
  let item = array[i];
  let count=1;
  for (let j=i+1;j<array.length;j++)
  {
    if(array[j]==item){
      count++;
    }
  }
  
  if(count>maxcount){
    maxcount=count;
    maxitem=item;
  }
}
console.log("Frequent Item : "+maxitem)