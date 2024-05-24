// 메인
// 이유
// 사이드
var sideMenuImg=document.getElementById("img").style;
var sideMenuName=document.getElementById("side_menu_name");
var sideMenuDes=document.getElementById("side_menu_description");
var leftBtn=document.getElementById("leftBtn");
var rightBtn=document.getElementById("rightBtn");

var sideMenus = [
    {
        url: "url(/img/sidemenuSpaghetti.jpg)",
        name: "스파게티",
        des: "가장 인기있는 사이드 메뉴 중 하나입니다.<br> 피자 가게에서 대부분 볼 수 있습니다.<br>치즈 오븐 스파게티 라는 이름으로 불립니다.<br>가격은 보통 10,000원 이내이며, 양이 많습니다.<br>피자와 같이 먹으면 금방 배부르다는 특징이 있습니다.<br>"
    },
    {
        url: "url(/img/sidemenuChicken.jpg)",
        name: "치킨",
        des: "맛있는 사이드 메뉴 중 하나입니다.<br> 피자 가게에서 흔하게 볼 수 있습니다.<br>가격은 10,000원 이상인 경우가 많으며,<br>종류가 다양하고, 양은 보통 입니다.<br>탄산 음료 또는 음료가 필수인 조합입니다.<br>"
    },
    {
        url: "url(/img/sidemenuTokbokki.jpg)",
        name: "떡볶이",
        des: "인기있는 사이드 메뉴 중 하나입니다.<br> 피자 가게에서 대부분 볼 수 있습니다.<br>가격은 10,000원 이내이며,<br> 가격대비 양이 많지는 않습니다.<br>매콤하여 달달한 피자와 어울립니다<br>"
    }
];

var currentIndex=0;

function slideMenu(index){
    sideMenuImg.backgroundImage=sideMenus[index].url;
    sideMenuName.innerHTML=sideMenus[index].name;
    sideMenuDes.innerHTML=sideMenus[index].des;
}
slideMenu(currentIndex);

leftBtn.addEventListener("click",function(){
    currentIndex=(currentIndex>0)?currentIndex-1:currentIndex=2;
    slideMenu(currentIndex);
});

rightBtn.addEventListener("click",function(){
    currentIndex=(currentIndex<2)?currentIndex+1:currentIndex=0;
    slideMenu(currentIndex);
});



// 스토어
// 연락처