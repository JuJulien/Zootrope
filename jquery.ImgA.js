/*
 * ImgA
 *
 * cplou@inouit.com
 */

var ImgA = {
    images: [],
}

ImgA.Image = function(element, settings) {
    // settings
    var self = this;
    this.element = element;
    this.images = settings.images || null;
    this.frames = settings.frames;
    this.isActive = settings.isActive === false ? false : true;
    this.isPlaying = false;
    this.stopLoop = false;

    // split the image path
    var splitImagePath = this.images.split('###');
    this.imagePrefix = splitImagePath[0];
    this.imageSuffix = splitImagePath[1];


    // add to global image stack
    ImgA.images.push(this);

    // create image set
    this.imageSet = document.createElement('div');
    this.imageSet.setAttribute('class', 'ImgA-set');
    this.imageSet.style.cssText = 'position: relative; width: 100%; height: 100%; overflow: hidden;';
    this.imageSet.frames = [];

    // add images to DOM
    var loaders = [];
    var loadTimer = setInterval(function() {
        var isFinished = true;
        for(var loader in loaders) {
            if(loaders[loader].isLoaded === false) {
                isFinished = false;
                break;
            }
        }
        if(loaders.length == self.frames && isFinished) {
            clearInterval(loadTimer);
            self.element.trigger('load');
        }
    }, 100);

    for(var i = 1; i <= this.frames; i++) {
        var frame = document.createElement('img');
        frame.isLoaded = false;
        frame.index = i;
        loaders.push(frame);
        frame.addEventListener('error', function() {
            this.isLoaded = true;
            self.frames--;
            loaders.splice(loaders.indexOf(this), 1);
        }, false);
        frame.addEventListener('load', function() {
            this.isLoaded = true;
        }, false);
        frame.setAttribute('src', this.imagePrefix + i + this.imageSuffix);
        frame.style.cssText = 'position: absolute; top: 0; left: 0; display: none;';
        this.imageSet.appendChild(frame);
        this.imageSet.frames.push(frame);
    }
    this.element.append(this.imageSet);

};

ImgA.Image.prototype.showFrame = function(reference) {
    // move the last frame out of the viewport
        
    if(this.lastFrame) {
        this.lastFrame.style.display = 'none';
    }

    // set the correct frame
    if (typeof(reference)=='number'){
        var imageToShow = this.imageSet.frames[reference];
    }
    else {
        var imageToShow = reference;
    }
    imageToShow.style.display = 'block';
    this.lastFrame = imageToShow;
};

// Start the animation 
ImgA.Image.prototype.startCycle= function(duration,options,callBack) {
    if (this.isPlaying == false && this.stopLoop == false){
        var self = this;
        var settings = options || {};
        if (!settings.interval){
            settings.interval = 0;
        }
        this.isPlaying = true;
        stepNb = this.frames;
        stepTime = duration / stepNb;
        jQuery(this.imageSet.frames).each(function(i) {
            var imageToShow = this
            setTimeout(function(){
                self.showFrame(imageToShow);
            }
            ,stepTime*i)

            if (i == stepNb-1){
                setTimeout(function() {
                    self.isPlaying = false;
                    eval(callBack);
                    if (settings.loop) {
                        setTimeout(function() {
                            self.startCycle(duration,options,callBack);
                        },settings.interval);
                    }
                },stepTime*i);
            } 
        })
    }
    this.stopLoop = false;
};

// Stop the animation 
ImgA.Image.prototype.stopCycle= function() {
    this.stopLoop = true;
};

ImgA.Image.prototype.show = function() {
    this.element.show();
};

ImgA.Image.prototype.hide = function() {
    this.element.hide();
};

ImgA.Image.prototype.activate = function() {
    this.isActive = true;
};

ImgA.Image.prototype.deactivate = function() {
    this.isActive = false;
};

ImgA.Image.prototype.destroy = function() {
    ImgA.images.splice(ImgA.images.indexOf(this), 1);
};