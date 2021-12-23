 fun(arr){
  let n = arr.length;
  let cnt =0;
  let st = -1;
  let end= -1;
  for(let i=0;i<n;i++){
      if(arr[i] == -1){
          cnt++;
      }
      if(arr[i] == -1 && st == -1){
          st = i;
      }else if(arr[i] == -1){
          end=i;
      }
  }
  if(cnt % 2 == 0){
      return n;
  }
  if(st+1 < n+1-end){
      return n-(st+1);
  }else{
      return end + 1;
  }
}