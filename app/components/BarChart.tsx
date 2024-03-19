import { useEffect, useRef } from "react";
import * as d3 from "d3";

export const BarChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const data = [
    {
      id: "1",
      total: 10,
      negative: 5,
      positive: 5,
      comments: 20,
    },
    {
      id: "2",
      total: 17,
      negative: 15,
      positive: 2,
      comments: 25,
    },
    {
      id: "3",
      total: 23,
      negative: 18,
      positive: 5,
      comments: 10,
    },
    {
      id: "4",
      total: 9,
      negative: 3,
      positive: 6,
      comments: 2,
    },
  ];

  const dimensions = {
    width: 500,
    height: 300,
    chartWidth: 400,
    chartHeight: 200,
    marginLeft: 100,
  };

  const maxValue = d3.max(data, (d) => d.total);
  const y = d3
    .scaleLinear()
    .domain([0, maxValue!])
    .range([0, dimensions.chartHeight]);
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.id))
    .range([0, dimensions.chartWidth])
    .paddingInner(0.1);

  const yAxis = d3.axisLeft(y).ticks(3);
  const xAxis = d3.axisBottom(x);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    svg
      .append("rect")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("fill", "white");

    const xAxisGroup = svg
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.marginLeft},${dimensions.chartHeight})`,
      )
      .call(xAxis);
    const yAxisGroup = svg
      .append("g")
      .attr("transform", `translate(${dimensions.marginLeft},0)`)
      .call(yAxis);

    svg
      .append("g")
      .attr("transform", `translate(${dimensions.marginLeft},0)`)
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d) => x(d.id)!)
      .attr("width", x.bandwidth)
      .attr("height", (d) => y(d.total))
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
