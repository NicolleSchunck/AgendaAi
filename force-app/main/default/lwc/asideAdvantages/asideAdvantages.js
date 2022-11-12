import { LightningElement, api } from "lwc";

export default class BarraDeVantagens extends LightningElement {
  // Advantages 01
  @api advantageLink01;
  @api advantageText01;
  @api advantageImg01;
  @api isActive01;

  // Advantages 02
  @api advantageLink02;
  @api advantageText02;
  @api advantageImg02;
  @api isActive02;

  // Advantages 03
  @api advantageLink03;
  @api advantageText03;
  @api advantageImg03;
  @api isActive03;

  // Advantages 04
  @api advantageLink04;
  @api advantageText04;
  @api advantageImg04;
  @api isActive04;

  // Advantages 05
  @api advantageLink05;
  @api advantageText05;
  @api advantageImg05;
  @api isActive05;

  advantageImgLink01;
  advantageImgLink02;
  advantageImgLink03;
  advantageImgLink04;
  advantageImgLink05;

  renderedCallback() {
    this.advantageImgLink01 =
      "/s/sfsites/c/cms/delivery/media/" + this.advantageImg01;
    this.advantageImgLink02 =
      "/s/sfsites/c/cms/delivery/media/" + this.advantageImg02;
    this.advantageImgLink03 =
      "/s/sfsites/c/cms/delivery/media/" + this.advantageImg03;
    this.advantageImgLink04 =
      "/s/sfsites/c/cms/delivery/media/" + this.advantageImg04;
    this.advantageImgLink05 =
      "/s/sfsites/c/cms/delivery/media/" + this.advantageImg05;
  }
}