$('#open_customer_add_responsive').on('click', function() {
    $(".overlay").fadeIn("slow");
    $("#close_customer_add_responsive").fadeIn("slow");
});

$("#close_customer_add_responsive").click(function() {
    $(".overlay").fadeOut("slow");

});
$(document).ready(function() {
    $(window).resize(function() {
        if ($(this).width() < 992) {
            $(".overlay").css("display", 'none');

        } else {
            $(".overlay").css("display", 'block');
            $(".close-customer-add-responsive").fadeOut();
        }
    });
});

/* Start Total Right Side */
let products = document.getElementsByClassName("product");
let subtotal = parseFloat(document.getElementById("sub-total-value").innerText);
let tax = parseFloat(document.getElementById("cart-tax-value").innerText);

function sum() {
    let sum = document.getElementById("tot");
    let arr = document.getElementsByClassName("price");

    sum.innerText = 0;
    for (x of arr) {
        let txt = x.innerText;
        sum.innerText =
            (Number(sum.innerText) + Number(txt.substring(0, txt.length - 1)) + subtotal + tax).toFixed(2);
    }
}
sum();

for (let i = 0; i < products.length; i++) {
    let elem = products[i];
    let pu = elem.querySelector(".pu").innerText;
    elem.addEventListener("click", e => {
        switch (e.target.className) {

            case "remove":
                elem.remove();
                sum();
                break;
            case "plus":
                elem.querySelector(".qt").innerText++;
                elem.querySelector(".price").innerText =
                    pu * elem.querySelector(".qt").innerText + "$";
                sum();
                break;
            case "minus":
                if (elem.querySelector(".qt").innerText > 0) {
                    elem.querySelector(".qt").innerText--;
                    elem.querySelector(".price").innerText =
                        pu * elem.querySelector(".qt").innerText + "$";
                    sum();
                }
                break;
        }
    });
}
/* End Total  Right Side */

/* Start Total  Product Salary */

/* End Total  Product Salary */

/***************************************************** */
jQuery(function() {
    let j = jQuery;
    let addInput = '#qty';
    let n = 1;


    j(addInput).val(n);

    j('.plus3').on('click', function() {
        j(addInput).val(++n);
    })

    j('.minus3').on('click', function() {
        if (n >= 1) {
            j(addInput).val(--n);
        } else {}
    });
});

jQuery(function() {
    let j = jQuery;
    let alladdInput = '#qty-all-quan';
    let n = 1;


    j(alladdInput).val(n);

    j('.plus-all-quan').on('click', function() {
        j(alladdInput).val(++n);
    })

    j('.minus-all-quan').on('click', function() {
        if (n >= 1) {
            j(alladdInput).val(--n);
        } else {}
    });
});



// Add active class to the current button (highlight it)
var header = document.getElementById("mydiv-size");
var btns = header.getElementsByClassName("size-product");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}