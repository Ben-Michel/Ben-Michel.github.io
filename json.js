const ADD_CHANNEL_BUTTON = document.getElementById("addChannel");
const ADD_STEP_BUTTON = document.getElementById("addStep");
const CHANNELS = document.getElementById("Channels");
const STEPS = document.getElementById("StepsContainer");

const GENERATE_JSON_BUTTON = document.getElementById("GenerateJson");
GENERATE_JSON_BUTTON.addEventListener("click",()=>{
    let generatedJson = GenerateJson();
    if (generatedJson != false) DownloadJson(generatedJson);
})

let stepsIdList = ["0"];

ADD_CHANNEL_BUTTON.addEventListener("click",()=>{
    const CHANNEL = document.createElement("div");
    let channelInput = document.createElement("input");
    const DELETE_BUTTON = document.createElement("button");
    DELETE_BUTTON.innerHTML="-";
    DELETE_BUTTON.className="deleteButton"
    channelInput.className="channelInput";
    CHANNEL.className="channel"
    CHANNEL.appendChild(channelInput);
    CHANNEL.appendChild(DELETE_BUTTON);
    CHANNELS.appendChild(CHANNEL);

    DELETE_BUTTON.addEventListener("click",()=>{
        DeleteChannel(CHANNEL);
    })
});

ADD_STEP_BUTTON.addEventListener("click",()=>{
    const STEP = document.createElement("div");
    const STEP_TEXT_AREA = document.createElement("textarea");
    const STEP_ID = document.createElement("h4");
    const DELETE_BUTTON = document.createElement("button");
    DELETE_BUTTON.className="deleteButton"

    let id = GenStepID();

    STEP_TEXT_AREA.cols="80";
    STEP_TEXT_AREA.rows="10";

    DELETE_BUTTON.innerHTML="-"

    STEP.className = "step";
    STEP.id= id;
    STEP.appendChild(STEP_ID);
    STEP.appendChild(DELETE_BUTTON);
    STEP.appendChild(STEP_TEXT_AREA);
    STEPS.appendChild(STEP);

    STEP_ID.innerHTML = id

    DELETE_BUTTON.addEventListener("click",()=>{
        DeleteStep(STEP);
    })

});

/***
 * Return random ID
 */
function GenStepID(){
    while(true){
        let id = Math.random().toString(36).slice(2).toUpperCase().substring(0,5);
        if(!stepsIdList.includes(id)){
            stepsIdList.push(id);
            return id;
        }
    }
}

/***
 * Delete step
 * @param {HTMLDivElement} step - Step to delete
 */
function DeleteStep(step){
    stepsIdList.forEach((id)=>{
        if(id === step.id){
            stepsIdList.splice(id,1);
        }
    });
    step.remove();
}

/***
 * Delete channel
 * @param {HTMLDivElement} channel - Step to delete
 */
 function DeleteChannel(channel){
    channel.remove();
}

/***
 * Generate JSON Object from dom
 */
function GenerateJson(){
    let generatedJson = {}; 
    let channelsArray=[];
    let stepsArray=[];
    let testedChannels=[];

    const CHANNELS = document.getElementsByClassName("channelInput");
    for(i = 0 ; i < CHANNELS.length ; i++){
        let channel = CHANNELS[i].value;
        if(channel ==="") {
            alert("Channel name empty");
            return(false);
        }
        if(testedChannels.includes(channel)){
            alert("All channels must have a different name");
            return(false)
        }
        testedChannels.push(channel);
        channelsArray.push(channel);
    }

    const STEPS = document.getElementsByClassName("step");
    for(i = 0 ; i < STEPS.length ; i++){
        const STEP_ID = STEPS[i].children[0].innerHTML;
        const STEP_TEXT = STEPS[i].children[2].value;

        stepsArray.push({"Id":STEP_ID,"Text":STEP_TEXT});
    }

    generatedJson["Channels"] = channelsArray;
    generatedJson["Steps"]= stepsArray;
    return generatedJson;
}

function DownloadJson(JsonObject){
    var element = document.createElement('a');
    let text = JSON.stringify(JsonObject);
    const NAME = document.getElementById("Name").value;
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', `${NAME}.json`);
    element.click();
}