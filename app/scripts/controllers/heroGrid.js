'use strict';

saveINTEapp.controller('heroGridController',
    function heroGridController ($scope, $http, $resource) {

        // Masonry

        $scope.heroGrid = $('.hero-grid');
        $scope.heroGrid.masonry({
            itemSelector: '.hero-box',
            columnWidth: function( containerWidth ) {
                return containerWidth / 4;
            },
            isResizable: true
        });

        $(window).ready(function () {
            $scope.heroGrid.masonry('reload');
        });

        // Hero Grid Items (photos)

        $scope.photoBoxes = [
            {
                title: 'Save The Future',
                caption: 'The IDL program is too awesome.',
                imageUrl: 'save-the-future.jpg',
                type: 'photo',
                priority: 2,
                template: 'hero-box-templates/photo.html'
            },
            {
                title: 'Back At The Lab',
                caption: 'A Weekend at the familiar AR209 to save the program that helped make us.',
                imageUrl: 'back-at-the-lab.jpg',
                type: 'photo',
                priority: 3,
                template: 'hero-box-templates/photo.html'
            }
        ];

        // Hero Grid Items (quote)

        $scope.quoteBoxes = [
            {
                quote: 'All The Channels',
                author: 'We push every one of them.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Back to the lab!',
                author: 'Saturday morning cartoons!',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 3,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'An Excess of Support',
                author: 'Almost out of hand.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 2,
                template: 'hero-box-templates/quote.html'
            },
            {
                quote: 'Top Dog',
                author: 'High priority content.',
                credential: 'Huge Bigshot',
                type: 'quote',
                priority: 2,
                template: 'hero-box-templates/quote.html'
            }
        ];

        // Hero Grid Items (vine embeds)

        $scope.vineBoxes = [
            {
                title: 'Glitch Mob',
                embedUrl: 'http://vine.co/v/b55LOA1dgJU/embed/simple',
                type: 'video',
                priority: 5,
                template: 'hero-box-templates/vine.html'
            }
        ];

        // Hero Grid Items (youtube embeds)

        $scope.youtubeBoxes = [
            {
                title: 'Ride Never Stop',
                embedUrl: 'http://www.youtube.com/embed/ydM2YqukXgo',
                type: 'video',
                priority: 1,
                template: 'hero-box-templates/youtube.html'
            }
        ];

        // Concatenating hero box sources and sorting

        var heroBoxes = [].concat($scope.quoteBoxes).concat($scope.photoBoxes).concat($scope.vineBoxes).concat($scope.youtubeBoxes);
        $scope.heroBoxes = heroBoxes.sort(function(a,b) { return parseFloat(a.priority) - parseFloat(b.priority) } );

        // Change.org 

        var changeApiKey    = 'eb4d16cccf1b537eb172cd1cbe60b396e5a8c3f15c7b1ef6630ebf39ba33b37f';
        var changeApiSecret = '45399b53c636021368c7612d55149f5931ccbc206bae6683ce58798e04881a95';

        var changeUrl = 'http://www.change.org/petitions/world-save-our-intes';

        var requestUrl = 'https://api.change.org/v1/petitions/1109576/signatures';

        var requestParameters = {
            'api_key'       : changeApiKey,
            'petition_id'   : 1109576
        };

        // $http.defaults.useXDomain = true;

        // var ChangeOrgPetition = JSON.parse($resource(requestUrl, requestParameters, { get: {method: 'JSONP'}}));
        
        // ChangeOrgPetition.get(function(data) {
        //     console.log(data);
        // });

        $.ajax({
            url: requestUrl,
            dataType: 'jsonp',
            type: 'GET',
            data: requestParameters,
            success: function(data) {
                console.log(data)
            },
            error: function(obj, status) {
                console.log('Aw, shucks!');
            }
        });

});







