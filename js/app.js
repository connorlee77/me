(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var projects = require('./projects.json');

var Project = React.createClass({
    displayName: "Project",


    render: function () {

        return React.createElement(
            "div",
            { className: "col-lg-4 col-sm-6" },
            React.createElement(
                "a",
                { href: this.props.link, className: "portfolio-box" },
                React.createElement("img", { src: this.props.img, className: "img-responsive", alt: "" }),
                React.createElement(
                    "div",
                    { className: "portfolio-box-caption" },
                    React.createElement(
                        "div",
                        { className: "portfolio-box-caption-content" },
                        React.createElement(
                            "div",
                            { className: "project-category text-faded" },
                            this.props.type
                        ),
                        React.createElement(
                            "div",
                            { className: "project-name" },
                            this.props.projectName
                        )
                    )
                )
            )
        );
    }

});

var arr = [];

_.each(projects, function (item, key) {
    arr.push(React.createElement(Project, {
        type: item.type,
        projectName: item.name,
        link: item.link,
        img: item.img,
        key: key }));
});

ReactDOM.render(React.createElement(
    "div",
    { className: "row no-gutter popup-gallery" },
    arr
), $('#workhook')[0]);

},{"./projects.json":4}],2:[function(require,module,exports){
/*!
 * Creative v1.0.4 (http://startbootstrap.com/template-overviews/creative)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

(function ($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(1.2, {
        minFontSize: '35px',
        maxFontSize: '65px'
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });
})(jQuery); // End of use strict

},{}],3:[function(require,module,exports){
!function (a) {
  "use strict";
  a("a.page-scroll").bind("click", function (b) {
    var c = a(this);a("html, body").stop().animate({ scrollTop: a(c.attr("href")).offset().top - 50 }, 500, "easeInOutExpo"), b.preventDefault();
  }), a("h1").fitText(1.2, { minFontSize: "35px", maxFontSize: "65px" }), a("#mainNav").affix({ offset: { top: 100 } });
}(jQuery), React.createClass({});

},{}],4:[function(require,module,exports){
module.exports={
	"twogrand" : {
		"type" : "Internship",
		"name" : "YouFood",
		"img" : "img/portfolio/thumbnails/youfood.svg",
		"description" : "",
		"link" : "http://www.joinyoufood.com/"
	},

	"Airware" : {
		"type" : "Internship",
		"name" : "Airware",
		"img" : "img/portfolio/thumbnails/airware.jpg",
		"description" : "",
		"link" : "http://www.airware.com/"
	},

	"JPL" : {
		"type" : "Undergraduate Research Fellow",
		"name" : "NASA Jet Propulsion Laboratory",
		"img" : "img/portfolio/thumbnails/nasa-dark.jpg",
		"description" : "",
		"link" : "http://www.jpl.nasa.gov/"
	},

	"hdr" : {
		"type" : "Computer Vision",
		"name" : "Automatic HDR control for Quadrotor Obstacle Avoidance",
		"img" : "img/portfolio/thumbnails/exposure2.jpg",
		"description" : "",
		"link" : ""
	},

	"deepNN" : {
		"type" : "Machine Learning",
		"name" : "Rapid Classification in Deep Feedforward Neural Networks",
		"img" : "img/portfolio/thumbnails/neuralnet.png",
		"description" : "",
		"link" : "https://drive.google.com/file/d/0B1z-VeOYIEQAcl9qeVdQZTdNMVk/view?usp=sharing"
	},

	"poker" : {
		"type" : "Machine Learning",
		"name" : "Reinforcement Learning for Multiplayer Poker",
		"img" : "img/portfolio/thumbnails/poker.jpg",
		"description" : "",
		"link" : "https://drive.google.com/file/d/0B1z-VeOYIEQANU9ON2J5ekhKRXc/view?usp=sharing"
	},

	"netflix" : {
		"type" : "Machine Learning",
		"name" : "Predicting Netflix Movie Ratings",
		"img" : "img/portfolio/thumbnails/netflix.png",
		"description" : "",
		"link" : "https://github.com/connorlee77/NetflixRatingPredictor"
	},

	"arts" : {
		"type" : "Data Mining",
		"name" : "Leveraging big data insights to improve public transportation",
		"img" : "img/portfolio/thumbnails/arts.jpg",
		"description" : "",
		"link" : "https://drive.google.com/open?id=0B1z-VeOYIEQAd2puTFdHYnR3Nlk"
	},

	"neural-net" : {
		"type" : "GPU",
		"name" : "Parallel Neural Net",
		"img" : "img/portfolio/thumbnails/mnist.png",
		"description" : "",
		"link" : "https://github.com/connorlee77/parallel-neural-net"
	},

	"ardrone" : {
		"type" : "Drones",
		"name" : "AR.Drone State Estimation",
		"img" : "img/portfolio/thumbnails/kalman.png",
		"description" : "",
		"link" : "https://github.com/connorlee77/ardrone_stateestimation"
	},

	"me100" : {
		"type" : "Drones",
		"name" : "Colored Object Detection",
		"img" : "img/portfolio/thumbnails/ObjectTracking.png",
		"description" : "",
		"link" : "https://github.com/connorlee77/RPiVisionAPI"
	}
}
},{}]},{},[1,2,3]);
