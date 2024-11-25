function burger_menu_display() {

    const menu_btn = document.querySelector('.burger_menu');
    const fill = document.querySelector('.fill-sombre');
    const menu = document.querySelector('.mobile-menu');
    const body = document.querySelector("body");
    const menu_src = menu_btn.getAttribute("src");

    menu_btn.addEventListener("click", function() {
        if (menu_btn.getAttribute("src") == menu_src)
        {
            fill.style.display = "block";
            menu.style.display = "block";
            menu.style.right = "0";
            body.style.overflowY = "hidden";
            menu_btn.setAttribute("src", "x.png");
        }
        else{
            fill.style.display = "none";
            menu.style.right = "-100%";
            menu.style.display = "none";
            body.style.overflowY = "visible";
            menu_btn.setAttribute("src", menu_src);
        }
    } );


}

burger_menu_display();

function footer_wrap()
{
    const footer_content_1 = document.querySelector('.fc-1');
    const footer_content_2 = document.querySelector('.fc-2');
    const footer_content_3 = document.querySelector('.fc-3');

    if (footer_content_1.getBoundingClientRect().top < footer_content_2.getBoundingClientRect().top)
    {
        footer_content_2.style.paddingTop = "40px";
    }

    if (footer_content_2.getBoundingClientRect().top < footer_content_3.getBoundingClientRect().top)
    {
        footer_content_3.style.paddingTop = "40px";
    }

    if (footer_content_1.getBoundingClientRect().top == footer_content_2.getBoundingClientRect().top)
        {
            footer_content_2.style.paddingTop = "0";
        }
    
        if (footer_content_2.getBoundingClientRect().top == footer_content_3.getBoundingClientRect().top)
        {
            footer_content_3.style.paddingTop = "0";
        }

}

footer_wrap();

window.addEventListener("resize", function() {
    footer_wrap();
});

function pagination_css()
{
    if (window.location.pathname == "/savoir_plus.html" || window.location.pathname == "/catalog.html")
    {
        document.querySelector("body").style.gap = "0";
    }
}

pagination_css();

function redirection()
{
    const logo = document.querySelector("nav h1");

    logo.addEventListener("click",
        function() {
            window.location.href = "index.html";
        }
    )
}

redirection();

function form()
{
    const log = document.querySelector(".form-container .log a");
    const sign = document.querySelector(".form-container .sign a");

    log.addEventListener("click",
        function() {
            document.querySelector(".form-container .log").style.visibility = "hidden";
            document.querySelector(".form-container .sign").style.visibility = "visible";
        }
    )

    sign.addEventListener("click",
        function() {
            document.querySelector(".form-container .log").style.visibility = "visible";
            document.querySelector(".form-container .sign").style.visibility = "hidden";
        }
    )
}

form();





