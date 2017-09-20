import * as d3 from 'd3';
import range from 'lodash.range';

function setupDom() {
  const brushContainer = document.createElement('div');
  const svgElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'svg'
  );

  brushContainer.classList.add('brush-container');
  svgElement.classList.add('brush');

  brushContainer.appendChild(svgElement);
  document.body.appendChild(brushContainer);
}

function createHandler(scaleValue, onSelect) {
  return () => {
    const selection = d3.event.selection;
    const [min, max] = selection.map(scaleValue).map(Math.floor);
    onSelect(min, max);
  };
}

export default function(onSelect, valueRange, colorFunction) {
  setupDom();

  const svg = d3
    .select('svg')
    .attr('class', 'brush')
    .attr('width', window.innerWidth)
    .attr('height', 100);
  const width = svg.attr('width');
  const height = svg.attr('height');
  const x = d3.scaleBand().rangeRound(valueRange);
  const y = d3.scaleLinear().rangeRound([0, height]);
  const g = svg.append('g');
  const data = range(...valueRange);
  const barWidth = width / data.length;

  x.domain(valueRange);
  y.domain([0, 1]);

  const scale = Math.abs(valueRange[1] - valueRange[0]);
  const scaleValue = val => val / width * scale;
  const brushHandler = createHandler(scaleValue, onSelect);

  g
    .selectAll('.bar')
    .data(data)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', (_, index) => index * barWidth)
    .attr('y', 1)
    .attr('fill', value => colorFunction(value - 50))
    .attr('width', barWidth)
    .attr('height', height);

  const brush = d3
    .brushX()
    .extent([[0, 1], [width, height - 1]])
    .on('brush end', brushHandler);

  svg
    .append('g')
    .call(brush)
    .call(brush.move, x.range());
}
