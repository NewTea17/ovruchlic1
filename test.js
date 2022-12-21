let result = document.getElementById('result');
let seeBtn = document.querySelector('.see-btn');

seeBtn.addEventListener('click', function() {
    let cout = 0
    let radio1 = document.querySelectorAll('.q1');
    let radio2 = document.querySelectorAll('.q2');
    let radio3 = document.querySelectorAll('.q3');
    let radio4 = document.querySelectorAll('.q4');
    let radio5 = document.querySelectorAll('.q5');
    let radio6 = document.querySelectorAll('.q6');
    let radio7 = document.querySelectorAll('.q7');
    let radio8 = document.querySelectorAll('.q8');
    let radio9 = document.querySelectorAll('.q9');
    let radio10 = document.querySelectorAll('.q10');
    let radio11= document.querySelectorAll('.q11');
    let radio12 = document.querySelectorAll('.q12');
    
    if(radio1[2].checked){cout++};
    if(radio2[1].checked){cout++};
    if(radio3[2].checked){cout++};
    if(radio4[0].checked){cout++};
    if(radio5[0].checked){cout++};
    if(radio6[0].checked){cout++};
    if(radio7[1].checked){cout++};
    if(radio8[1].checked){cout++};
    if(radio9[1].checked){cout++};
    if(radio10[2].checked){cout++};
    if(radio11[1].checked){cout++};
    if(radio12[2].checked){cout++};
    result.innerHTML = cout;
});


