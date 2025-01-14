(async () => {
  const d3 = await import('d3');
  const scale = d3.scaleLinear().domain([0, 100]).range([0, 1]);
  console.log('Test D3 scale:', scale(50)); // Should return 0.5
})();
