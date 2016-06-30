$(document).ready(function() {
    
    $('.top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    
    $('#button-push').click(function() {
        var txt = '';
        $('article p').each(function() {
            if(!$(this).hasClass('hidden')) {
                txt = $(this).html().replace('ipsum', '<span class="red">ipsum</span>')
                txt = '<p>' + txt + '</p>';
                $(this).replaceWith(txt);  
            }
       
        })     
        setTimeout(function() {
            $('article p').each(function() {
                if(!$(this).hasClass('hidden')) {
                    txt = $(this).html().replace('<span class="red">ipsum</span>', 'ipsum');
                    txt = '<p>' + txt + '</p>';
                    $(this).replaceWith(txt);
                }
            })
        }, 3000);      
    });
    
    $('.more-button').click(function() {
        var paragraph = $(this).parent().find('.more-text'),
            textButton = $(this);
        paragraph.slideToggle('slow');     
        if (textButton.text() == textButton.data("text-swap")) {
            textButton.text(textButton.data("text-original"));
        } 
        else {
            textButton.data("text-original", textButton.text());
            textButton.text(textButton.data("text-swap"));
        }
    })

});