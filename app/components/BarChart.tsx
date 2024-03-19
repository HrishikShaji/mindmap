import { useEffect, useRef } from "react";
import * as d3 from "d3";

export const BarChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const newData = [
    {
      label: "positive",
      value: 10,
    },
    {
      label: "negative",
      value: 7,
    },
    {
      label: "total",
      value: 17,
    },
    {
      label: "comments",
      value: 25,
    },
  ];

  const dimensions = {
    width: 500,
    height: 300,
    chartWidth: 400,
    chartHeight: 200,
    marginLeft: 50,
    marginTop: 50,
  };

  const maxValue = d3.max(newData, (d) => d.value);
  const y = d3
    .scaleLinear()
    .domain([0, maxValue!])
    .range([dimensions.chartHeight, 0]);
  const x = d3
    .scaleBand()
    .domain(newData.map((d) => d.label))
    .range([0, dimensions.chartWidth])
    .paddingInner(0.1)
    .paddingOuter(0.3);

  const yAxis = d3.axisLeft(y).ticks(3);
  const xAxis = d3.axisBottom(x);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .append("rect")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("fill", "white");

    const chartGroup = svg
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.marginLeft}, ${dimensions.marginTop})`,
      );

    const xAxisGroup = chartGroup
      .append("g")
      .attr("transform", `translate(0, ${dimensions.chartHeight})`)
      .call(xAxis);

    const yAxisGroup = chartGroup.append("g").call(yAxis);

    chartGroup
      .selectAll("rect")
      .data(newData)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.label)!)
      .attr("width", x.bandwidth)
      .attr("height", 0)
      .attr("y", dimensions.chartHeight)
      .transition()
      .duration(1000)
      .delay((_, i) => i * 100)
      .attr("y", (d) => y(d.value)!)
      .attr("height", (d) => dimensions.chartHeight - y(d.value))
      .attr("fill", "blue");
  }, []);

  return (
    <div className="">
      <h2>Bar Chart</h2>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
    </div>
  );
};

export default BarChart;
