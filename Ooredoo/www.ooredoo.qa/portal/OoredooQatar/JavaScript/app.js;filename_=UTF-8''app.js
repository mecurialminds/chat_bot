/** ************** filter dropdown check boxes *************************** */
$(document).ready( function() {
	if ($('.panel-collapse').hasClass('in')) {
		$('.in').prev('.panel-heading').removeClass('collapsed');
	}

	$("#get_pdf").submit( function(event) {
		$('.sharer').parent().addClass('invisiblePdfDiv');
		function getCookie(name) {
			var re = new RegExp(name + "=([^;]+)");
			var value = re.exec(document.cookie);
			return (value != null) ? unescape(value[1]) : null;
		}
		var cookie_value = getCookie("CUSTOMER_CUSTOM_LOCAL");
		if (cookie_value == null) {
			$('input[name=vmfile]').val('sites.vm');
		} else {
			var lang_value = cookie_value.split("_");
			$('input[name=vmfile]').val('sites_' + lang_value[0] + '.vm');
		}
		var pdfContent = $('.html2pdf').html();
		$('input[name=divcontent]').val(pdfContent);
		$('.sharer').parent().removeClass('invisiblePdfDiv');
	});

	// Press Month Filter
	$(".press-month-select ul>li").click( function(event) {
		var checkBoxes = $(this).find("input");
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
		event.stopPropagation();
	});
	$(".press-month-select ul>li input").click( function() {
		var checkBoxes = $(this);
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
	});
	$(".press-month-select ul>li").click( function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement month-"
				+ index
				+ "'>"
				+ filterText
				+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterMonth(this)'></span>";
		if ($(this).find("input").is(":checked")) {
			$(".filterDiv").append(filterElement);
			$(this).addClass('month-' + index);
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});
	$(".press-month-select ul>li").each( function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement month-"
				+ index
				+ "'>"
				+ filterText
				+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterMonth(this)'></span>";
		if ($(this).find("input").is(":checked")) {
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});

	// Press Year Filter
	$(".press-year-select ul>li").click( function(event) {
		var checkBoxes = $(this).find("input");
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
		event.stopPropagation();
	});
	$(".press-year-select ul>li input").click( function() {
		var checkBoxes = $(this);
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
	});
	$(".press-year-select ul>li").click( function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement year-"
				+ index
				+ "'>"
				+ filterText
				+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterYear(this)'></span>";
		if ($(this).find("input").is(":checked")) {
			$(".filterDiv").append(filterElement);
			$(this).addClass('year-' + index);
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});
	$(".press-year-select ul>li").each( function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement year-"
						+ index
						+ "'>"
						+ filterText
						+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterYear(this)'></span>";
		if ($(this).find("input").is(":checked")) {
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});

	// Press Topic Filter
	$(".press-topic-select ul>li").click( function(event) {
		var checkBoxes = $(this).find("input");
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
		event.stopPropagation();
	});
	$(".press-topic-select ul>li input").click( function() {
		var checkBoxes = $(this);
		checkBoxes.prop("checked", !checkBoxes.prop("checked"));
	});
	$(".press-topic-select ul>li").click( function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement topic-"
				+ index
				+ "'>"
				+ filterText
				+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterTopic(this)'></span>";
		if ($(this).find("input").is(":checked")) {
			$(".filterDiv").append(filterElement);
			$(this).addClass('topic-' + index);
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});
	$(".press-topic-select ul>li").each(function() {
		filterText = $(this).text();
		var index = $(this).index();
		var filterElement = "<div class='filterElement topic-"
				+ index
				+ "'>"
				+ filterText
				+ "<span class='glyphicon glyphicon-remove' onclick='removeFilterTopic(this)'></span>";
		if ($(this).find("input").is(":checked")) {
		} else {
			$('.filterElement:contains("' + filterText + '")').remove();
		}
	});

	$(".newDropdown #sortListUI").on('change', function() {
		$(this).find("option:selected").each( function() {
			if ($(this).attr("value") == "1") {
				var selectedValue = $('.newDropdown #sortListUI :selected').val();
				var filterHiddenInput = "<input class='hiddenInput' value='" + selectedValue + "' name='sortType' hidden>";
				$(".devices-grids-page .hiddenInput").remove();
				$(".devices-grids-page").append(filterHiddenInput);
			} else if ($(this).attr("value") == "2") {
				var selectedValue = $('.newDropdown #sortListUI :selected').val();
				var filterHiddenInput = "<input class='hiddenInput' value='" + selectedValue + "' name='sortType' hidden>";
				$(".devices-grids-page .hiddenInput").remove();
				$(".devices-grids-page").append(filterHiddenInput);
			} else if ($(this).attr("value") == "3") {
				var selectedValue = $('.newDropdown #sortListUI :selected').val();
				var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue+ "' name='sortType' hidden>";
				$(".devices-grids-page .hiddenInput").remove();
				$(".devices-grids-page").append(filterHiddenInput);
			} else if ($(this).attr("value") == "4") {
				var selectedValue = $('.newDropdown #sortListUI :selected').val();
				var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue+ "' name='sortType' hidden>";
				$(".devices-grids-page .hiddenInput").remove();
				$(".devices-grids-page").append(filterHiddenInput);
			} else if ($(this).attr("value") == "5") {
				var selectedValue = $('.newDropdown #sortListUI :selected').val();
				var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue+ "' name='sortType' hidden>";
				$(".devices-grids-page .hiddenInput").remove();
				$(".devices-grids-page").append(filterHiddenInput);
			} else {
				$(".devices-grids-page .hiddenInput").remove();
			}
		});
	});
	$(".newDropdown #sortListUI").find("option:selected").each( function() {
		if ($(this).attr("value") == "1") {
			var selectedValue = $('.newDropdown #sortListUI :selected').val();
			var filterHiddenInput = "<input class='hiddenInput' value='" + selectedValue + "' name='sortType' hidden>";
			$(".devices-grids-page .hiddenInput").remove();
			$(".devices-grids-page").append(filterHiddenInput);
		} else if ($(this).attr("value") == "2") {
			var selectedValue = $('.newDropdown #sortListUI :selected').val();
			var filterHiddenInput = "<input class='hiddenInput' value='" + selectedValue + "' name='sortType' hidden>";
			$(".devices-grids-page .hiddenInput").remove();
			$(".devices-grids-page").append(filterHiddenInput);
		} else if ($(this).attr("value") == "3") {
			var selectedValue = $('.newDropdown #sortListUI :selected').val();
			var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue + "' name='sortType' hidden>";
			$(".devices-grids-page .hiddenInput").remove();
			$(".devices-grids-page").append(filterHiddenInput);
		} else if ($(this).attr("value") == "4") {
			var selectedValue = $('.newDropdown #sortListUI :selected').val();
			var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue+ "' name='sortType' hidden>";
			$(".devices-grids-page .hiddenInput").remove();
			$(".devices-grids-page").append(filterHiddenInput);
		} else if ($(this).attr("value") == "5") {
			var selectedValue = $('.newDropdown #sortListUI :selected').val();
			var filterHiddenInput = "<input class='hiddenInput' value='"+ selectedValue+ "' name='sortType' hidden>";
			$(".devices-grids-page .hiddenInput").remove();
			$(".devices-grids-page").append(filterHiddenInput);
		} else {
			$(".devices-grids-page .hiddenInput").remove();
		}
	});

	/* Fire Action on Dropdown Hide */
	$('.brand-dropdown-action').on('hide.bs.dropdown', function() {
		var len = $(".brand-dropdown-action input.filterCheckBox:checked").length;
		var actionName = document.getElementById('actionName').value;
		if (len > 0 || actionName == "ProductsPage.action") {
			$("#searchFrm").submit();
		}
	});

	$('.all-dropdown-action').on('hide.bs.dropdown', function() {
		var len = $(".all-dropdown-action input.filterCheckBox:checked").length;
		var actionName = document.getElementById('actionName').value;
		if (len > 0 || actionName == "ProductsPage.action") {
			$("#searchFrm").submit();
		}
	});

	$('.promo-dropDown').on('hide.bs.dropdown', function() {
		$("#index").val(0);
		$("#promotions-form").submit();
	});

	$('#businessForm, #customerForm, #registerationForm, #whistleForm').addClass('form-horizontal general-form');

					

	$(".speedDropDownMenu>li").find("img").addClass('adslSpeedsImg');
	$(".speedDropDownMenu>li").click(
		function(ev) { 
		$(".speedDropDownMenu").find(".theIndecator").hide();
		$(this).find(".speedIndicator").show();
		$(".adslSpeeds").css("background-color", "#F4F4F4");
		$(this).find(".adslSpeeds").css("background-color", "#EE1C25");
		$(".speedDropDownMenu").find(".adslSpeedMB,.adslSpeedNum").css("color", "#EE1C25");
		$(".speedDropDownMenu").find(".QR20").css("color", "#5a5a5a");
		$(this).find(".adslSpeedMB,.adslSpeedNum,.QR20").css("color", "#fff");

		imgPath = $(this).find(".adslSpeedsImg").attr('src').slice(0, -4);
		$(".adslSpeedsImg").each(function(index, element) {
			$(element).attr("src", $(element).attr("src").replace("http://www.ooredoo.qa/cs/OoredooQatar/page-not-found",".png"))
		});
		if (!$(this).hasClass("active")) {
			$(this).find(".adslSpeedsImg").attr("src", function(i, e) {
				return e.replace(".png", "http://www.ooredoo.qa/cs/OoredooQatar/page-not-found");
			})
		}
	});

				
	
						
					
	/* Select Picker */
	// $('.selectpicker').selectpicker();
	$('.sort-dropdown-action').on('hide.bs.dropdown', function() {
		$("#searchFrm").submit();
	});

	$(".newDropdown button span.caret").removeClass('caret');
	$(".newDropdown button span:last-child").addClass('glyphicon glyphicon-menu-down red-arrow');

	function runAppend() {
		$(".brand-dropDown ul>li").each(function() {
			$(this).find(".hiddenInput").appendTo('.devices-grids-page');
		});
		$("ul.capacity-dropDown>li").each(function() {
			$(this).find(".hiddenInput").appendTo('.devices-grids-page');
		});
		$("ul.screen-dropDown>li").each(function() {
			$(this).find(".hiddenInput").appendTo('.devices-grids-page');
		});
		$("ul.speed-dropDown>li").each(function() {
			$(this).find(".hiddenInput").appendTo('.devices-grids-page');
		});
	}

	/** *********************************************************************** */

	/**
	 * ************** sort by dropdown menus id=sortByButton
	 * ****************
	 */
	$(".normalDropDown li").click(function() {
		$(this).parents(".dropdown_select").find(".btn").html(
			$(this).text() + '<span class="glyphicon glyphicon-menu-down red-arrow"></span>'
		);
	});

	$("ul.dropdown-menu li").click(function() {
		$(this).parents(".dropdown_select").find(".btn").html(
			$(this).text() + '<span class="glyphicon glyphicon-menu-down red-arrow"></span>'
		);
	});

	$(".DropDownWithTitle li").click(function() {
		$(this).parents(".dropdown_select").find(".btn").html("Title: " + $(this).text() + '<span class="glyphicon glyphicon-menu-down red-arrow"></span>');
	});
					
	
	/** ************************************************************************* */
				

	$('.dropdown.search').on('show.bs.dropdown', function() {
		$(this).find("a>.glyphicon-search").removeClass("glyphicon-search").addClass("glyphicon-remove");
	});

	$('.dropdown.search').on('hide.bs.dropdown', function() {
		$(this).find("a>.glyphicon-remove").removeClass("glyphicon-remove").addClass("glyphicon-search");
	});

	jQuery('body').bind('click', function(e) {
		if (jQuery(e.target).closest('.navbar').length == 0) {
			var opened = jQuery('.navbar-collapse').hasClass('collapse in');
			if (opened === true) {
				jQuery('.navbar-collapse').collapse('hide');
			}
		}
	});

});

function removeFilter(obj) {
	objText = $(obj).parent().attr("id");
	// $("li:contains(" + objText + ") input").attr('checked', false);
	$("li input[value='" + objText + "']").removeAttr("checked");
	$(obj).parent().remove();
	$("#promotions-form").submit();
}

function removeFilterMonth(month) {
	monthTarget = $(month).parent().attr('class');
	var monthList = monthTarget.split(' ')[1];
	$(".press-month-select").find("li." + monthList + " input").removeAttr(
			"checked");
	$(month).parent().remove();
}

function removeFilterYear(year) {
	yearTarget = $(year).parent().attr('class');
	var yearList = yearTarget.split(' ')[1];
	$(".press-year-select").find("li." + yearList + " input").removeAttr(
			"checked");
	$(year).parent().remove();
}

function removeFilterTopic(topic) {
	topicTarget = $(topic).parent().attr('class');
	var topicList = topicTarget.split(' ')[1];
	$(".press-topic-select").find("li." + topicList + " input").removeAttr(
			"checked");
	$(topic).parent().remove();
}

function showImageModal(obj) {
	$(".modalImage").attr("src", $(obj).attr("src"));
}



