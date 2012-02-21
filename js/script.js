// Simple state machine to let us change/filter pages.
var APP = {
  prev: 'null',
  page: '#home-screen',
  control: 'today'
};

function setUpPage() {
  // Event handlers for page change links.
  $('div.call-alert').hide();

  $('a.page').tap(function() {
    APP.control = $(this).attr('class').split(' ')[1]
    APP.page = $(this).attr('href');
  });

  // Event handler for radio buttons.
  $('input[type="radio"]').change(function() {
    APP.control = $(this).val();
    $('div[data-role="content"]').hide();
    $('div[id*=' + APP.control + ']').show();
  });

  // Call us Button
  $('a.callus-button').tap(function() {
    $('#callus-container').modal();
  });
  
  // Help Button Trigger Popover
  $('a.help-button').tap(function () { 
    $('div.popover').fadeToggle("fast", "linear");
    $('*').not('a').not('.ui-bar-a').not('.ui-btn-text').one('tap', function(ev) {
      ev.stopPropagation();
      $('div.popover').fadeOut('fast', 'linear');
    });

  });

  $(".ui-dialog button").live("click", function() { $("[data-role='dialog']").dialog("close"); });


  $('input[value="' + APP.control + '"]').trigger('change');

  $('div[data-role="content"]').hide();
    $('div[id*=' + APP.control + ']').show();
}

$('div[data-role="page"]').live('pageinit', setUpPage);