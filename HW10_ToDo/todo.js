$(document).ready(function () {
    const h1 = $('<h1></h1>').text('To Do');
    h1.css({'color' : 'darkblue', 'text-align' : 'center' });
    const label = $('<label></label>').text('Add new item: ');
    const input = $('<input>').attr('placeholder', 'add item').on(
        'keydown', function(e) {
            if (e.keyCode === 13) {
                action();
            }
        }
    );
    const button = $('<button></button>').text('Add new item').on('click', action);
    button.css("marginLeft", "20px");
    const todoList = $('<ol></ol>');
    $('#root').append(h1, label, input, button, todoList);

    function action() {
        const text = input.val();
        if (text){
            const li = $('<li></li>');
            li.css('margin', '20px 0');
            const delItem = $('<button></button>').text('X').on('click', function () {
                                        $(this).parent().remove();
                                    });
            delItem.css("marginLeft", "20px");
            li.append(text, delItem);
            todoList.append(li);
            input.val('');
            input.attr('placeholder', 'add item');
        }
    }
})

