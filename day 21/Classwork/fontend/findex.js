let parent=document.getElementById('parent');

async function getdata() {
    let data = await fetch('http://localhost:3000/SVU')
    let res = await data.json()
    showdata(res);
    console.log(res);
}

getdata();

async function showdata(arr){
    parent.innerHTML=null;
    arr.forEach((element, index) => {
        let box=document.createElement('div')
        box.className='box';
        let id=document.createElement('p');
        id.innerText=element.id;
        let title=document.createElement('p');
        title.innerText=element.title;
        let views=document.createElement('p');
        views.innerText=element.views;
        let button=document.createElement('button');
        button.innerText='Delete';
        box.append(id,title,views,button);
        
        parent.append(box);
    });
}

let button = document.getElementById('btn');
button.addEventListener('click', async()=>{
    let value = document.getElementById('input').value;
    let obj = {
        title: value,
        views: Math.random(100,10000)
    }
    try{
        let res = await fetch('http://localhost:3000/SVU',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        });
        let response = await res.json();

        if(response){
            getdata();
            alert('Data saved successfully');
        }

        console.log(response);
    }catch(err){
        console.log(err);
    }
});