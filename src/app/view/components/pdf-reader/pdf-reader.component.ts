import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import PSPDFKit from "pspdfkit";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pdf-reader',
  templateUrl: './pdf-reader.component.html',
  styleUrls: ['./pdf-reader.component.scss']
})
export class PdfReaderComponent implements OnInit ,AfterViewInit{

  title = "PSPDFKit for Web Angular Example";
  button_forbidden = ["print","export-pdf"];
  url_ebook:any = "http://localhost:4200/ebooks/";

  constructor(private router:ActivatedRoute) {
    this.router.paramMap.subscribe(data => this.url_ebook += data.get("ebook_url"));
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    PSPDFKit.load({
      standaloneInstancesPoolSize: 0,
      // Use the assets directory URL as a base URL. PSPDFKit will download its library assets from here.
      baseUrl: location.protocol + "//" + location.host + "/assets/",
      document: this.url_ebook,
      container: "#pspdfkit-container",
      disableHighQualityPrinting: true,
      disableForms: true,
      disableTextSelection: true
    }).then(instance => {
      // For the sake of this demo, store the PSPDFKit for Web instance
      // on the global object so that you can open the dev tools and
      // play with the PSPDFKit API.
      instance.setViewState(v => v.set("readOnly", true));
      const items = instance.toolbarItems;
      items.filter((item) => {console.log(item.type)})
      instance.setToolbarItems(items.filter((item) => !this.button_forbidden.includes(item.type)));
      (window as any).instance = instance;
    });
  }


}
