#!/bin/bash

# Exit on error
set -e

# Replace {id} and {datasetId} with id and datasetId
echo "Processing OpenAPI spec..."
sed -i '' 's/{id}/id/g' openapi.json
sed -i '' 's/{datasetId}/datasetId/g' openapi.json

echo "OpenAPI spec updated at apps/docs/openapi.json"
