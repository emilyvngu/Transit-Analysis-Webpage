d3.csv("Data/scatter_plot.csv").then(data => {
    data.forEach(d => {
        d.area_km2 = +d.area_km2;
        d.transit_friendliness_index = +d.transit_friendliness_index;
    });
  
  let width = 600, height = 400;
  
  let margin = {
    top: 50,
    bottom: 50,
    left: 50,
    right: 50
  }
  
  let svg = d3.select("#area-vs-tfi-scatter")
              .append("svg")
              .attr("width", width)
              .attr("height", height)
  
  let yscale = d3.scaleLinear()
                 .domain([0,1])
                 .range([height - margin.bottom, margin.top])
  
  let xscale = d3.scaleLinear()
                 .domain([0, 30])
                 .range([margin.left, width - margin.right])         
  
  let yaxis = svg.append("g")
                 .call(d3.axisLeft().scale(yscale))
                 .attr("transform", `translate(${margin.left} , 0)`)
                
  let xaxis = svg.append('g')
                .call(d3.axisBottom().scale(xscale))
                .attr("transform", `translate(0,${height - margin.bottom})`)

  svg.append("text")
     .text("Neighborhood area (km²)")
     .attr("x", width/2.7)
     .attr("y", height - 13)
                
  svg.append("text")
     .text("Transit friendliness index")
     .attr("x", 0-height/1.5)
     .attr("y", 15)
     .attr("transform", "rotate(-90)")

  svg.append("text")
     .text("Neighborhood Area vs. Transit Friendliness Index")
     .attr("x", width/5)
     .attr("y", 20)

  let circles = svg.selectAll("circle")
                   .data(data)
                   .enter()
                   .append("circle")
                   .attr("r", 5)
                   .attr("cx", d=> xscale(d.area_km2))
                   .attr("cy", d=> yscale(d.transit_friendliness_index))

  let n = data.length;
  let xSum = d3.sum(data, d => d.area_km2);
  let ySum = d3.sum(data, d => d.transit_friendliness_index);
  let xySum = d3.sum(data, d => d.area_km2 * d.transit_friendliness_index);
  let xSqSum = d3.sum(data, d => Math.pow(d.area_km2, 2));
  let slope = (n * xySum - xSum * ySum) / (n * xSqSum - xSum * xSum);
  let intercept = (ySum - slope * xSum) / n;
                   
  let line = d3.line()([
    [margin.left, yscale(intercept + slope * xscale.invert(margin.left))],
    [width - margin.right, yscale(intercept + slope * xscale.invert(width - margin.right - 30))]
  ]);
                   
  svg.append("path")
     .datum(data)
    .attr("d", line)
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("fill", "none");
});