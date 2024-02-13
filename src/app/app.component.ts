import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { EnergyBillComponent } from "./energy-bill/energy-bill.component";
import { PieComponent } from "./pie/pie.component";
import { BarComponent } from "./bar/bar.component";
import { ComboComponent } from "./combo/combo.component";
import { DrillComponent } from "./drill/drill.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, MatCardModule, MatButtonModule, EnergyBillComponent, PieComponent, BarComponent, ComboComponent, DrillComponent]
})
export class AppComponent {
  title = 'singlepage';
}
