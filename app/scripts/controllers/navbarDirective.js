/**
 * Created by Aron Collados on 23/05/2016.
 */
(function() {

  'use strict';

  angular
    .module('directivasApp')
    .directive('filtersCharts', filtersCharts);

  function filtersCharts() {
    var directive = {
      scope: {
        currentstatevalue: '&'
      },
      link: filtersChartsLink,
      transclude: true,
      replace: 'true',
      template: '<div class="filters">' +
      ' <ng-transclude></ng-transclude>' +
      '</div>'
    };

    function filtersChartsLink(scope, element, attrs) {
      jQuery(window).scroll(function() {
        var scroll = jQuery(window).scrollTop();
        if (scroll >= 65) {
          jQuery(element).css('top', (scroll-20)+"px");
          jQuery(element).css('position', "absolute");
        }else{
          jQuery(element).css('top', 0+"px");
          jQuery(element).css('position', "absolute");
        }

      });
    }

    return directive;
  }

  angular.module('directivasApp').directive('buttonCollapse', buttonCollapse);


  function buttonCollapse() {
    var directive = {
      restrict: 'A',
      link: buttonCollapseLink
    };

    function buttonCollapseLink(scope, element, attrs) {
      $(element).click(function() {
        if ($(".filters ").hasClass("collapse-filter")) {
          $(".filters ").removeClass("collapse-filter");
          $(".content .all-graphics").removeClass("collapse-filter");

        } else {
          $(".filters ").addClass("collapse-filter");
          $(".content .all-graphics").addClass("collapse-filter");
        }
      });
    }
    return directive;
  }

})();

