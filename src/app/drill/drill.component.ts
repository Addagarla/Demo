import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
 
export interface data {
	[key: string]: any;
}
 


@Component({
  selector: 'app-drill',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CanvasJSAngularChartsModule],
  templateUrl: './drill.component.html',
  styleUrl: './drill.component.css'
})
export class DrillComponent implements data  {
  chart: any;
isButtonVisible = false;

visitorsChartDrilldownHandler = (e: any) => {
this.chart.options = this.visitorsDrilldownedChartOptions;	
this.chart.options.data = this.options[e.dataPoint.name];
this.chart.options.title = { text: e.dataPoint.name }
this.chart.render();
this.isButtonVisible = true;
}

visitorsDrilldownedChartOptions = {
animationEnabled: true,
theme: "light2",
axisY: {
gridThickness: 0,
lineThickness: 1
},
data: []
};

newVSReturningVisitorsOptions = {
animationEnabled: true,
theme: "light2",
title: {
text: "New vs Returning Visitors"
},
subtitles: [{
text: "Click on Any Segment to Drilldown",
backgroundColor: "#2eacd1",
fontSize: 16,
fontColor: "white",
padding: 5
}],
data: []
};

options: data = {
"New vs Returning Visitors": [{
type: "pie",
name: "New vs Returning Visitors",
startAngle: 90,
cursor: "pointer",
explodeOnClick: false,
showInLegend: true,
legendMarkerType: "square",			
click: this.visitorsChartDrilldownHandler,
indexLabelPlacement: "inside",
indexLabelFontColor: "white",
dataPoints: [
  { y: 551160, name: "New Visitors", color: "#058dc7", indexLabel: "62.56%" },
  { y: 329840, name: "Returning Visitors", color: "#50b432", indexLabel: "37.44%" }
]
}],
"New Visitors": [{
color: "#058dc7",
name: "New Visitors",
type: "column",
dataPoints: [
  { label: "Jan", y: 42600 },
  { label: "Feb", y: 44960 },
  { label: "Mar", y: 46160 },
  { label: "Apr", y: 48240 },
  { label: "May", y: 48200 },
  { label: "Jun", y: 49600 },
  { label: "Jul", y: 51560 },
  { label: "Aug", y: 49280 },
  { label: "Sep", y: 46800 },
  { label: "Oct", y: 57720 },
  { label: "Nov", y: 59840 },
  { label: "Dec", y: 54400 }
]
}],
"Returning Visitors": [{
color: "#50b432",
name: "Returning Visitors",
type: "column",
dataPoints: [
  { label: "Jan", y: 21800 },
  { label: "Feb", y: 25040 },
  { label: "Mar", y: 23840 },
  { label: "Apr", y: 24760 },
  { label: "May", y: 25800 },
  { label: "Jun", y: 26400 },
  { label: "Jul", y: 27440 },
  { label: "Aug", y: 29720 },
  { label: "Sep", y: 29200 },
  { label: "Oct", y: 31280 },
  { label: "Nov", y: 33160 },
  { label: "Dec", y: 31400 }
]
}]
};
chartOptions: any;

handleClick(event: Event) { 
this.chart.options = this.newVSReturningVisitorsOptions;
this.chart.options.data = this.options["New vs Returning Visitors"];
this.chart.render(); 
this.isButtonVisible = false;
} 	

getChartInstance(chart: object) {
this.chart = chart;
this.chart.options = this.newVSReturningVisitorsOptions;
this.chart.options.data = this.options["New vs Returning Visitors"];
this.chart.render();
}
}                   
