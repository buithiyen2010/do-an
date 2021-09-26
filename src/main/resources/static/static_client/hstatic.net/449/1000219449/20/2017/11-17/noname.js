var script = document.createElement('script');
script.onload = function() {
    fbInboxFillPage('https://www.facebook.com/nhasachtanviet.vn/', 'https://onapp.haravan.com/facebookinbox/static/images/fb-icon-1.png', '#3366CC', '#797979', '#FFFFFF', '0', 'Liên hệ với chúng tôi!', true, true), facebookShowPanelButton();
};
script.src = "https://onapp.haravan.com/facebookinbox/static/javascripts/fb-box.js?v=1510884320305";
document.getElementsByTagName('head')[0].appendChild(script);