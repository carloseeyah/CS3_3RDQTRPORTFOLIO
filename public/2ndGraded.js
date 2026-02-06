document.getElementById("dForm").addEventListener("submit", function(x) {
    x.preventDefault();

    if (!confirm("Are you confirming your submission?")) return;

    const data = Object.fromEntries(new FormData(this).entries());

    let signups = JSON.parse(localStorage.getItem("sign-ups")) || [];
    signups.push(data);
    localStorage.setItem("sign-ups", JSON.stringify(signups));

    alert("Submission saved successfully!");
    this.reset();
});

document.getElementById("dForm").addEventListener("reset", function(x) {
    if(!confirm("Are you sure you want to reset the form?")) { x.preventDefault(); }
});

function goView(){
    window.location.href="Q3_3GBerylliumSia.html";
}

function markFunction(x) {
if (x.value == "") x.className = "err"
else x.className = "";
}

function changeColor(x) {
if (x.value == "") border = "", markFunction(x);
else
x.style.border = "5px solid #0074cc";
}