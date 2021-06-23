let paper = {
    '20': {
        'text': {
            'a4': {
                'black': 5,
                'color': 15
            }
        },
        'image': {
            'a4': {
                'black': 7,
                'color': 25
            }
        }
    },
    '20100': {
        'text': {
            'a4': {
                'black': 4,
                'color': 12
            }
        },
        'image': {
            'a4': {
                'black': 6,
                'color': 20
            }
        }
    },
    '100': {
        'text': {
            'a4': {
                'black': 3,
                'color': 10
            }
        },
        'image': {
            'a4': {
                'black': 5,
                'color': 18
            }
        }
    }
}


$('body').on('click', '.print form .btn', (e) => {
    e.preventDefault();

    math();
});

let math = () => {
    $('.list').removeClass('active');

    let formatVal = $('[name="format"]').val();
    let paperVal = $('[name="paper"]').val();
    let typeVal = $('[name="type"]').val();
    let colorVal = $('[name="color"]').val();
    let countVal = $('[name="count"]').val();

    let formatText = $('[name="format"] option:selected').text();
    let paperText = $('[name="paper"] option:selected').text();
    let typeText = $('[name="type"] option:selected').text();
    let colorText = $('[name="color"] option:selected').text();
    let countText = $('[name="count"]').val();

    $('.check .list ul:first').html(`
        <li>
            <span>Формат</span>
            <span>${formatText}</span>
        </li>
        <li>
            <span>Бумага</span>
            <span>${paperText}</span>
        </li>
        <li>
            <span>Тип изображения</span>
            <span>${typeText}</span>
        </li>
        <li>
            <span>Цветность печати</span>
            <span>${colorText}</span>
        </li>
        <li>
            <span>Тираж</span>
            <span>${countText}</span>
        </li>
    `);

    let countSelector = '20';

    if (countVal < 20) {
        countSelector = '20';
    }

    if (countVal >= 20 && countVal < 100) {
        countSelector = '20100';
    }

    if (countVal >= 100) {
        countSelector = '100';
    }

    let price = 0;
    let single = 0;

    if ($('[name="paper"]').val() === 'paper') {
        single = paper[countSelector][typeVal][formatVal][colorVal];
        price = paper[countSelector][typeVal][formatVal][colorVal] * countVal;
    }

    $('.single').text(single);
    $('.price').text(price);

    setTimeout(() => {
        $('.list').addClass('active');
    }, 400);
};

math();