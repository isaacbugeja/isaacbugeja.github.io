const timeField = document.getElementById("current-time");
function updateTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const timeFieldText = `The time is ${hours}:${minutes}`;
    timeField.innerHTML = timeFieldText;
  
}
updateTime();