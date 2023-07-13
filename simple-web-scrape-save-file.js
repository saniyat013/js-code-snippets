var storyPath = window.location.href;

// Console API to clear console before logging new data
console.API;
if (typeof console._commandLineAPI !== 'undefined') {
    console.API = console._commandLineAPI; //chrome
} else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
    console.API = console._inspectorCommandLineAPI; //Safari
} else if (typeof console.clear !== 'undefined') {
    console.API = console;
}

// Extracts high level details of current story
function getCurrentStoryDetail() {

    // website link: https://bdticketinfo.com/popular-places-in-64-districts-of-bangladesh/

    let districts = "dhaka,faridpur,gazipur,gopalganj,jamalpur,kishoreganj,madaripur,manikganj,munshiganj,mymensingh,narayanganj,narsingdi,netrokona,rajbari,shariatpur,sherpur,tangail,bogra,joypurhat,naogaon,natore,nawabganj,pabna,rajshahi,sirajgonj,dinajpur,gaibandha,kurigram,lalmonirhat,nilphamari,panchagarh,rangpur,thakurgaon,barguna,barisal,bhola,jhalokati,patuakhali,pirojpur,bandarban,brahmanbaria,chandpur,chittagong,comilla,cox's bazar,feni,khagrachari,lakshmipur,noakhali,rangamati,habiganj,maulvibazar,sunamganj,sylhet,bagerhat,chuadanga,jessore,jhenaidah,khulna,kushtia,magura,meherpur,narail,satkhira"
    let distArr = districts.split(",");

    // console.API.clear();
    let storyObj = {};

    distArr.forEach(item => {
        console.log('item', item)
        try{
            storyObj[item] = document.getElementById(item).nextElementSibling.nextElementSibling.nextElementSibling.innerText;
        } catch(e) {
            console.log('error:::', e)
        }
    })

    console.log(storyObj)

    console.save(storyObj);

}

console.save = function (data, filename) {
    if (!data) {
        console.error('Console.save: No data')
        return;
    }

    if (!filename) filename = 'story.json'

    if (typeof data === "object") {
        data = JSON.stringify(data, undefined, 4)
    }

    var blob = new Blob([data], {
        type: 'text/json'
    }),
        e = document.createEvent('MouseEvents'),
        a = document.createElement('a')

    a.download = filename
    a.href = window.URL.createObjectURL(blob)
    a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
    e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
    a.dispatchEvent(e)
}

getCurrentStoryDetail();
