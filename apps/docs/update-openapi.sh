#!/bin/bash

# Exit on error
set -e

# Replace {id} and {datasetId} with id and datasetId
echo "Processing OpenAPI spec..."

# Detect OS and use appropriate sed syntax
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS/BSD sed
  sed -i '' 's/{id}/id/g' openapi.json
  sed -i '' 's/{datasetId}/datasetId/g' openapi.json
else
  # GNU sed (Linux, e.g., GitHub Actions)
  sed -i 's/{id}/id/g' openapi.json
  sed -i 's/{datasetId}/datasetId/g' openapi.json
fi

echo "OpenAPI spec updated at apps/docs/openapi.json"
