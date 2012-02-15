// Appointment 1 Content Switcher
$(document).ready(function() {
	$("#bio-1 :radio[name=appt1-switcher]").change(function() {
		$("div.appt1-box").hide();
		$("#appt1-" + $(this).val() + "-box").show();
	});
});