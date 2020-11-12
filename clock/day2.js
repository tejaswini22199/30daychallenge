function setRotation()
{ 
    const date=new Date();
    const seconds=date.getSeconds();
    const minutes=date.getMinutes();
    const hours=date.getHours()-12;
    console.log(minutes);
    console.log(hours);
    const minutedegree=((minutes/60)*360)+(seconds/60)*(6)+90;
    const secondDegree=((seconds/60)*360)+90;
    const hourdegree=((hours/(12))*360)+(minutes/60)*(30)+90;
    const getminutehand=document.querySelector('.min-hand');
    const gethourhand=document.querySelector('.hour-hand');
    const getSecondhand=document.querySelector('.sec-hand');
    getSecondhand.style.transform=`rotate(${secondDegree}deg)`;
    getminutehand.style.transform=`rotate(${minutedegree}deg)`;
    gethourhand.style.transform=`rotate(${hourdegree}deg)`;
    console.log(date);
}
setInterval(setRotation,1000);