let currentCost = 0 //variable for getting the cost for the selected
let selected = document.activeElement //finds which element the user has currently selected

document.getElementById("other-job-role").style.display = "none" //makes sure to make the "other" job role invisible
document.getElementById("name").focus() //foruses the mouse on the first input
document.getElementById("payment").value = "credit-card" //sets payment to credit card

document.getElementById("paypal").style.display = "none" //hides paypal payment option
document.getElementById("bitcoin").style.display = "none" //hides bitcoin payment option

function getItems() { //function for getting all of the selected items and adding the cost to the variable
    currentCost = 0
    for(x = 0; x < document.querySelector('#activities-box').querySelectorAll("label").length; x++) {
        if(document.querySelector('#activities-box').querySelectorAll("label")[x].querySelector("input").checked == true) {
            currentCost += parseInt(document.querySelector('#activities-box').querySelectorAll("label")[x].querySelector("input").dataset.cost)
            updateCost()
        } else {
            updateCost()
        }
    }
}

function updateCost() { //changed the display to display the cost for the items
    document.getElementById("activities-cost").innerHTML = "Total: $"+currentCost
}

function validateEmail(email) { //function for validating email address
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateZip(zipCode) { //function for validating zipcode
    const re = /^\d{5}(-\d{4})?$/
    return re.test(zipCode)
}

function is_creditCard(crCard) { //function for validating credit card
    re = /^(.{16})$/
    return re.test(crCard)
}

function validateCvv(cvv) { //function for validating cvv
    re = /^[0-9]{3,4}$/
    return re.test(cvv)
}

document.querySelector('#activities-box').querySelectorAll("label").forEach(item => { //gives each box a click event and when the box is clikced it makes sure if it is able to be selected. If it is then it triggeres the update function and it also diables any other accitivities that might overlap with it.
    item.addEventListener('click', (e) => {
        
        if(e.target.nodeName !== "LABEL") {
            if(e.target.parentElement.querySelector("input").disabled == false) {
                getItems()
                if(e.target.parentElement.querySelector("span").innerHTML !== "Main Conference") {
                    if(e.target.parentElement.querySelector("span").innerHTML == "JavaScript Libraries Workshop") {
                        if(e.target.parentElement.querySelector("input").checked == true) {
                            e.target.parentElement.parentElement.querySelectorAll("label")[3].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.parentElement.querySelectorAll("label")[3].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.parentElement.querySelector("span").innerHTML == "Node.js Workshop") {
                        if(e.target.parentElement.querySelector("input").checked == true) {
                            e.target.parentElement.parentElement.querySelectorAll("label")[4].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.parentElement.querySelectorAll("label")[4].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.parentElement.querySelector("span").innerHTML == "Build tools Workshop") {
                        if(e.target.parentElement.querySelector("input").checked == true) {
                            e.target.parentElement.parentElement.querySelectorAll("label")[2].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.parentElement.querySelectorAll("label")[2].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.parentElement.querySelector("span").innerHTML == "JavaScript Frameworks Workshop") {
                        if(e.target.parentElement.querySelector("input").checked == true) {
                            e.target.parentElement.parentElement.querySelectorAll("label")[1].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.parentElement.querySelectorAll("label")[1].querySelector("input").disabled = false
                        }
                    }
                }
            }
        } else {
            if(e.target.querySelector("input").disabled == false) {
                getItems()
                if(e.target.querySelector("span").innerHTML !== "Main Conference") {
                    if(e.target.querySelector("span").innerHTML == "JavaScript Libraries Workshop") {
                        if(e.target.querySelector("input").checked == true) {
                            e.target.parentElement.querySelectorAll("label")[3].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.querySelectorAll("label")[3].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.querySelector("span").innerHTML == "Node.js Workshop") {
                        if(e.target.querySelector("input").checked == true) {
                            e.target.parentElement.querySelectorAll("label")[4].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.querySelectorAll("label")[4].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.querySelector("span").innerHTML == "Build tools Workshop") {
                        if(e.target.querySelector("input").checked == true) {
                            e.target.parentElement.querySelectorAll("label")[2].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.querySelectorAll("label")[2].querySelector("input").disabled = false
                        }
                    }
                    if(e.target.querySelector("span").innerHTML == "JavaScript Frameworks Workshop") {
                        if(e.target.querySelector("input").checked == true) {
                            e.target.parentElement.querySelectorAll("label")[1].querySelector("input").disabled = true
                        } else {
                            e.target.parentElement.querySelectorAll("label")[1].querySelector("input").disabled = false
                        }
                    }
                }
            }
        }
        
        
    })
})

document.getElementById("title").onchange = function(){ //when the job role input is changed it checks if it is put to other to see if it should change the display
    if(document.getElementById("title").value !== "other") {

        document.getElementById("other-job-role").style.display = "none"
    } else {
        document.getElementById("other-job-role").style.display = "block"
    }
};

document.getElementById("payment").addEventListener("change", (e) => { //puts the corect payment method depending on the selected choice
    if(document.getElementById("payment").value == "credit-card") {
        document.getElementById("credit-card").style.display = "block"
        document.getElementById("paypal").style.display = "none"
        document.getElementById("bitcoin").style.display = "none"
    } else if(document.getElementById("payment").value == "paypal") {
        document.getElementById("credit-card").style.display = "none"
        document.getElementById("paypal").style.display = "block"
        document.getElementById("bitcoin").style.display = "none"
    } else {
        document.getElementById("credit-card").style.display = "none"
        document.getElementById("paypal").style.display = "none"
        document.getElementById("bitcoin").style.display = "block"
    }
});

document.getElementById("design").addEventListener("change", (e) => { //changes the possible options depending on the desighn that is chosen

    if(document.getElementById("design").value == "js puns") {
        document.getElementById("color").value = "Select a design theme above"
        for(x = 0; x < document.getElementById("color").children.length; x++) {
            if(document.getElementById("color").children[x].dataset.theme == "js puns") {
                document.getElementById("color").children[x].style.display = "block"
            } else {
                document.getElementById("color").children[x].style.display = "none"
            }
        }   
    } else {
        document.getElementById("color").querySelector("option").style.display = "none"

        document.getElementById("color").value = "Select a design theme above"
        for(x = 0; x < document.getElementById("color").children.length; x++) {
            if(document.getElementById("color").children[x].dataset.theme == "js puns") {
                document.getElementById("color").children[x].style.display = "none"
            } else {
                document.getElementById("color").children[x].style.display = "block"
            }
        }
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 9) {
        console.log(selected)
        if(selected.dataset.cost !== null) {
            selected.parentNode.style.borderColor = ""
        }
        function newSelected() {
            selected = document.activeElement
            if(selected.dataset.cost !== null) {
                selected.parentNode.style.borderColor = "blue"
            } else {
                selected.style.borderColor = "blue"
            }
            console.log(selected)
        }
        setTimeout(newSelected, 100)
        
    }
});

document.querySelector(".container").querySelector("form").querySelector("button").addEventListener("click", (e) => { //validates all of the information to see if they where filled out correctly and if not it will turn the border red
    let firstCurrent = null
    let isGood = true
    if(document.getElementById("name").value.length == 0) {
        isGood = false
        document.getElementById("name").parentNode.className = "not-valid"
        firstCurrent = "name"
    } else {
        document.getElementById("name").parentNode.className = "valid"
    }

    if(document.getElementById("email").value.length == 0) {
        isGood = false
        document.getElementById("email").parentNode.className = "not-valid"
        if(firstCurrent == null) {
            firstCurrent = "email"
        }
    } else {
        if(validateEmail(document.getElementById("email").value) == true) {
            document.getElementById("email").parentNode.className = "valid"
        } else {
            isGood = false
            document.getElementById("email").parentNode.className = "not-valid"
        }
    }

    //if(document.getElementById("title").value == "Select Job Role") {
        //isGood = false
        //document.getElementById("title").parentNode.querySelectorAll("label")[2].className = "not-valid"
        //document.getElementById("title").style.borderColor = "red"
    //} else {
        //document.getElementById("title").parentNode.querySelectorAll("label")[2].className = "valid"
    //}

    //if(document.getElementById("design").value == "Select Theme") {
        //isGood = false
        //document.getElementById("design").parentNode.querySelector("label").className = "not-valid"
        //document.getElementById("design").style.borderColor = "red"
    //} else {
        //document.getElementById("design").querySelector("label")[0].className = "valid"
    //}

    //if(document.getElementById("color").value == "Select a design theme above") {
        //isGood = false
        //document.getElementById("color").parentNode.querySelector("label").className = "not-valid"
        //document.getElementById("color").style.borderColor = "red"
    //} else {
        //document.getElementById("color").className = "valid"
    //}

    if(document.getElementById("payment").value == "select method") {
        isGood = false
        document.getElementById("payment").className = "not-valid"
    } else {
        document.getElementById("payment").className = "valid"
    }

    if(document.getElementById("title").value == "other") {
        if(document.getElementById("other-job-role").value.length == 0) {
            isGood = false
            document.getElementById("other-job-role").className = "not-valid"
        } else {
            document.getElementById("other-job-role").className = "valid"
        }
    }

    if(document.getElementById("payment").value == "credit-card") {
        //if(document.getElementById("exp-month").value.toLowerCase() == "select date") {
            //isGood = false
            //document.getElementById("exp-month").className = "not-valid"
        //} else {
            //document.getElementById("exp-month").className = "valid"
        //}

        //if(document.getElementById("exp-year").value.toLowerCase() == "select year") {
            //isGood = false
            //document.getElementById("exp-year").className = "not-valid"
        //} else {
            //document.getElementById("exp-year").className = "valid"
        //}

        if(document.getElementById("cc-num").value.length == 0) {
            isGood = false
            document.getElementById("cc-num").parentNode.className = "not-valid"
            if(firstCurrent == null) {
                firstCurrent == "cc-num"
            }
        } else {
            if(is_creditCard(document.getElementById("cc-num").value)) {
                document.getElementById("cc-num").parentNode.className = "valid"
            } else {
                isGood = false
                document.getElementById("cc-num").parentNode.className = "not-valid"
                if(firstCurrent == null) {
                    firstCurrent == "cc-num"
                }
            }
        }

        if(document.getElementById("zip").value.length == 0) {
            isGood = false
            document.getElementById("zip").parentNode.className = "not-valid"
            if(firstCurrent == null) {
                firstCurrent == "zip"
            }
        } else {
            if(validateZip(document.getElementById("zip").value)) {
                document.getElementById("zip").parentNode.className = "valid"
            } else {
                isGood = false
                document.getElementById("zip").parentNode.className = "not-valid"
            }
        }

        if(document.getElementById("cvv").value.length == 0) {
            isGood = false
            document.getElementById("cvv").parentNode.className = "not-valid"
            if(firstCurrent == null) {
                firstCurrent == "cvv"
            }
        } else {
            if(validateCvv(document.getElementById("cvv").value)) {
                document.getElementById("cvv").parentNode.className = "valid"
            } else {
                isGood = false
                document.getElementById("cvv").parentNode.className = "not-valid"
            }
        }
    }

    if(document.getElementById("activities-cost").innerHTML == "Total: $0") {
        document.getElementById("activities-cost").parentNode.querySelector("legend").className = "not-valid"
        isGood = false
    } else {
        document.getElementById("activities-cost").parentNode.querySelector("legend").className = "valid"
    }

    if(firstCurrent !== null) {
        document.getElementById(firstCurrent).focus()
    }

    if(isGood == false) {
        e.preventDefault()
    }
});