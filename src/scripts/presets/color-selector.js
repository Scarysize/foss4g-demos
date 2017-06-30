import * as d3 from 'd3';
import range from 'lodash.range';

export default function(onSelect, valueRange, colorFunction) {
  const svgEle = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  document.body.appendChild(svgEle);

  const svg = d3.select('svg').attr('width', 765).attr('height', 100);
  const width = svg.attr('width');
  const height = svg.attr('height');
  const x = d3.scaleBand().rangeRound(valueRange);
  const y = d3.scaleLinear().rangeRound([0, height]);
  const g = svg.append('g');
  const data = range(...valueRange);

  x.domain(valueRange);
  y.domain([0, 1]);

  const scale = Math.abs(valueRange[1] - valueRange[0]);
  function onBrushEnd() {
    const selection = d3.event.selection;
    // console.log(selection);
    const [min, max] = selection
      .map(val => val / width * scale)
      .map(Math.floor);
    onSelect(min, max);
  }

  const barWidth = width / data.length;

  g
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (d, i) => {
      return i * barWidth;
    })
    .attr('y', () => 1)
    .attr('fill', d => colorFunction(d - 50))
    .attr('width', () => barWidth)
    .attr('height', () => height);

  const brush = d3
    .brushX()
    .extent([[0, 1], [width, height - 1]])
    .on('brush end', onBrushEnd);

  svg.append('g').call(brush).call(brush.move, x.range());
}
