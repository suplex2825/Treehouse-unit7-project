let array = ["victoria Chambers", "dale Byrd", "dawn Wood", "dan Oliver"];
let i = 0;
let count = 0;
let predicted;
let pred_start_index;


let toggle_button = document.querySelectorAll(".toggle_btn");
let popUp_container = document.querySelector(".popUp");
let popUp_button = document.querySelector(".popUp-btn");
let search_input = document.querySelector(".search");
let mssz = document.querySelector(".mesz");
let mssz_btn = document.querySelector(".button");
let select_menu = document.querySelector(".select");
let save_btn = document.querySelector(".save-btn");
let cancel_btn = document.querySelector(".cancel-btn");
let icon_container = document.querySelector(".bell");
let notifaction_panel = document.querySelector(".notification_panel");
let notification_close = document.querySelector(
  ".notification_first_node button"
);
let notification = document.querySelector(".notification");


function myFunction() {
  let key = event.keyCode || event.charCode;
  if (key != 8 && key != 16 && key != 17 && key != 16) {
    let search_input_val = search_input.value.toLowerCase();
    for (let j = 0; j < 4; j++) {
      if (search_input_val[i] === array[j][i]) {
        count++;
        if (count === 1) {
          predicted = array[j];
          pred_start_index = i;
        }
      }
    }
    if (count === 1) {
      autocomplete();
    } else count = 0;
    i++;
  } else if (key === 16 || key === 17 || key === 16) {
  } else {
    count = 0;
    predicted = null;
    i = 0;
  }
}

function notifaction_node(para) {
  let div = document.createElement("div");
  div.className = "notification-node";
  let para_tag = document.createElement("p");
  para_tag.textContent = para;
  div.appendChild(para_tag);
  notifaction_panel.appendChild(div);
}
function close_notification() {
  notification.style.display = "none";
  notifaction_panel.style.opacity = 0;
  notifaction_panel.style.zIndex = -1;
}
let autocomplete = () => {
  let predicted_from_index = [];
  for (let i = pred_start_index + 1; i < predicted.length; i++) {
    predicted_from_index.push(predicted[i]);
  }
  predicted_from_index = predicted_from_index.join("");
  search_input.value += predicted_from_index;
};
function save_setting() {
  localStorage.setItem("email", toggle_button[0].checked);
  localStorage.setItem("profile", toggle_button[1].checked);
  localStorage.setItem("timeZone", select_menu.options.selectedIndex);
}
function show_setting() {
  select_menu.options.selectedIndex = localStorage.getItem("timeZone");
  toggle_button[0].checked = localStorage.getItem("email") === "true";
  toggle_button[1].checked = localStorage.getItem("profile") === "true";
}
function clear_setting() {
  select_menu.options.selectedIndex = 0;
  toggle_button[0].checked = NaN;
  toggle_button[1].checked = NaN;
}


let para = "Dan liked your dp";
notifaction_node(para);
para = "Dan Commented on your dp";
notifaction_node(para);
icon_container.addEventListener("click", () => {
  notifaction_panel.style.display = "inline";
  notifaction_panel.style.zIndex = initial;
  notifaction_panel.style.opacity = 1;
});

notification_close.addEventListener("click", () => {
  close_notification();
});


popUp_button.addEventListener("click", () => {
  popUp_container.style.display = "none";
});


mssz_btn.addEventListener("click", ev => {
  ev.preventDefault();
  if (search_input.value === "" || mssz.value === "") {
    alert("You have to something to send message");
  } else {
    alert("Your message has been sent to " + search_input.value);
    search_input.value = "";
    mssz.value = "";
  }
});

show_setting();
save_btn.addEventListener("click", () => {
  if (select_menu.options.selectedIndex === 0)
    alert("Please select a time-zone to save");
  else {
    alert("Your setting has been saved");
    save_setting();
  }
});


cancel_btn.addEventListener("click", () => {
  clear_setting();
  save_setting();
});
