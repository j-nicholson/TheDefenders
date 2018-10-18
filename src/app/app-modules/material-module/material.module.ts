import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { svgIcons } from './icon-map';
@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [],
  exports: [
    MatProgressSpinnerModule,
    MatMenuModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ]
})
export class MaterialModule {
  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    svgIcons.forEach(icon => {
      iconRegistry.addSvgIcon(icon.name, sanitizer.bypassSecurityTrustResourceUrl(icon.path));
    });
  }
}
