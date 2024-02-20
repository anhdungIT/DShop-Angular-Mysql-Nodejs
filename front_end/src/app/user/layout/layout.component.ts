import { AfterViewInit,Component } from '@angular/core';
import { FigureService } from 'src/app/service/figure.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements AfterViewInit{
  figure8new: any[] = [];

  ngAfterViewInit(): void {
    const mainscript = document.createElement('script');
    mainscript.src = "/assets/user-page/js/main.js";
    document.body.appendChild(mainscript);
  }
  constructor(private figureService: FigureService) {
    this.getLatestFigures();

  }
  getLatestFigures() {
    this.figureService.getLatestFigures()
      .subscribe((resultData: any) => {
        this.figure8new = resultData;
      });
  }

}

