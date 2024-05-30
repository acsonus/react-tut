import { useEffect, useRef } from "react";
import * as d3 from "d3";
function D3chart() {
  // variables
  var svgHeight = "500px";
  var svgWidth = "500px";
  const ref = useRef();
  // loading data
  useEffect(() => {
    // set the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Parse the Data

    // Draw rectangle with rounded corners
    var rectangle = svg
      .append("rect")
      .attr("x", 50)
      .attr("y", 50)
      .attr("width", 200)
      .attr("height", 100)
      .attr("rx", 20) // To round the corners
      .attr("ry", 20) // To round the corners
      .style("fill", "#69b3a2");

    // Add label
    var label = svg
      .append("text")
      .attr("x", 150)
      .attr("y", 100)
      .text("My Rectangle")
      .attr("font-family", "sans-serif")
      .attr("font-size", "20px")
      .attr("fill", "black")
      .attr("text-anchor", "middle");
  });
  return (
    <div>
      <p> this is a d3chart </p>

      <svg height={svgHeight} width={svgWidth} ref={ref}></svg>
    </div>
  );
}

export default D3chart;
