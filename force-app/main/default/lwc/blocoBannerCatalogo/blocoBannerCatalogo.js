import { LightningElement, api, track } from 'lwc';
import formFactorPropertyName from '@salesforce/client/formFactor';

export default class BlocoBannerCatalogo extends LightningElement {
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

    // //Active on Desktop
    // get activeOnDesktop() {
    //     if (this.desktop == "INATIVO") {
    //         return false;
    //     }
    //     return true;
    // }

    // //Active on Tablet
    // get activeOnTablet() {
    //     if (this.tablet == "INATIVO") {
    //         return false;
    //     }
    //     return true;
    // }

    // //Active on Mobile
    // get activeOnMobile() {
    //     if (this.mobile == "INATIVO") {
    //         return false;
    //     }
    //     return true;
    // }

    //First Image
    get firstImage() {
        let today = new Date();
        // console.log('banner firstImage', today)
        // let dd = today.getDate();
        // let mm = today.getMonth()+1;
    
        // if(dd<10){dd='0'+dd};
        // if(mm<10){mm='0'+mm};

        let startDate = new Date(this.firstDateStart);
        let endDate = new Date(this.firstDateEnd);
        // console.log('banner firstImage/firstDateStart', startDate)
        // console.log('banner firstImage/firstDateEnd', endDate)
    
        if (today >= startDate && today <= endDate) {
            return true;
        }
        else {
            // if (this.firstActive == "INATIVO") {
                return false;
            // }
            // return true;
        }
    }

    //Second Image
    get secondImage() {
        let today = new Date();
        // let dd = today.getDate();
        // let mm = today.getMonth()+1;
    
        // if(dd<10){dd='0'+dd};
        // if(mm<10){mm='0'+mm};

        let startDate = new Date(this.secondDateStart);
        let endDate = new Date(this.secondDateEnd);
        // console.log('banner firstImage/secondDateStart', startDate)
        // console.log('banner firstImage/secondDateEnd', endDate)

        if (today >= startDate && today <= endDate) {
            return true;
        }
        else {
            // if (this.secondActive == "INATIVO") {
                return false;
            // }
            // return true;
        }
    }  

    @api desktop;
    @api tablet;
    @api mobile;
    // @api firstActive;
    @api firstDateStart;
    @api firstDateEnd;
    @api firstLink;
    @api firstImg;
    @api firstImgMobile;
    // @api secondActive;
    @api secondDateStart;
    @api secondDateEnd;
    @api secondLink;
    @api secondImg;
    @api secondImgMobile;
    
    @track firstImgLink
    @track firstImgMobileLink
    @track secondImgLink;
    @track secondImgMobileLink;

    connectedCallback() {
        this.firstImgLink = "/s/sfsites/c/cms/delivery/media/" + this.firstImg;
        this.firstImgMobileLink = "/s/sfsites/c/cms/delivery/media/" + this.firstImgMobile;
        this.secondImgLink = "/s/sfsites/c/cms/delivery/media/" + this.secondImg;
        this.secondImgMobileLink = "/s/sfsites/c/cms/delivery/media/" + this.secondImgMobile;

        // console.log('Banner firstDateStart', this.firstDateStart);
        // console.log('Banner firstDateEnd', this.firstDateEnd);
        // console.log('Banner secondDateStart', this.secondDateStart);
        // console.log('Banner secondDateEnd', this.secondDateEnd);
    }
}