const date = new Date();

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".ngay");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Tháng 1",
        "Tháng 2",
        "Tháng 3",
        "Tháng 4",
        "Tháng 5",
        "Tháng 6",
        "Tháng 7",
        "Tháng 8",
        "Tháng 9",
        "Tháng 10",
        "Tháng 11",
        "Tháng 12",
    ]
    const datenow = new Date();
    document.querySelector('.nd h1').innerHTML = months[date.getMonth()];
    document.querySelector('.nd p').innerHTML = "Bây giờ " + datenow.getDate() + "/" + (datenow.getMonth() + 1) + "/" + date.getFullYear();

    let ngay = "";

    for (let x = firstDayIndex - 1; x > 0; x--) {
        ngay += `<div class="previous-day">${prevLastDay - x + 1}</div>`
    }

    // for (let i = 1; i <= lastDay; i++) {
    //     if (i === 18 && date.getMonth() === new Date().getMonth()) {

    //     } else {
    //         ngay += `<div class="">${i}</div>`
    //     }
    // }

    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            ngay += `<div class="today1">${i}</div>`
        } else if (i === 18 && date.getMonth() === 10) {
            ngay += `<div class="today">${i}</div>`
        } else {
            ngay += `<div class="">${i}</div>`
        }
    }

    for (let j = 1; j <= nextDays + 1; j++) {
        ngay += `<div class="next-ngay">${j}</div>`
        monthDays.innerHTML = ngay;
    }
};

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

renderCalendar();