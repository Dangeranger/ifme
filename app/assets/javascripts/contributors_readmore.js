var readMoreHideContent = function(){
  $('.read-more-content').addClass('hide');
  $('.read-more-show, .read-more-hide').removeClass('hide');
};

var readMoreShowContent = function(){
  $('.read-more-show').on('click', function(e){
    $(this).fadeOut(400, function(){
      $(this).next('.read-more-content').removeClass('hide').slideDown(1000);
      $(this).addClass('hide');
    });
    e.preventDefault();
  });
};

var contributorReadMoreFeature = function(){
  var profileTextLength = 0;
  const maxProfileLength = 200;
	var visibleProfileText, invisibleProfileText;
  var contributorProfle = $('.contributor-profile');

	contributorProfle.each(function(i){
		profileTextLength = $(this).text().length;
    if (profileTextLength > maxProfileLength){
      visibleProfileText = $(this).text().substr(0, maxProfileLength);
      invisibleProfileText = $(this).text().substr(maxProfileLength, profileTextLength - maxProfileLength);

      var profileContent = visibleProfileText + '<a href="#" class="read-more-show hide">'+ I18n.t('ellipsis') +'</a><span class="read-more-content">' + invisibleProfileText + '</span>';

      $(this).html(profileContent);
      readMoreHideContent();
    }
	});

  readMoreShowContent();
};

$(document).on("page:load ready", contributorReadMoreFeature);