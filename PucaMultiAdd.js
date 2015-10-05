(function() {
    var quickAdderContainer = $('.quickAdder');
    var multiAddButton = '<button style="float: right;">Add</button>'
    var multiAddInput = '<input placeholder="Amount" style="float: right; width: 53px;"/>';
    var searchDropDown = $('#ui-id-1');

    if(!quickAdderContainer || quickAdderContainer.length === 0) {
        alert('Oops, Are you on the Haves page?');
        return false;
    }

    //Add the UI for adding multiple items
    function addMultiButtons(e) {
        setTimeout(function() {
            searchDropDown[0].style.width = "340px";
            if(searchDropDown.children() !== undefined && searchDropDown.children().length !== 0) {
                searchDropDown.children().each(function(i) {
                    var result = $(this);
                    if(result.hasClass('hasMultiAdd')) {
                        return false;
                    }
                    result.children()[0].style.float = "left";
                    result.addClass('hasMultiAdd');
                    result.append(multiAddButton);
                    result.append(multiAddInput);
                    result.on('click', function(e) {
                        e.stopPropagation();
                    });
                });
            }
        }, 1000);
    }

    searchDropDown.on('click', function(e) {
        console.log(e);
        e.preventDefault();
    });

    //multi add button
    $('#quickAdder').on('keyup', addMultiButtons);
    $('#quickAdder').on('keydown', addMultiButtons);

})();
