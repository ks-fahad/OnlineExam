
function send() {
  const message = document.querySelector(".sendbox span.button").value,
    message_box = document.querySelector(".message");
  event.preventDefault();
  message_box.innerHTML +="<div class='send'><div class='send_m'>"+message+"</div><div class='action'><div>...</div></div></div>";

}