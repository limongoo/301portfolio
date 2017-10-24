'use strict';

console.log('start');

// constructor
// var project = function (image, title, link) {
//     this.image = image;
//     this.title = title;
//     this.link = link;
// }

// array
// var projectData = [];
// projectData.push(new project("3dhouse.jpg", "Project 1", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 2", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 3", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 4", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 5", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 6", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 7", "#"));
// projectData.push(new project("3dhouse.jpg", "Project 8", "#"));

// make project items
// function makeItems() {
//     var index;
//     var get = document.getElementById("projectContainer");
//     for (index = 0; index < projectData.length; index++) {
//         var pro = projectData[index];
    
//     var createItem = document.createElement("div");
//     createItem.setAttribute("id", "projectItem");

//     var createDiv = document.createElement("div");
//     createDiv.setAttribute("id", "projectBox");    

//     var createImgLink = document.createElement("a");
//     createImgLink.href = pro.link;

//     var createImg = document.createElement("img");
//     createImg.setAttribute("id", "imgShow");
//     createImg.src = "img/" + pro.image;

//     var createLink = document.createElement("a");
//     createLink.href = pro.link;
//     createLink.setAttribute("id", "projectName");
//     createLink.innerText = pro.title;

//     createImgLink.appendChild(createImg);
//     createDiv.appendChild(createImgLink);
//     createItem.appendChild(createDiv);
//     createItem.appendChild(createLink);
//     get.appendChild(createItem);
//     }
// }
// window.addEventListener("load", makeItems);



// JQuery Constructor
var projectArray = [];

function project (projectData) {
    this.image = projectData.image;
    this.title = projectData.title;
    this.link = projectData.link;
}

project.prototype.toHtml = function() {
    var $projecTemplate = $('div.hide').clone().removeClass('hide');

    $projecTemplate.find('#imgShow').attr('src', this.image);
    $projecTemplate.find('#projectTitle').text(this.title);
    $projecTemplate.find('#projectItem a').attr('href', this.link);    

    return $projecTemplate;
};

data.forEach(function(newPro) {
    projectArray.push(new project(newPro));
});

projectArray.forEach(function(pro) {
    $('#projectContainer').append(pro.toHtml());
});


// Show menu on mobile and tablet
$('#showMenu').click(function() {
    var $menu = $('#navigation');
    if($menu.is(':hidden')){
        $menu.fadeIn(500);
        $(this).text('close');
    }
    else {
    $menu.fadeOut(500);
    $('#showMenu').text('menu');
    }
});

// $('#showMenu').click(function() {
//     $('#menu').toggleClass('hide');
//     if($('#menu').is(':visible')){
//         $('#showMenu').text('close');
//     }
//     if($('#menu').is(':hidden')){
//         $('#showMenu').text('menu');
//     }
// });


function TabContent() {
    $('#menu li').on('click', function() {
        var selectTab = $(this).data('content');
        $('.content').hide();
        $('#' + selectTab).fadeIn(500);
        $('#navigation').fadeOut(500);
        $('#showMenu').text('menu');
})
  
$('#menu .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

$(document).ready(function() {
    TabContent();
})

// TabContent();

console.log('end');