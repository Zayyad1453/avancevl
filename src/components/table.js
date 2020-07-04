import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class Table extends Component {
  componentDidMount() {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    chart.paddingRight = 20;

    let data = [];
    let visits = 4;
    for (let i = 1; i < 6; i++) {
      visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 1);
      data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
    }

    chart.data = data;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;
    dateAxis.renderer.grid.template.stroke = am4core.color("#FFF");
    dateAxis.renderer.labels.template.fill = am4core.color("#FFF");

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;
    valueAxis.renderer.grid.template.stroke = am4core.color("#FFF");
    valueAxis.renderer.labels.template.fill = am4core.color("#FFF");

    let series = chart.series.push(new am4charts.LineSeries());

    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";
    series.stroke = am4core.color("#FFF");

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();

    let bullet = series.bullets.push(new am4charts.CircleBullet());
    this.chart = chart;
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

  render() {
    return (
      <div id="chartdiv"></div>
    );
  }
}

export default Table;