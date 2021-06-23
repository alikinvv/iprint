let cif = {
    '0': {
        'a4': {
            '50': 30,
            '100': 25,
            '500': 19
        },
        'a5': {
            '50': 17,
            '100': 15,
            '500': 9
        },
        'a6': {
            '50': 10,
            '100': 8.5,
            '500': 5.5
        },
        'euro': {
            '50': 13,
            '100': 10,
            '500': 7
        }
    },
    '4': {
        'a4': {
            '50': 45,
            '100': 40,
            '500': 35
        },
        'a5': {
            '50': 26,
            '100': 23,
            '500': 14
        },
        'a6': {
            '50': 14,
            '100': 12,
            '500': 10
        },
        'euro': {
            '50': 17,
            '100': 15,
            '500': 12
        }
    } 
}

let a4 = {
    '500': 4100,
    '1000': 4600,
    '2500': 8000,
    '5000': 14000,
}

let a5 = {
    '500': 2150,
    '1000': 2350,
    '2500': 4200,
    '5000': 7000,
}

let a6 = {
    '500': 1250,
    '1000': 1350,
    '2500': 2200,
    '5000': 3700,
}

let euro = {
    '500': 1500,
    '1000': 1650,
    '2500': 2800,
    '5000': 4900,
}

$('body').on('click', '.print form .btn', (e) => {
    e.preventDefault();

    math();
});

$('body').on('change', '[name="type"]', (e) => {
    if ($('[name="type"]').val() === 'cif') {
        $('select[name="count"]').removeClass('active').hide();
        $('input[name="count"]').addClass('active').show();
    } else {
        $('input[name="count"]').removeClass('active').hide();
        $('select[name="count"]').addClass('active').show();
    }
});

let math = () => {
    $('.list').removeClass('active');

    let typeVal = $('[name="type"]').val();
    let paperVal = $('[name="paper"]').val();
    let formatVal = $('[name="format"]').val();
    let printVal = $('[name="print"]').val();
    let countVal = $('[name="count"].active').val();

    let typeText = $('[name="type"] option:selected').text();
    let paperText = $('[name="paper"] option:selected').text();
    let formatText = $('[name="format"] option:selected').text();
    let printText = $('[name="print"] option:selected').text();
    let countText = $('input[name="count"]').hasClass('active') ? $('[name="count"].active').val() : $('[name="count"].active option:selected').text();

    $('.check .list ul:first').html(`
        <li>
            <span>Тип</span>
            <span>${typeText}</span>
        </li>
        <li>
            <span>Бумага</span>
            <span>${paperText}</span>
        </li>
        <li>
            <span>Формат бумаги</span>
            <span>${formatText}</span>
        </li>
        <li>
            <span>Печать</span>
            <span>${printText}</span>
        </li>
        <li>
            <span>Тираж</span>
            <span>${countText}</span>
        </li>
    `);

    let price = 0;
    let single = 0;

    let countSelector = '20';

    if (countVal < 50) {
        countSelector = '50';
    }

    if (countVal >= 50 && countVal <= 100) {
        countSelector = '100';
    }

    if (countVal > 100 && countVal <= 500) {
        countSelector = '500';
    }

    if ($('[name="type"]').val() === 'cif') {
        $('.single').parent().show();
        single = cif[printVal][formatVal][countSelector];
        price = cif[printVal][formatVal][countSelector] * countVal;
    }

    if ($('[name="type"]').val() === 'offset') {
        if ($('[name="format"]').val() === 'a4') {
            $('.single').parent().hide();
            single = a4[countVal];
            price = a4[countVal];
        }
    }

    $('.single').text(single);
    $('.price').text(price);

    setTimeout(() => {
        $('.list').addClass('active');
    }, 400);
}

math();