let cif = {
    '0': {
        '48': 6,
        '98': 5,
        '200': 3,
        '300': 3,
        '400': 3,
        '500': 3,
        '600': 2.5 ,
        '700': 2.5 ,
        '800': 2.5 ,
        '900': 2.5 ,
        '1000': 2.5
    },
    '4': {
        '48': 10,
        '98': 8,
        '200': 5,
        '300': 5,
        '400': 5,
        '500': 5,
        '600': 4,
        '700': 4,
        '800': 4,
        '900': 4,
        '1000': 4
    }    
}

let offset = {
    '250': 900,
    '500': 1000,
    '1000': 1200,
    '2000': 2000,
    '3000': 2500,
}

let cifCountList = `
<option value="48">48 шт.</option>
<option value="98">98 шт.</option>
<option value="200">200 шт.</option>
<option value="300">300 шт.</option>
<option value="400">400 шт.</option>
<option value="500">500 шт.</option>
<option value="600">600 шт.</option>
<option value="700">700 шт.</option>
<option value="800">800 шт.</option>
<option value="900">900 шт.</option>
<option value="1000">1000 шт.</option>`;

let offsetCountList = `
<option value="250">250 шт.</option>
<option value="500">500 шт.</option>
<option value="1000">1000 шт.</option>
<option value="2000">2000 шт.</option>
<option value="3000">3000 шт.</option>`;

$('body').on('click', '.print form .btn', (e) => {
    e.preventDefault();

    math();
});

$('body').on('change', '[name="type"]', (e) => {
    if ($('[name="type"]').val() === 'cif') {
        $('select[name="count"]').html(cifCountList);
    } else {
        $('select[name="count"]').html(offsetCountList);
    }
});

let math = () => {
    $('.list').removeClass('active');

    let typeVal = $('[name="type"]').val();
    let paperVal = $('[name="paper"]').val();
    let printVal = $('[name="print"]').val();
    let countVal = $('[name="count"]').val();

    let typeText = $('[name="type"] option:selected').text();
    let paperText = $('[name="paper"] option:selected').text();
    let printText = $('[name="print"] option:selected').text();
    let countText = $('[name="count"] option:selected').text();

    console.log(typeText)
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

    if ($('[name="type"]').val() === 'cif') {
        $('.single').parent().show();
        single = cif[printVal][countVal];
        price = cif[printVal][countVal] * countVal;
    }

    if ($('[name="type"]').val() === 'offset') {
        $('.single').parent().hide();
        single = offset[countVal];
        price = offset[countVal];
    }

    $('.single').text(single);
    $('.price').text(price);

    setTimeout(() => {
        $('.list').addClass('active');
    }, 400);
}

math();