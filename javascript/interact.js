const passF = document.querySelectorAll(".enter_account .pass input[type='password']"),
    showbutton = document.querySelectorAll(".enter_account span");
showbutton[0].onclick = () => {
    if (passF[0].type == "password") {
        passF[0].type = "text";
        showbutton[0].style.color = "gray";
    }
    else {
        passF[0].type = "password";
        showbutton[0].style.color = "darkorange";
    }
}
showbutton[1].onclick = () => {
    if (passF[1].type == "password") {
        passF[1].type = "text";
        showbutton[1].style.color = "gray";
    }
    else {
        passF[1].type = "password";
        showbutton[1].style.color = "darkorange";
    }
}
function clickHmenu() {
    const headmenu = document.querySelector(".body_box ol");
    if (headmenu.style.display == "none") {
        headmenu.style.display = "block";
    }
    else {
        headmenu.style.display = "none";
    }
}
function clickHmenu1() {
    const profilemenu = document.querySelector(".body_box ol");
    if (profilemenu.style.display == "none") {
        profilemenu.style.display = "block";
    }
    else {
        profilemenu.style.display = "none";
    }
}
function clickcreateQ() {
    const questiontype = document.querySelector(".new_form_option .qtype"),
        Nquestok = document.querySelector(".new_form_option .opQok");
    if (questiontype.style.display == "none") {
        questiontype.style.display = "block";
        Nquestok.style.display = "block";
    }
    else {
        questiontype.style.display = "none";
        Nquestok.style.display = "none";
    }
}

function clicktype() {
    const questionoption = document.querySelector(".new_form_option .qtype"),
        numOption = document.querySelector(".new_form_option .qoption"),
        NquesGo = document.querySelector(".new_form_option .nQok"),
        Nquestok = document.querySelector(".new_form_option .opQok"),
        x = document.querySelector(".new_form_option .qoption").selectedIndex;
    numOption.value == "0";
    questionoption.style.display = "block";
    Nquestok.style.display = "block";
    numOption.style.display = "none";
    NquesGo.style.display = "none";
}

function clickQoption() {
    const questionoption = document.querySelector(".new_form_option .qtype"),
        numOption = document.querySelector(".new_form_option .qoption"),
        NquesGo = document.querySelector(".new_form_option .nQok"),
        Nquestok = document.querySelector(".new_form_option .opQok"),
        x = document.querySelector(".new_form_option .qtype").selectedIndex;
    if (questionoption[x].value == "single" || questionoption[x].value == "multiple") {
        Nquestok.style.display = "none";
        numOption.style.display = "block";
        NquesGo.style.display = "block";
    }
    else {
        Nquestok.style.display = "none";
        numOption.style.display = "none";
        NquesGo.style.display = "block";
    }
}
function NewQtype() {
    const questionoption = document.querySelector(".new_form_option .qtype"),
        numOption = document.querySelector(".new_form_option .qoption"),
        NquesGo = document.querySelector(".new_form_option .nQok"),
        Nquestok = document.querySelector(".new_form_option .opQok"),
        Qbox=document.querySelector(".addQinBox"),
        Qmodarate=document.querySelectorAll(".new_form_option"),
        x = document.querySelector(".new_form_option .qtype").selectedIndex;
    if (questionoption[x].value == "no") {
        NquesGo.style.backgroundColor="red";
    }
    else{
        NquesGo.style.backgroundColor="blueviolet";
        if(questionoption[x].value == "single" ){
            event.preventDefault();

            Qbox.innerHTML+=" <div class='new_form'> <div class='question_number'>Question :<button class='delete_ques'>Delete</button><button class='save_ques'>Save</button></div> <hr /> <table> <tr> <th colspan='2'><input type='text'></th>  <td></td><td><select name='' class='marks'><option value='0'>Marks</option><option value='0.5'>0.5</option><option value='1'>1</option><option value='1.5'>1.5</option><option value='2'>2</option></select></td></tr><tr><td><input type='text'> </td><td><input type='radio' name='fav_language' value='1'></td></tr><tr> <td><input type='text'></td><td><input type='radio' name='fav_language' value='2'></td></tr><tr><td><input type='text'> </td><td><input type='checkbox' name='fav_language' value='1'></td></tr><tr><td><input type='text'></td><td><input type='checkbox' name='fav_language' value='2'></td></tr></table></div>"; 
        }
    }
}
