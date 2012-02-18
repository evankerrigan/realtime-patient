$(document).ready(function() {
	// Home Calendar Content Switcher
	$("#home-screen :radio[name=cal-switcher]").change(function() {
		$("div.cal-box").hide();
		$("#cal-" + $(this).val() + "-box").show();
	});

	// Appointment 1 Content Switcher
	$("#bio-1 :radio[name=appt1-switcher]").change(function() {
		$("div.appt1-box").hide();
		$("#appt1-" + $(this).val() + "-box").show();
	});

	// Appointment 2 Content Switcher
	$("#bio-2 :radio[name=appt2-switcher]").change(function() {
		$("div.appt2-box").hide();
		$("#appt2-" + $(this).val() + "-box").show();
	});

	// Pre-trigger segmented control filtering
	$("#home-screen :radio[name=cal-switcher]").trigger('change');
	$("#bio-1 :radio[name=appt1-switcher]").trigger('change');
	$("#bio-2 :radio[name=appt2-switcher]").trigger('change');	
});