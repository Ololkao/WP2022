$(document).ready(function () {
    $('#ajax-form button[id="create"]').click(event => {
        event.preventDefault()
        $.get('./create', {}, (data) => {
            $('.list-all').html(data)
        })
    })

    $('#ajax-form button[id="read"]').click((event) => {
        event.preventDefault()
        $.get('./read', { value: $('#ajax-form input[name=sid]').val() }, data => {
            $('.search').html(data)
        })
    })

    $('#ajax-form button[id="update"]').click(event => {
        event.preventDefault()
        $.get('./update', {
            value1: $('#ajax-form input[name=aid]').val(),
            value2: $('#ajax-form input[name=aname]').val()
        })
    })

    $('#ajax-form button[id="delete"]').click(event => {
        event.preventDefault()
        $.get('./delete', {
            value: $('#ajax-form input[name=did]').val()
        })
    })
})
