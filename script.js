$(document).ready(function() {
    
    $('.top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    
    $('#button-push').click(function() {
        var txt = '';
        $('article p').each(function() {
            txt = $(this).html().replace('ipsum', '<span class="red">ipsum</span>')
            txt = '<p>' + txt + '</p>';
            $(this).replaceWith(txt);
        })     
        setTimeout(function() {
            $('article p').each(function() {
                txt = $(this).html().replace('<span class="red">ipsum</span>', 'ipsum');
                txt = '<p>' + txt + '</p>';
                $(this).replaceWith(txt);
            })
        }, 3000);      
    });
    
})