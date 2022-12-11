document.querySelector('.searcher').addEventListener('input', function() {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic li');
    if(val != '') {
        elasticItems.forEach(function(elem) {
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('vis');
            } else {
                elem.classList.remove('vis');
            }
        });
    } else {
        elasticItems.forEach(function(elem) {
            elem.classList.remove('vis');
        });
    }
});