let API_KEY = "AIzaSyCopfgAvXSfkyd7q-7JmuaYkmH_R5364_A"
let lower_body = document.getElementById("lower-body")

let search_term = document.getElementById("query").value || "India Gate";

async function getData(){
try{
    let data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=rating&q=${search_term}&type=video&videoCaption=any&videoDefinition=any&videoEmbeddable=true&videoLicense=any&maxResults=20&videoType=any&key=${API_KEY}`)        
}
catch(error){
    console.log(error)
}
let res = await data.json();
console.log(data)
showData(res.items)
}


async function showData(){
    arr.forEach(({Snippet}) => {
        let box = document.createElement("div")
        box.className = "video";
        let img = document.createElement("img");
        img.src = Snippet.thumbnails.medium.url;

        let title = document.createElement("p")
        title.innerText = Snippet.title

        let channel_title = document.createElement("p")
        title.innerText = snippet.channel_title

        box.append(img, title, channel_title);
        lower_body.append(box)

        box.onclick=()=>{
            let obj ={
                snippet, id
            }
            localStorage.setItem("videoData", JSON.stringify(obj));
            window.location.href = "video.html"

        }
    })
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/qBMk41TCE28?si=dkSFFl8mQlEWgxA9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

