let buttons = document.querySelectorAll("li");
buttons.forEach(function (e, j, arr) {
    e.onclick = function (ele) {
        for (let i = 0; i < buttons.length; i++) {
            if (j != i) {
                buttons[i].style.display = "none";
                e.nextElementSibling.style.display = "block";
                e.parentElement.style.justifyContent = "center";
            }
        }

    }
    
        e.onmouseover = function (ele) {
            if (e.nextElementSibling.style.display =="block") {
                for (let i = 0; i < buttons.length; i++) {
                    if (j != i) {
                        buttons[i].style.display = "block";
                        e.nextElementSibling.style.display = "none";
                        e.parentElement.style.justifyContent = " space-between ";
                    }
                }

            }
        }
    

});
