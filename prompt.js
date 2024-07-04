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
2. Include necessary libraries: Include all required libraries for benchmarking.
3. Use the benchmarking framework Google Benchmark and make sure to call BENCHMARK_MAIN() in the end.
4. Create setup and teardown functions: If needed, create setup and teardown functions to initialize and clean up resources.
5. Generate sample data for the benchmarks.
6. Multiple benchmark scenarios: Create multiple benchmark scenarios to cover different aspects of the code's functionality.
7. Provide instructions on how to compile and run the benchmark as a code-comment. Assume the name of file as bench.cpp.
8. Include all necessary namespaces and classes: Define any missing namespaces, classes, or structures needed for the code to compile and run.
9. Do not import non standard libraries other than Google Benchmark. If the code contains classes or namespaces that weren't declared, create it assuming empty values or default values
10. The output must be only the cpp code. Do not include any message other than the code. The format returned must be string instead of a markdown.

Here is the C++ code:

\`\`\`${code}\`\`\``
    default:
      throw 'Invalid extension';
  }
}

module.exports = {
  prompts
}
