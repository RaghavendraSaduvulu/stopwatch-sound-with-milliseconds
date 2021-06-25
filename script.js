var ID;
var ms=1
var n=1
var n1=1
var min=1
var sec=1
var x = document.getElementById('au');
var y = document.getElementById('au1');
function start()
{
    if(n1===1)
    {
        x.autoplay = true;
        x.load()
        ID=window.setInterval(msg,10);
        n1++;
    }
}
function msg()
{
   
    if(ms === n && ms<10){
        document.getElementById('ms').innerHTML = "0"+ms;
        if(ms ===0 && sec<10)
        {
            document.getElementById('s').innerHTML = "0"+sec;
            if(sec==0 && min<10)
            {
                document.getElementById('m').innerHTML ="0"+min;
                if(min == 0 && h<10)
                {
                    document.getElementById('h').innerHTML = "0"+h;
                    h+=1
                }
                else if(min ===0 && h>=10 && h<=59)
                {
                    document.getElementById('h').innerHTML =h;
                    h+=1
                }
                if(h===60)
                {
                    h=0;
                }
                min+=1
            }
            else if(sec == 0 && min>=10 && min<=59)
            {
                document.getElementById('m').innerHTML ="0"+min;
                min+=1
            }
            if(min == 60)
            {
                min=0
               
            }
            sec+=1
        }
        else if(ms === 0 && sec>=10 && sec<=59){
            document.getElementById('s').innerHTML =sec;
            sec+=1
        }
        if(sec === 60)
        {
            sec=0
        }
        ms+=1
        n+=1
    }
    else if(ms === n && ms>=10 && ms<=99){
        document.getElementById('ms').innerHTML =ms;
        ms+=1
        n+=1
    }
    if(ms === 100)
    {
        ms=0
        n=0
        y.autoplay = true;
        y.load()
    }
}
function stop()
{
    x.autoplay = true;
    x.load()
    window.clearTimeout(ID)
    n1=1;
}
function reset(){
    sec =1
    n=1
    ms=1
    n1=1
    min=0
    h=0
    x.autoplay = true;
    x.load()
    document.getElementById('ms').innerHTML = "00";
    document.getElementById('s').innerHTML = "00";
    document.getElementById('m').innerHTML = "00";
    document.getElementById('h').innerHTML = "00";
}