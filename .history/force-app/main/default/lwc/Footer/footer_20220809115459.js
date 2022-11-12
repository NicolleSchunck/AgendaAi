import { LightningElement, api, track } from "lwc";
import LANG from "@salesforce/i18n/lang";

import SVG_FACEBOOK from "@salesforce/resourceUrl/iconFacebook";
import SVG_INSTAGRAM from "@salesforce/resourceUrl/iconInstagram";
import SVG_YOUTUBE from "@salesforce/resourceUrl/iconYoutube";
import SVG_LOGO_FOOTER from "@salesforce/resourceUrl/logoFooter";
import SVG_CHAT from "@salesforce/resourceUrl/chatFixedIcon";
import SVG_WHATSAPP from "@salesforce/resourceUrl/whatsappFixedIcon";

// import productSearch from '@salesforce/apex/B2BSearchControllerSample.productSearch';
// import communityId from '@salesforce/community/Id';

export default class Footer extends LightningElement {
  svgFacebookURL = `${SVG_FACEBOOK}#iconFacebook`;
  svgInstagramURL = `${SVG_INSTAGRAM}#iconInstagram`;
  svgYoutubeURL = `${SVG_YOUTUBE}#iconYoutube`;
  svgLogoFooterURL = `${SVG_LOGO_FOOTER}#logoFooter`;
  svgChatUrl = `${SVG_CHAT}#chatFixedIcon`;
  svgWhatsAppUrl = `${SVG_WHATSAPP}#whatsappFixedIcon`;

  accordionHeading;

  language = LANG;

  @api phone;
  @api whatsApp;
  @api email;
  @api officeHours;
  @api linkInstitutional01;
  @api linkInstitutional02;
  @api linkInstitutional03;
  @api linkInstitutional04;
  @api linkInstitutional05;
  @api linkInstitutional06;
  @api linkInstitutional07;
  @api linkInstitutional08;
  @api linkInstitutional09;
  @api linkBillet; //dias de Atendimento da Semana

  //Language Selected
  isportuguese = "";
  isenglish = "";
  isspanish = "";

  get whatsappUrl() {
    return `https://api.whatsapp.com/send?phone=55${this.whatsApp}`
  }

  get phoneUrl() {
    return `tel:=${this.phone}`
  }
  // connectedCallback() {

  //   let searchQuery = JSON.stringify({
  //     searchTerm: '24583'
  //   });

  //   productSearch({
  //     communityId: communityId,
  //     searchQuery: searchQuery,
  //     effectiveAccountId: '0016s00000OVg4jAAD'
  //   }).then((result) => {        
  //       console.log(`Retorno Footer ${JSON.stringify(result)}`)
    
  //   }).catch((error) => {
  //       console.error("Error triggerProductSearch", error);
  //   })
  // }

  renderedCallback() {
    if (this.language === "pt-BR") {
      this.isportuguese = "selected";
    }
    if (this.language === "es") {
      this.isspanish = "selected";
    }
    if (this.language === "en-US") {
      this.isenglish = "selected";
    }

    this.accordionHeading = this.template.querySelectorAll(
      ".accordion_item_heading"
    );

    for (let i = 0; i < this.accordionHeading.length; i++) {
      this.accordionHeading[i].addEventListener(
        "click",
        this.handleToogleItem,
        false
      );
    }
  }

  handleToogleItem(event) {
    if (event.target.parentNode.classList.contains("open")) {
      event.target.parentNode.classList.add("close");
      event.target.parentNode.classList.remove("open");
    } else {
      event.target.parentNode.classList.add("open");
      event.target.parentNode.classList.remove("close");
    }
  }

  updateQueryStringParameter(uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";

    if (uri.match(re)) return uri.replace(re, "$1" + key + "=" + value + "$2");

    return uri + separator + key + "=" + value;
  }

  handleChange(e) {
    window.location.replace(
      this.updateQueryStringParameter(
        window.location.href,
        "language",
        e.target.value
      )
    );
  }

  openChat() {
    if (this.template.querySelector('.outter-wrapper')) {
        let chatEvent = new CustomEvent(
            'chatEvent',
            {
                detail: {
                    startChat: true
                },
                bubbles: true,
                cancelable: true
            }
        );
        this.template.querySelector('.outter-wrapper').dispatchEvent(chatEvent);
    }
  }

  @track chatVisible = false;
  connectedCallback(){
    setTimeout(() => {
      this.chatVisible = true;
      // console.log('chatVisible2', this.chatVisible);
    }, 5000);
  }
}