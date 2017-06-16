const showbtn = document.getElementsByClassName('show-items-btn');
const items = document.querySelector('.items');
// console.log(showbtn, items);

showbtn[0].addEventListener('click', function() {
    var questions = [];
    var answers = [];

    if (items.innerHTML != '') {
        items.innerHTML = '';
    }

    $.ajax({

        url: 'http://rocky-shore-45098.herokuapp.com/',

    }).done(function(response){

        var obj = JSON.parse(response);

        for (let i = 0; i < obj.length; i++) {
            var li = document.createElement('li');


            questions.push(obj[i].question);
            answers.push(obj[i].answer);

            li.innerText = obj[i].question;
            items.appendChild(li);
        }
        console.log(questions);
        console.log(answers);


    }).fail(function(error){
        console.log('Error');
    });

});
