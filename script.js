(function(selector) { 
    initCalendar(document.querySelector('.month-calendar'));
    function initCalendar(calendar) {
        const date = new Date();
        let nowYear = date.getFullYear();
        let nowMonth = date.getMonth()

        let current = {
            year: nowYear,
            month: nowMonth,
            date: date.getDate()
        };


        let dates = document.querySelector('.dates');
        let info = document.querySelector('.month-name');
        drawCalendar(nowYear, nowMonth, current, calendar);


        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');


        prevBtn.addEventListener('click', function() {
            nowYear = getPrevYear(nowYear, nowMonth);
            nowMonth = getPrevMonth(nowMonth);
            drawCalendar(nowYear, nowMonth, current, calendar);
        });


        nextBtn.addEventListener('click', function() {
            nowYear = getNextYear(nowYear, nowMonth);
            nowMonth = getNextMonth(nowMonth);
            drawCalendar(nowYear, nowMonth, calendar);
        });

        function drawCalendar(nowYear, nowMonth, current, calendar) {
            drawDates(nowYear, nowMonth, dates);
            showMonth(nowYear, nowMonth, info);
            showCurrentDate(nowYear, nowMonth, current, dates);
        }
    }

    function showCurrentDate(nowYear, nowMonth, current, dates) {
        if(nowYear == current['year'] && nowMonth == current['month']) {
            let tds = dates.querySelectorAll('td');
            for(let i = 0; i < tds.length; i++) {
                if(tds[i].innerHTML == current['date']) {
                    tds[i].classList.add('active');
                    break;
                }
            }
        }
    }


    function getPrevYear(year, month) {
        if(month == 0) {
            return year - 1;
        } else {
            return year;
        }
    }

    function getPrevMonth(month) {
        if(month == 0) {
            return 11;
        } else {
            return month - 1;
        }
    }



    function getNextYear(year, month) {
        if(month == 11) {
            return year + 1;
        } else {
            return year;
        }
    }

    function getNextMonth(month) {
        if(month == 11) {
            return 0;
        } else {
            return month + 1;
        }
    }


    function showMonth(year, month, elem) {
        elem.innerHTML = getNameMonth(month) + ' ' + year;
    }

    function getNameMonth(num) {
        const monthArr = [
            'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
            'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
        ];

        return monthArr[num];
    }

    function drawDates(year, month, dates) {
        let arr = [];
        let firstDayOfMonth = 1;
        let lasrDayOfMonth = getLastDayOfMonth(year, month);


        let unshiftElementsNum = getUnshiftElementsNum(year, month);
        let pushElementsNum = getPushElementsNum(year, month);

        arr = createArr(firstDayOfMonth, lasrDayOfMonth);
        arr = unshiftElements(unshiftElementsNum, '', arr);
        arr = pushElements(pushElementsNum, '', arr);
        arr = chunkArr(7, arr);
        createCalendar(arr, dates);
    }

    function createCalendar(arr, parent) {
        parent.innerHTML = '';

        for(let i = 0; i < arr.length; i++) {
            let tr = document.createElement('tr')
            for(let k = 0; k < arr[i].length; k++) {
                let td = document.createElement('td');
                td.innerHTML = arr[i][k];
                tr.appendChild(td);
            }
            parent.appendChild(tr);
        }
    }

    function createArr(from, to) {
        let arr = [];
        for(let i = from; i <= to; i++) {
            arr.push(i);
        }

        return arr;
    }

    function unshiftElements(num, elem, arr) {
        for(let i = 0; i < num; i++) {
            arr.unshift(elem);
        }

        return arr;
    }

    function pushElements(num, elem, arr) {
        for(let i = 0; i < num; i++) {
            arr.push(elem);
        }

        return arr;
    }

    function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
    }

    function getUnshiftElementsNum(year, month) {
        let numJs = getFirstDayOfMonthNum(year, month);
        let realDayNum = getRealDayOfWeek(numJs);

        return realDayNum - 1;
    }

    function getPushElementsNum(year, month) {
        let numJs = getFirstDayOfMonthNum(year, month);
        let realDayNum = getRealDayOfWeek(numJs);

        return 7 - realDayNum;
    }

    function chunkArr(num, arr) {
        let result = [];
        let chunk = [];
        let iterCounter = arr.length / num;
        for(let i = 0; i < iterCounter; i++) {
            chunk = arr.splice(0, num);
            result.push(chunk);
        }

        return result;
    }

    function getRealDayOfWeek(numJs) {
        if(numJs == 0) {
            return 7;
        } else {
            return numJs;
        }
    }

    function getFirstDayOfMonthNum(year, month) {
        let date = new Date(year, month, 1);
        return date.getDay();
    }

    function getLastWeekDayOfMonthNum(year, month) {
        let date = new Date(year, month + 1, 0);
        return date.getDay();
    }

}(document.querySelector('.month-calendar')));


document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const btnTop = document.querySelector('.button-top');
    window.addEventListener('scroll', () => {
        let scrollElemTop = window.scrollY;
        let headerEnd = header.offsetHeight;
        if(scrollElemTop >= headerEnd) {
           btnTop.classList.add('fixed');
        } else {
            btnTop.classList.remove('fixed');
        }
    });
});


