import { LightningElement, api } from 'lwc';
import formFactorPropertyName from '@salesforce/client/formFactor';

export default class BannerSlide extends LightningElement {
    //temporizador
    @api timer;
    desktopImg;
    mobileImg;
    slideLink;
    defaultInterval;
    currentImg = 0;
    images = [];
    imageTotalSize = 0;
    intervalNext = this.defaultInterval;

    pathDefault = "/s/sfsites/c/cms/delivery/media/";

    //Get all images and links
    connectedCallback () {
        this.defaultInterval = this.timer * 1000;

        try {
            let imagesTemp = [];
            let imagesSort = [];

            if(this.getActive(this.startDate1,this.endDate1,this.slider1)) imagesTemp.push ({"desktopImg":this.pathDefault+this.desktopImg1,
                "mobileImg":this.pathDefault+this.mobileImg1,"slideLink":this.slideLink1,"active":true,"position":1*this.position1})
            if(this.getActive(this.startDate2,this.endDate2,this.slider2)) imagesTemp.push ({"desktopImg":this.pathDefault+this.desktopImg2,
                "mobileImg":this.pathDefault+this.mobileImg2,"slideLink":this.slideLink2,"active":true,"position":1*this.position2})
            if(this.getActive(this.startDate3,this.endDate3,this.slider3)) imagesTemp.push ({"desktopImg":this.pathDefault+this.desktopImg3,
                "mobileImg":this.pathDefault+this.mobileImg3,"slideLink":this.slideLink3,"active":true,"position":1*this.position3})
            if(this.getActive(this.startDate4,this.endDate4,this.slider4)) imagesTemp.push ({"desktopImg":this.pathDefault+this.desktopImg4,
                "mobileImg":this.pathDefault+this.mobileImg4,"slideLink":this.slideLink4,"active":true,"position":1*this.position4})
            if(this.getActive(this.startDate5,this.endDate5,this.slider5)) imagesTemp.push ({"desktopImg":this.pathDefault+this.desktopImg5,
                "mobileImg":this.pathDefault+this.mobileImg5,"slideLink":this.slideLink5,"active":true,"position":1*this.position5})

            imagesSort = imagesTemp.sort(function compare(a,b){
                if(a.position<b.position){
                    return -1;
                }else if(a.position>b.position){
                    return 1;
                }
                return 0;
            })

            this.images = imagesSort;
            this.imageTotalSize = imagesSort.length;
            // console.error (JSON.stringify(this.images));
            this.currentImg = 0;
            let current = this.getImages(this.currentImg);
            this.desktopImg = current.desktopImg;
            this.mobileImg = current.mobileImg;
            this.slideLink = current.slideLink;
            this.desactiveOthers();
        } catch (error) {
            console.error ("erro localback"+error)
        }
        this.handlercallback();
    }    

    //Next Slide
    nextSlide () {
        this.currentImg ++;
        if (this.currentImg >= this.images.length) {
            this.currentImg = 0;
        }
        let current = this.getImages (this.currentImg);
        this.desktopImg = current.desktopImg;
        this.mobileImg = current.mobileImg;
        this.slideLink = current.slideLink;
        this.intervalNext = this.defaultInterval;
        this.desactiveOthers();
    }

    //Previous Slide
    prevSlide () {
        this.currentImg --;
        if (this.currentImg < 0) {
            this.currentImg = this.images.length;
        }
        let current = this.getImages (this.currentImg);
        this.desktopImg = current.desktopImg;
        this.mobileImg = current.mobileImg;
        this.slideLink = current.slideLink;
        this.intervalNext = this.defaultInterval;
        this.desactiveOthers();
    }

    //Get the curent image in sequence (by the dot)
    getDotImage(event){
        let index = 1*event.currentTarget.dataset.imageindex;
        this.currentImg = index;
        let current = this.getImages (index);
        this.desktopImg = current.desktopImg;
        this.mobileImg = current.mobileImg;
        this.slideLink = current.slideLink;
        this.intervalNext = this.defaultInterval;
        this.desactiveOthers();
    }

    //Unmark non-active dots
    desactiveOthers(){
        for(let i in this.images){
            let imagem = this.images[i];
            if(i !=this.currentImg)
                imagem['isActive'] = false;
            else 
                imagem['isActive'] = true;
        }
    }

    //Loop of the slide
    handlercallback () {
        setTimeout(() => {
            this.nextSlide();
            this.handlercallback();
        },this.intervalNext)
    }

    //Get the current image
    getImages( i ) {
        let imagem = this.images[i];
        imagem['isActive'] = true;
        return imagem;
    }

    //Slider Date validation 
    getActive (startDate, endDate, slider) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
    
        if(dd<10){dd='0'+dd};
        if(mm<10){mm='0'+mm};

        let dateStart = new Date(startDate);
        let dateEnd = new Date(endDate);

        if (today >= dateStart && today <= dateEnd) {
            return true;
        }
        else {
            if (slider == "ATIVO") {
                return true;
            }
            return false;
        }
    }    

    //Config Desktop
    get isDesktop(){
        return formFactorPropertyName === 'Large';
    }
    //Config Tablet
    get isTablet(){
        return formFactorPropertyName === 'Medium';
    }
    //Config Mobile
    get isMobile(){
        return formFactorPropertyName === 'Small';
    }

    //API Slider 1
    @api slider1;
    @api desktopImg1;
    @api mobileImg1;
    @api slideLink1;
    @api startDate1;
    @api endDate1;
    @api position1;
    //API Slider 2
    @api slider2;
    @api desktopImg2;
    @api mobileImg2;
    @api slideLink2;
    @api startDate2;
    @api endDate2;
    @api position2;
    //API Slider 3
    @api slider3;
    @api desktopImg3;
    @api mobileImg3;
    @api slideLink3;
    @api startDate3;
    @api endDate3;
    @api position3;
    //API Slider 4
    @api slider4;
    @api desktopImg4;
    @api mobileImg4;
    @api slideLink4;
    @api startDate4;
    @api endDate4;
    @api position4;
    //API Slider 5
    @api slider5;
    @api desktopImg5;
    @api mobileImg5;
    @api slideLink5;
    @api startDate5;
    @api endDate5;
    @api position5;
}