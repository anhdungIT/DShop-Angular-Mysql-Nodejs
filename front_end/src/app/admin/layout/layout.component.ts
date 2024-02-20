import { Component,Renderer2,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit {
  // ngAfterViewInit(): void {
    account:any;
  //   const mainscript = document.createElement('script');
  //   mainscript.src = "/assets/admin-page/js/main.js";
  //   document.body.appendChild(mainscript);
  // }
  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    // this.loadScript("/src/assets/admin-page/js/jquery-2.2.4.min.js");
    // this.loadScript("/src/assets/admin-page/js/bootstrap.min.js");
    this.loadScript("https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js");
    this.loadStylesheet("https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap4.min.css");

    const mainscript = document.createElement('script');
    mainscript.src = "/assets/admin-page/js/main.js";
    document.body.appendChild(mainscript);
    // Additional scripts and stylesheets can be added in the same way
  }

  private loadScript(scriptUrl: string): void {
    const script = this.renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = scriptUrl;
    this.renderer.appendChild(document.head, script);
  }

  private loadStylesheet(stylesheetUrl: string): void {
    const link = this.renderer.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = stylesheetUrl;
    this.renderer.appendChild(document.head, link);
  }
  ngOnInit(): void {

    let storage = sessionStorage.getItem('login');
    if(storage){
      this.account = JSON.parse(storage);
      console.log(this.account)
    }
  }

  onLogout(){
    sessionStorage.clear();
    location.assign('/admin/login')
  }
}
