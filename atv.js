function iniTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section')
    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}
iniTabNav();

function openMenu() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeMenu() {
    document.getElementById("menu").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}