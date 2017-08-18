$( document ).ready(function() {
    
    // This is a compond filter method    
    // There are many ways to do this, I would opt for a library for a real app
    // But this is simple enough to get the job done
    $('.select-style select').change( function() {
                
        var option = $(this).val();
        var filterType = $(this).data('sel');
        
        // filter the cards that correspond to the option selected
        $('.card').each(function (i) {
            var filter = $(this).data('filter');

            if (filter != undefined) {
                var filter = filter.split(',');

                if (filter[filterType] != option) {
                    $(this).parent().removeClass('col-md-2four col-sm-3six').addClass('hide');
                }
                
            }

        });
    });
    
    $('#reset-btn').click(function(event) {
        event.preventDefault();
        
        reset();
    });
    
    // show all cards
    function reset() {
        $('.card').each(function (i) {
            $(this).parent().removeClass('hide').addClass('col-md-2four col-sm-3six');
        });
        
        $('.select-style').each(function() {
            var set = $(this).children('select').val('0');
        });
    }
    
});
