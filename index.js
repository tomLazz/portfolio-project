document.addEventListener('DOMContentLoaded', function () {
    var currentVisibleParagraph = null;
    var currentProjectDescriptor = null;
    var currentProjectTitle = null;

    // Get all elements with the class "trigger-text"
    var triggerTexts = document.querySelectorAll('.trigger-text');

    // Add click event listener to each trigger text
    triggerTexts.forEach(function (triggerText) {
        triggerText.addEventListener('click', function () {
            // Get the target paragraph ID from the data-target attribute
            var targetId = triggerText.getAttribute('data-target');

            // Get the corresponding paragraph element 
            var targetParagraph = document.getElementById(targetId);


            if(targetParagraph.classList.contains('project-descriptor')) {
                var openerMessage = document.getElementById('project-opener');
                openerMessage.classList.add('hidden');

                if(currentProjectDescriptor) {
                    currentProjectDescriptor.classList.add('hidden');
                }
                if(targetParagraph) {
                    targetParagraph.classList.remove('hidden');
                    currentProjectDescriptor = targetParagraph;
                }

                if(currentProjectTitle) {
                    currentProjectTitle.classList.remove('left-border');
                }
                if(triggerText) {
                    triggerText.classList.add('left-border');
                    currentProjectTitle = triggerText;
                }


            } else {
                var openerParagraph = document.getElementById('opener-paragraph');
                openerParagraph.classList.add('hidden');

                if (currentVisibleParagraph) {
                    currentVisibleParagraph.classList.add('hidden');
                }
    
                // Show the target paragraph
                if (targetParagraph) {
                    targetParagraph.classList.remove('hidden');
                    currentVisibleParagraph = targetParagraph;
                }
    
                var logos = document.getElementById('clickable-logos');
                logos.classList.remove('hidden');
            }
            
           
        });
    });

    
}); 

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

// Add click event listeners to elements with the class "clickable"
document.addEventListener('DOMContentLoaded', function () {
    const clickableElements = document.querySelectorAll('.clickable');
    clickableElements.forEach(function (element) {
        
        element.addEventListener('click', function () {
            var toCopy = element.getAttribute('to-copy')
            copyToClipboard(toCopy);

            clickableElements.forEach(function(otherElement) {
                otherElement.setAttribute('data-tooltip', 'Click to Copy');
            });
            
            element.setAttribute('data-tooltip', 'Copied!');


            
        });
    });
});

document.addEventListener('mousemove',  function(event) {
    var coloredElements = document.querySelectorAll(".multicolor")
    var coloredBorder = document.querySelectorAll(".bordercolor")

    coloredElements.forEach(function(currElement) {
        if(!currElement.classList.contains('hidden')) {
            const x = event.clientX; 
            const halfWidth = Math.floor(document.documentElement.clientWidth / 2);
    
            const gradient = `linear-gradient(to right, rgb(${255 - Math.floor((Math.abs(halfWidth - x))**(5/8))}, 127, 127), rgb(${218 - Math.floor((Math.abs(halfWidth - x))**(5/8))}, 255, 0))`;
    
            currElement.style.backgroundImage = gradient;
        }
    });

    coloredBorder.forEach(function(currElement) {
        if(!currElement.classList.contains('hidden')) {
            const x = event.clientX; 
            const halfWidth = Math.floor(document.documentElement.clientWidth / 2);
    
            const gradient = `linear-gradient(to bottom, rgb(${218 - Math.floor((Math.abs(halfWidth - x))**(5/8))}, 255, 0), rgb(${255 - Math.floor((Math.abs(halfWidth - x))**(5/8 ))}, 127, 127)) 1`;

            currElement.style.borderImage = gradient;
        }
    });
    
});