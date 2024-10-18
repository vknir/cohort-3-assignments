const  fs = require('fs');

fs.readFile( '1-file-cleaner.md', 'utf-8', (err,data)=>{
    
    let flag=0;
    let start,end;
    for(let i=0;i< data.length;i++)
    {
        if(flag == 0)
        {
        if(data[i] == ' ')
        {
            start=i;
            flag=1;
        }
        }
        else
        {
            if( data[i] != ' '){
                flag=0;
                end=i;
            }
            else

        }
    }
})