// Home Calendar Content Switcher
$(document).ready(function() {
	$("#home-screen :radio[name=cal-switcher]").change(function() {
		$("div.cal-box").hide();
		$("#cal-" + $(this).val() + "-box").show();
	});
});

// Appointment 1 Content Switcher
$(document).ready(function() {
	$("#bio-1 :radio[name=appt1-switcher]").change(function() {
		$("div.appt1-box").hide();
		$("#appt1-" + $(this).val() + "-box").show();
	});
});

// Appointment 2 Content Switcher
$(document).ready(function() {
	$("#bio-2 :radio[name=appt2-switcher]").change(function() {
		$("div.appt2-box").hide();
		$("#appt2-" + $(this).val() + "-box").show();
	});
});