var heroes = {
    "Гэндзи": {
        "role": "Штурм",
        "realName": "Гэндзи Шимада",
        "age": "35 лет",
        "occupation": "Искатель приключений",
        "base": "Неал",
        "clan": "Клан Шимада",
        "release_date": "10 ноября 2015",
        "totalHealth": "200",
        "baseHealth": "200",
        "armor": "0",
        "shields": "0",
        "damage": "30",
        "speed": "6",
        "icon": "img/294px-%D0%93%D1%8D%D0%BD%D0%B4%D0%B7%D0%B8.png",
        "icons": ["img/gendzy/1.png",
            "img/gendzy/%D0%9C%D0%BE%D0%BB%D0%BD%D0%B8%D0%B5%D0%BD%D0%BE%D1%81%D0%BD%D1%8B%D0%B9_%D1%83%D0%B4%D0%B0%D1%80.png",
            "img/gendzy/%D0%9E%D1%82%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B0%D1%82%D0%B0%D0%BA.png"
        ]
    }
};

$(document).ready(function () {
    $('.hero').click(function () {
        var hero = $(this).children('h3').text();
        $('.hero-title').text(hero);
        var heroInfo = heroes[hero];
        var props = Object.keys(heroInfo);
        for (var i = 0; i < props.length; i++)
            if (props != 'imgs' && props != 'img')
                $('#' + props[i]).text(heroInfo[props[i]]);
        $('#hero-icon').attr('src', heroInfo.icon);
        for (var i = 0; i < 3; i++) {
            $("#a-" + i).attr('src', heroInfo.icons[i]);
        }
    });

    $('#default').trigger('click');
});