import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { GraphData } from "../lib/types";

interface BarChartProps {
  graphData: GraphData;
}

export const BarChart: React.FC<BarChartProps> = ({ graphData }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const width = 300;
  const height = 200;

  useEffect(() => {
    const updateChart = () => {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove(); // Clear previous chart
      console.log(
        containerRef.current?.offsetWidth,
        containerRef.current?.offsetHeight,
      );
      if (!containerRef.current) return null;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      const dimensions = {
        width: containerWidth,
        height: containerHeight,
        chartWidth: containerWidth - 60, // Adjust margins as needed
        chartHeight: containerHeight - 60,
        marginLeft: 40,
        marginTop: 30,
      };

      const data = Object.keys(graphData).map((key) => {
        return { label: key, value: graphData[key] };
      });

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

      svg
        .attr("width", dimensions.width)
        .attr("height", dimensions.height)
        .attr("fill", "none");

      svg
        .append("rect")
        .attr("width", dimensions.width)
        .attr("height", dimensions.height);

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
        .attr("fill", "#14b8a6");
    };

    updateChart();

    // Update chart on window resize
    window.addEventListener("resize", updateChart);
    return () => window.removeEventListener("resize", updateChart);
  }, [graphData]);

  return (
    <div
      className="sm:w-[400px] w-[300px] h-[200px] sm:h-[250px]"
      ref={containerRef}
    >
      <svg ref={svgRef} width="100%" height="100%"></svg>
    </div>
  );
};

export default BarChart;
