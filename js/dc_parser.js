$(document).ready(function() {
	$(document).ready(function() {
		var elID = '';
		
		$('meta[name^="DC."],meta[name^="LSR."]').each(function(index, element) {
			
			elID = $(this).attr('name').substr($(this).attr('name').indexOf('.')+1).toLowerCase()
			
			if(elID == 'source' && $(this).attr('content').indexOf('.mp3') != -1) {
				$('#'+ elID +' audio').attr('src', $(this).attr('content'));
			}
			else if (elID == 'source' && $(this).attr('content').indexOf('youtube') != -1) {
				$('#'+ elID).append('<iframe style="margin:auto;" width="98%" height="315" src="'+ $(this).attr('content') +'"></iframe>');
			}
			else {
				$('#'+ elID).append('<div>'+ $(this).attr('content') +'</div>');
			}
			
			$('#'+ elID).show();
		});
		
	});	
});