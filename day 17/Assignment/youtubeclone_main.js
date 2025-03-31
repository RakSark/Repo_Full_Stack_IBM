const apiKey = 'AIzaSyA40HGb4s7EcoxKBO5DV8e_YLKnDpgYEmU';
const playlistId="UUmSp4bDxS9R0jpeZEvkut2g";
let nextPageToken = '';
// Channel ID: UCmSp4bDxS9R0jpeZEvkut2g
// Uploads ID: UUmSp4bDxS9R0jpeZEvkut2g
// video ID: RbKoPrSSupM
// Fetch API url: https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUmSp4bDxS9R0jpeZEvkut2g
// playlistId="UUmSp4bDxS9R0jpeZEvkut2g";
// &key=key

// data embed: <iframe width="560" height="315" src="https://www.youtube.com/embed/Bzw2T18YDJ4?si=IQw48w_53Mi2LuqL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

async function fetchytdata(pageToken = "") {
  try {
    console.log("Fetching data...");
    let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}&pageToken=${pageToken}`);
    if (!res.ok) {
      throw new Error("Network not fetching data: " + res.statusText);
    }
    let ytdata = await res.json();
    console.log("Data fetched successfully:", ytdata);
    showytdata(ytdata.items);
    nextPageToken = ytdata.nextPageToken;
    document.getElementById("loadinter").remove();
  }catch(error){
    console.error("Error To show data:", error.message);
  }
}

function showytdata(array){
  array.forEach(ele=>{
    // main-div
    // document.getElementById("mainbody").innerHTML = '';
    const contents = document.createElement('div')
    contents.className = "contents";
    
    // inner-div
    const videoContainer = document.createElement('div')
    videoContainer.className = "videoContainer"
    videoContainer.addEventListener("mouseover",()=>{
      thumbnails.style.visibility = "hidden"
      video.src = `https://www.youtube.com/embed/${ele.snippet.resourceId.videoId}?autoplay=1&controls=0&mute=1`;
    });
    videoContainer.addEventListener("mouseout",()=>{
      thumbnails.style.visibility = "visible"
      video.src = `https://www.youtube.com/embed/${ele.snippet.resourceId.videoId}?autoplay=0&controls=0&mute=1`;
    });

    // Video frame
    const video = document.createElement('iframe')
    video.id = "ytvideo"
    video.src = `https://www.youtube.com/embed/${ele.snippet.resourceId.videoId}?autoplay=0&controls=0&mute=1`;
    video.frameBorder = "0";
    video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    video.allowFullscreen = true;

    // Add click event to redirect to YouTube
    video.addEventListener("click", ()=>{
      window.open(`https://www.youtube.com/watch?v=${ele.snippet.resourceId.videoId}`, '_blank');
    });

    // Thumbnail frame
    const thumbnails = document.createElement("img")
    thumbnails.id = "thumbnails"
    thumbnails.src = `${ele.snippet.thumbnails.medium.url}`
    
    videoContainer.append(thumbnails, video)
    contents.append(videoContainer)

    // title Frame
    const title = document.createElement("p")
    title.id = "title"
    title.innerHTML = ele.snippet.title

    contents.append(title)
    document.getElementById("mainbody").append(contents)
  });
};


window.addEventListener("scroll", ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight -10){
    fetchytdata(nextPageToken);
  }
});

// Search functionality

let searchbutton = document.getElementById("searchingbut")
searchbutton.addEventListener("click", async () => {
  let searchinput = document.getElementById("searchinput")
  let searchmethod = searchinput.value.toLowerCase();
  let res = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${apiKey}`)
  let data = await res.json();
  let filerdata = data.items.filter(item=>item.snippet.title.toLowerCase().includes(searchmethod))
  document.getElementById("mainbody").innerHTML="";
  showytdata(filerdata);
})

// Trigger search on Enter key press
let searchinput = document.getElementById("searchinput")
searchinput.addEventListener("keypress", async (event)=>{
  if(event.key === "Enter"){
    event.preventDefault();
    searchbutton.click()
  }
});

function skeleton(){
  document.getElementById("mainbody").innerHTML = "";

  let loadingInterface = document.createElement("div")
  loadingInterface.id = "loadinter"
  
  let mainloadinglogo = document.createElement("div")
  mainloadinglogo.id = "mainloadinglogo"

  let loadingbox = document.createElement("div")
  loadingbox.className = "loadingbox"

  let innerloadingbox1 = document.createElement("div")
  innerloadingbox1.className = "innerloadingbox1"

  let innerloadingbox2 = document.createElement("div")
  innerloadingbox2.className = "innerloadingbox2"
  
  loadingbox.append(innerloadingbox1)
  mainloadinglogo.append(loadingbox)
  loadingInterface.append(mainloadinglogo)
  document.getElementById("mainbody").append(loadingInterface)
}

function loading(){
  skeleton();
  fetchytdata();
};

loading();