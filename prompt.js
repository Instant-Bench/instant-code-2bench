const prompts = (code, extension) => {
  switch (extension) {
    case 'cpp':
    case 'cc':
    case 'c':
    case 'h':
    case 'hpp':
      return `
I have a piece of C++ code, and I need to create a benchmark for it. Please generate a complete benchmark file with the necessary templating. Here are the requirements:

1. Assume all necessary values: If any values or configurations are missing from the provided code, assume appropriate default values.
2. Use the benchmarking framework Google Benchmark and make sure to call BENCHMARK_MAIN() in the end.
3. Create setup and teardown functions: If needed, create setup and teardown functions to initialize and clean up resources.
4. Generate sample data for the benchmarks.
5. Multiple benchmark scenarios: Create multiple benchmark scenarios to cover different aspects of the code's functionality.
6. Provide instructions on how to compile and run the benchmark as a code-comment. Assume the name of file as bench.cpp.
7. Include all necessary namespaces and classes: Define any missing namespaces, classes, or structures needed for the code to compile and run.
8. Do not import non standard libraries other than Google Benchmark. If the code contains classes or namespaces that weren't declared, create it assuming empty values or default values
9. The output must be only the cpp code. Do not include any message other than the code. The format returned must be string instead of a markdown.

Here is the C++ code:

\`\`\`${code}\`\`\``
    case 'javascript':
    case 'js':
    case 'cjs':
    case 'mjs':
      return `
I have a piece of JavaScript code, and I need to create a benchmark for it. Please generate a complete benchmark file with the necessary templating. Here are the requirements:

1. Assume all necessary values: If any values or configurations are missing from the provided code, assume appropriate default values.
2. Use the benchmarking framework require('bench-node').
3. Generate sample data for the benchmarks.
4. Include all necessary classes: Define any missing classes, or structures needed for the code to run.
5. Do not import non standard libraries other than bench-node. If the code contains classes or functions that weren't declared, create it assuming empty values or default values
6. The output must be only the javascript code. Do not include any message other than the code. The format returned must be string. Do not return markdown such as \`\`\`javascript

This is the bench-node documentation:

\`\`\`
const { Suite } = require('bench-node');

const suite = new Suite();

suite.add('Using delete property', () => {
  const data = { x: 1, y: 2, z: 3 };
  delete data.y;

  data.x;
  data.y;
  data.z;
});

suite.run();

// $ node --allow-natives-syntax my-benchmark.js
\`\`\`

Here is the JavaScript code:

\`\`\`${code}\`\`\``
    default:
      throw `Invalid extension ${extension}`;
  }
}

module.exports = {
  prompts
}
