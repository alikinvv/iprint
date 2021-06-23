let paper = {
    '20': {
        'drawing': {
            'a4': {
                'black': 5,
                'color': 15
            },
            'a3': {
                'black': 15,
                'color': 30
            },
            'a2': {
                'black': 50,
                'color': 70
            },
            'a1': {
                'black': 90,
                'color': 130
            },
            'a0': {
                'black': 15,
                'color': 220
            }
        },
        'image': {
            'a4': {
                'black': 7,
                'color': 25
            },
            'a3': {
                'black': 30,
                'color': 50
            },
            'a2': {
                'black': 90,
                'color': 130
            },
            'a1': {
                'black': 150,
                'color': 220
            },
            'a0': {
                'black': 280,
                'color': 450
            }
        }
    },
    '20100': {
        'drawing': {
            'a4': {
                'black': 4,
                'color': 12
            },
            'a3': {
                'black': 12,
                'color': 27
            },
            'a2': {
                'black': 40,
                'color': 60
            },
            'a1': {
                'black': 80,
                'color': 115
            },
            'a0': {
                'black': 130,
                'color': 200
            }
        },
        'image': {
            'a4': {
                'black': 6,
                'color': 20
            },
            'a3': {
                'black': 25,
                'color': 45
            },
            'a2': {
                'black': 80,
                'color': 115
            },
            'a1': {
                'black': 130,
                'color': 200
            },
            'a0': {
                'black': 250,
                'color': 400
            }
        }
    },
    '100': {
        'drawing': {
            'a4': {
                'black': 3,
                'color': 10
            },
            'a3': {
                'black': 10,
                'color': 25
            },
            'a2': {
                'black': 35,
                'color': 50
            },
            'a1': {
                'black': 60,
                'color': 100
            },
            'a0': {
                'black': 110,
                'color': 170
            }
        },
        'image': {
            'a4': {
                'black': 5,
                'color': 18
            },
            'a3': {
                'black': 20,
                'color': 40
            },
            'a2': {
                'black': 70,
                'color': 100
            },
            'a1': {
                'black': 110,
                'color': 170
            },
            'a0': {
                'black': 200,
                'color': 350
            }
        }
    }
}

let vatman = {
    'drawing': {
        'a3': {
            'black': 30,
            'color': 50
        },
        'a2': {
            'black': 70,
            'color': 90
        },
        'a1': {
            'black': 110,
            'color': 170
        },
        'a0': {
            'black': 300,
            'color': 450
        }
    },
    'image': {
        'a3': {
            'black': 50,
            'color': 80
        },
        'a2': {
            'black': 110,
            'color': 150
        },
        'a1': {
            'black': 180,
            'color': 260
        },
        'a0': {
            'black': 450,
            'color': 650
        }
    }
}

let falc = {
    'a3': 10,
    'a2': 15,
    'a1': 20,
    'a0': 30
}

$('body').on('click', '.print form .btn', (e) => {
    e.preventDefault();

    math();
});

$('body').on('change', '[name="paper"]', (e) => {
    if ($('[name="paper"]').val() === 'vatman') {
        $('select[name="format"] option[value="a4"]').remove();
    }

    if ($('[name="paper"]').val() === 'paper') {
        $('select[name="format"]').prepend('<option value="a4">A4</option>');
    }

    if ($('[name="type"]').val() === 'drawing' && $('[name="format"]').val() !== 'a4') {
        $('select[name="falc"]').prop('disabled', false);
    } else {
        $('select[name="falc"]').prop('disabled', 'disabled');
        $('select[name="falc"] option[value="false"]').prop('selected', true);
    }
});

$('body').on('change', '[name="format"]', (e) => {
    if ($('[name="type"]').val() === 'drawing') {
        if ($('[name="format"]').val() === 'a4') {
            $('select[name="falc"]').prop('disabled', 'disabled');
            $('select[name="falc"] option[value="false"]').prop('selected', true);
        } else if ($('[name="type"]').val() === 'drawing') {
            $('select[name="falc"]').prop('disabled', false);
        }
    }
});

$('body').on('change', '[name="type"]', (e) => {
    if ($('[name="type"]').val() === 'drawing' && $('[name="format"]').val() !== 'a4') {
        $('select[name="falc"]').prop('disabled', false);
    } else {
        $('select[name="falc"]').prop('disabled', 'disabled');
        $('select[name="falc"] option[value="false"]').prop('selected', true);
    }
});

let math = () => {
    $('.list').removeClass('active');

    let formatVal = $('[name="format"]').val();
    let paperVal = $('[name="paper"]').val();
    let typeVal = $('[name="type"]').val();
    let colorVal = $('[name="color"]').val();
    let countVal = $('[name="count"]').val();
    let falcVal = $('[name="falc"]').val();

    let formatText = $('[name="format"] option:selected').text();
    let paperText = $('[name="paper"] option:selected').text();
    let typeText = $('[name="type"] option:selected').text();
    let colorText = $('[name="color"] option:selected').text();
    let countText = $('[name="count"]').val();
    let falcText = $('[name="falc"] option:selected').text();

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
        <li>
            <span>Фальцовка</span>
            <span>${falcText}</span>
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
    let falcCount = 0;

    if ($('[name="falc"]').val() === 'true') {
        falcCount = falc[formatVal] * countVal;
    }

    if ($('[name="paper"]').val() === 'vatman') {
        single = vatman[typeVal][formatVal][colorVal] + falcCount;
        price = (vatman[typeVal][formatVal][colorVal] + falcCount) * countVal;
    }

    if ($('[name="paper"]').val() === 'paper') {
        single = paper[countSelector][typeVal][formatVal][colorVal] + falcCount;
        price = (paper[countSelector][typeVal][formatVal][colorVal] + falcCount) * countVal;
    }

    $('.single').text(single);
    $('.price').text(price);

    
    setTimeout(() => {
        $('.list').addClass('active');
    }, 400);
};