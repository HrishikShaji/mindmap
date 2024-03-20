import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { GraphData } from "../page";

interface BarChartProps {
  graphData: GraphData;
}

export const BarChart: React.FC<BarChartProps> = ({ graphData }) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const data = Object.keys(graphData).map((key) => {
    return { label: key, value: graphData[key] };
  });

  const dimensions = {
    width: 500,
    height: 300,
    chartWidth: 400,
    chartHeight: 200,
    marginLeft: 50,
    marginTop: 50,
  };

  useEffect(() => {
    const maxValue = d3.max(data, (d) => d.value);
    const y = d3
      .scaleLinear()
      .domain([0, maxValue!])
      .range([dimensions.chartHeight, 0]);
    const x = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, dimensions.chartWidth])
      .paddingInner(0.1)
      .paddingOuter(0.3);

    const yAxis = d3.axisLeft(y).ticks(3);
    const xAxis = d3.axisBottom(x);
    const svg = d3.select(svgRef.current);

    svg
      .append("rect")
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("fill", "none");

    const chartGroup = svg
      .append("g")
      .attr(
        "transform",
        `translate(${dimensions.marginLeft}, ${dimensions.marginTop})`,
      );

    chartGroup
      .append("g")
      .attr("transform", `translate(0, ${dimensions.chartHeight})`)
      .call(xAxis);

    chartGroup.append("g").call(yAxis);

    chartGroup
      .selectAll("rect")
      .data(data)
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
      .attr("fill", "white");
  }, []);

  return (
    <div className="">
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
      ></svg>
    </div>
  );
};

export default BarChart;
