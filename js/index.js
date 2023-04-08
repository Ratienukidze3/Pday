var inputBox = document.getElementsByClassName ("right-nav_input_container")[0];
const input = document.getElementById('input');
const profDrop = document.getElementById('profDrop');
const dropdownIcon = document.getElementById('dropdownIcon');
const asideDropping = document.getElementById('asideDropping');
const asideDropdownBtn =document.getElementById('asideDropdownBtn');
const asideSubmenu = document.getElementById('asideSubmenu');
const aside =document.getElementById('aside');
const profileDropdown = document.getElementById ('profile-drop_btn');
const dropBox = document.getElementById ('profile-dropdown')



function EditInput () {
    inputBox.classList.toggle("opened-search");
    
}

input.addEventListener("focus", EditInput);
input.addEventListener('blur', EditInput);






function ProfileDrop () {
    dropBox.classList.toggle("profile-dropdown_show");
    profDrop.classList.toggle('profile-dropdown_close_visible');
    dropdownIcon.classList.toggle ('nav-profile_drop_btn_rotated');
    console.log('dardas')
}

profDrop.addEventListener('click', ProfileDrop);


profileDropdown.addEventListener('click', ProfileDrop);
// profileDropdown.addEventListener("focus", ProfileDrop);
// profileDropdown.addEventListener('blur', ProfileDrop);



const asideDropdownToggle = () => { 
    asideSubmenu.classList.toggle ('aside-nav-submenu-open');
    asideDropdownBtn.classList.toggle('aside-dropdown_btn');
}

asideDropping.addEventListener('click', asideDropdownToggle);

aside.addEventListener('mouseleave', () => {
    asideSubmenu.classList.remove  ('aside-nav-submenu-open');
    asideDropdownBtn.classList.remove ('aside-dropdown_btn');
})





