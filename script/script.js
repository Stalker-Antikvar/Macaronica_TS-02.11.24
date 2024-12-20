async function upblock()
{
    await document.querySelectorAll(".Block_1_2").forEach(i => {
        i.querySelectorAll(".Text").forEach(i2 => {
            if ((i.dataset.multiplier) == "none") {
                i2.textContent = i.dataset.name;
            } else if ((i.dataset.multiplier) == 0) {
                i2.textContent = (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix);
            } else {
                i2.textContent = (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix) + " (" + ((i.dataset.quantity) * parseInt(i.dataset.multiplier)) +"шт)";
            };
        });
    });
};

upblock();

document.querySelectorAll(".button").forEach(i => {
    i.addEventListener("click", function() {
        this.parentNode.querySelectorAll("h4").forEach(i2 => {
            var a = this.parentNode.dataset;
            if (a.name == "Все" && this.textContent == "+") {
                this.parentNode.parentNode.querySelectorAll(".Block_1_2").forEach(i => {
                    i.dataset.quantity ++;
                });
                upblock();
            } else if(a.name == "Все" && this.textContent == "-") {
                if (parseInt(a.quantity) > 0)
                {
                    this.parentNode.parentNode.querySelectorAll(".Block_1_2").forEach(i => {
                        i.dataset.quantity --;
                    });
                    upblock();
                };
            } else {
                if (this.textContent == "+")
                {
                    a.quantity ++;
                } else {
                    if (parseInt(a.quantity) > 0)
                    {
                        a.quantity --;
                    };
                };
                upblock();
            };
        });
    });
});

document.getElementById("button_2_id").addEventListener("click", function() {
    var copytext = "";
    document.querySelectorAll(".Block_1_2").forEach(i => {
        if ((i.dataset.multiplier == "none") && ((i.style.display) == "none")) {
            copytext += "  " + (i.dataset.name) + "\n";
        } else if (i.dataset.multiplier == "none") {
            copytext += "\n";
        } else if (i.dataset.priority > 0) {
            if (i.dataset.quantity != 0 && (i.dataset.multiplier != 0)) {
                copytext += (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix) + " (" + ((i.dataset.quantity) * parseInt(i.dataset.multiplier)) +"шт)" + "\n";
            } else {
                copytext += (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix) + "\n";
            };
        } else if ((i.dataset.priority == 0) && (i.dataset.quantity != 0)) {
            if (i.dataset.multiplier != 0) {
                copytext += (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix) + " (" + ((i.dataset.quantity) * parseInt(i.dataset.multiplier)) +"шт)" + "\n";
            } else {
                copytext += (i.dataset.name) + " - " + (i.dataset.quantity) + " " + (i.dataset.prefix) + "\n";
            };
        };
    });
    try {
        navigator.clipboard.writeText(copytext);
    } catch {};
});















document.addEventListener("DOMContentLoaded", async function() {
    typeWriter();
    await new Promise(resolve => setTimeout(resolve, 1500));
    document.getElementById("load_wid").style.opacity = 0;
    await new Promise(resolve => setTimeout(resolve, 1000));
    document.getElementById("load_wid").style.display = "none";
});

const text = "S☭viet Group";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelectorAll(".load_wid").forEach(i2 => {
            i2.innerHTML += text.charAt(i);
        });
        i++;
        setTimeout(typeWriter, 100);
    };
};