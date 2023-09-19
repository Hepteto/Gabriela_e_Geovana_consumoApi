function header(){
    document.querySelector("header").innerHTML = `
    <!-- MENU NAVEGAÇÃO -->
                <div class="col-md-3 mb-md-0">
                    <a href="../index.html" class="d-inline-flex link-body-emphasis text-decoration-none">
                    <img src="./../img/WizardsUnity_logo.png" alt="" class="logosite">
                    </a>
                </div>
    
                <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
                    <li><a href="../index.html" class="nav-link px-2">
                        <img src="./../img/harrypotter_logo.png" alt="" class="logoharry">
                    </a></li>
                </ul>
    
                <div class="col-md-3 text-end">
                    <li><a href="../index.html" class="nav-link px-2">
                        <img src="./../img/menu_icon.png" alt="" class="menuicon">
                    </a></li>
                </div>
    `;
}
header();