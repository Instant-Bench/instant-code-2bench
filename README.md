# Instant Code2Bench

Instant Code2Bench is an API that converts a code snippet into a benchmark code string, enabling automated creation of performance tests.

## Prerequisites

Ensure you have the following:
- Node.js installed
- An OpenAI API key

## Getting Started

### 1. Clone the Repository

First, clone the repository and navigate to the project directory:

```bash
$ git clone <repository-url>
$ cd instant-code2bench
```

### 2. Install Dependencies

Install the required Node.js packages:

```bash
$ npm install
```

### 3. Start the Server

To start the API server, set your OpenAI API key as an environment variable and run the following command:

```bash
$ API_KEY=SERVER_API_KEY OPENAI_KEY=your_openai_api_key node index.js
```

Replace `your_openai_api_key` with your actual OpenAI API key.

The server will start and listen on port `3000`.

## API Endpoints

### 1. Generate Benchmark Code

#### Endpoint
```
POST /
```

#### Description
This endpoint takes a code snippet and its file extension as input and returns a corresponding benchmark code string.

#### Request

- **URL**: `/`
- **Method**: `POST`
- **Content-Type**: `application/json`

**Request Body**:

| Field       | Type     | Description                                  |
|-------------|----------|----------------------------------------------|
| `code`      | `string` | The code snippet for which to generate a benchmark. |
| `extension` | `string` | The file extension (e.g., `.js`, `.py`).     |

**Example**:

```bash
POST http://localhost:3000/
Content-Type: application/json

{
  "code": "function example() { return 42; }",
  "extension": ".js"
}
```

#### Response

The response will contain the benchmark code string generated for the provided snippet.

**Example Response**:

```json
{
  "benchmark": "<Generated benchmark code>"
}
```

### 2. Error Handling

If the required fields (`code` and `extension`) are missing, the API will return a `400 Bad Request` error.

**Example Error Response**:

```json
{
  "error": "Bad Request",
  "message": "body should have required property 'code'"
}
```

## Example Usage

Here’s how you can test the API using `curl`:

```bash
curl -X POST http://localhost:3000/ \
  -H "Content-Type: application/json" \
  -d '{"code": "function example() { return 42; }", "extension": ".js"}'
```

## License

This project is licensed under the [MIT License](LICENSE).
