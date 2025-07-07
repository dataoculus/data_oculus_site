---
sidebar_position: 2
---

# Configuring Your Datastore

DataOculus provides a comprehensive, user-friendly interface to configure and manage connections to a wide variety of data sources. Configure your data infrastructure through an intuitive visual interface with support for multiple categories of data stores.

![Datastore Overview](./images/datastore-overview.png)
*DataOculus Data Stores dashboard showing all configured data sources*

## Overview

The DataOculus datastore management interface provides:
- **Visual Configuration** - Configure data sources through an intuitive UI
- **Multi-Category Support** - Organize by Data Warehouse, RDBMS, NoSQL, File Storage, and more
- **Secure Connection Management** - Built-in secret management for credentials
- **Real-time Validation** - Test connections before saving
- **Centralized Management** - Manage all data sources from one interface

## Getting Started

### Accessing the Datastore Management Interface

Navigate to **Settings > Data Stores** in your DataOculus dashboard to access the datastore management interface.

![Datastore Management Interface](./images/datastore-interface.png)
*Main datastore management interface with existing configurations*

## Supported Data Store Categories

DataOculus organizes data sources into logical categories for easy management:

### 🏢 **Data Warehouse**
![Data Warehouse Category](./images/data-warehouse-category.png)
*Data Warehouse category showing enterprise analytics platforms*

- **BigQuery** - Google Cloud's serverless data warehouse
- **Snowflake** - Cloud data platform (coming soon)
- **Redshift** - Amazon's data warehouse service (coming soon)
- **Azure Synapse** - Microsoft's analytics service (coming soon)

### 🗄️ **RDBMS (Relational Databases)**
![RDBMS Category](./images/rdbms-category.png)
*RDBMS category showing traditional relational databases*

- **MySQL** - Popular open-source relational database
- **PostgreSQL** - Advanced open-source relational database
- **Oracle** - Enterprise database system (coming soon)
- **SQL Server** - Microsoft's database platform (coming soon)

### 📄 **File Storage**
![File Storage Category](./images/file-storage-category.png)
*File Storage category showing cloud storage options*

- **Google Cloud Storage (GCS)** - Google's object storage service
- **Amazon S3** - AWS object storage (coming soon)
- **Azure Blob Storage** - Microsoft's object storage (coming soon)

### 🌊 **Event Stream**
![Event Stream Category](./images/event-stream-category.png)
*Event Stream category showing real-time data platforms*

- **Apache Kafka** - Distributed streaming platform
- **Google Pub/Sub** - Managed messaging service
- **Amazon Kinesis** - AWS streaming service (coming soon)

### 🍃 **NoSQL**
![NoSQL Category](./images/nosql-category.png)
*NoSQL category showing document and key-value databases*

- **MongoDB** - Document-oriented database
- **Cosmos DB** - Microsoft's multi-model database
- **DynamoDB** - Amazon's managed NoSQL service

### 🏞️ **Data Lake**
![Data Lake Category](./images/data-lake-category.png)
*Data Lake category showing big data storage solutions*

- **Delta Lake** - Open-source storage layer
- **Apache Iceberg** - Table format for analytics (coming soon)

## Adding a New Data Store

### Step 1: Start Configuration

Click the **"Add New Data Store"** button to begin setting up a new data source connection.

![Add New Datastore](./images/add-new-datastore.png)
*Add new data store button in the main interface*

### Step 2: Select Category and Type

Choose your data store category first, then select the specific type from the available options.

![Category Selection](./images/category-selection.png)
*Category selection dropdown with available data store categories*

![Type Selection](./images/type-selection.png)
*Type selection showing available data stores with icons for each type*

### Step 3: Configure Basic Information

Provide essential information about your data store:

![Basic Configuration](./images/basic-configuration.png)
*Basic data store information form*

**Required Fields:**
- **Name** - Unique identifier for your data store
- **Description** - Brief description of the data store purpose
- **Region** - Geographic region where the data store is located
- **Zone** - Availability zone (if applicable)
- **Datacenter** - Specific datacenter location

## Data Store Configuration Examples

### BigQuery (Data Warehouse)
![BigQuery Configuration](./images/bigquery-config.png)
*BigQuery data warehouse configuration form*

**Required Fields:**
- **Project ID** - Your Google Cloud project identifier
- **Parent Project ID** - Parent project (if using shared VPC)
- **Service Account Key** - JSON credentials (stored securely as secret)

**Connection Information:**
```json
{
  "projectId": "my-analytics-project",
  "parentProjectId": "my-org-project",
  "serviceAccountKey": "path/to/secret/credentials"
}
```

### MySQL (RDBMS)
![MySQL Configuration](./images/mysql-config.png)
*MySQL database configuration form*

**Required Fields:**
- **Host** - Database server hostname or IP address
- **Port** - Database server port (default: 3306)
- **Database** - Database name to connect to
- **Username** - Database username
- **Password** - Database password (stored securely as secret)

**Connection Information:**
```json
{
  "host": "mysql.company.com",
  "port": 3306,
  "database": "analytics_db",
  "username": "dataoculus_user",
  "password": "path/to/secret/password"
}
```

### MongoDB (NoSQL)
![MongoDB Configuration](./images/mongodb-config.png)
*MongoDB NoSQL database configuration form*

**Required Fields:**
- **Connection String** - MongoDB connection URI
- **Database** - Database name to connect to

**Connection Information:**
```json
{
  "connectionString": "mongodb://cluster.mongodb.net",
  "database": "analytics"
}
```

### Google Cloud Storage (File Storage)
![GCS Configuration](./images/gcs-config.png)
*Google Cloud Storage file storage configuration form*

**Required Fields:**
- **Bucket Name** - GCS bucket name
- **Credentials File** - Service account JSON file

**Connection Information:**
```json
{
  "bucket": "my-data-bucket",
  "credentialsFile": "uploaded-credentials.json"
}
```

### Apache Kafka (Event Stream)
![Kafka Configuration](./images/kafka-config.png)
*Apache Kafka event streaming configuration form*

**Required Fields:**
- **Bootstrap Servers** - Comma-separated list of Kafka brokers
- **Schema Registry URL** - Confluent Schema Registry endpoint
- **Schema Registry Config** - Registry authentication (stored as secret)

**Connection Information:**
```json
{
  "bootstrapServers": "kafka1:9092,kafka2:9092",
  "schemaRegistryUrl": "https://schema-registry.company.com",
  "schemaRegistryConfig": "path/to/secret/registry-auth"
}
```

## Secure Secret Management

### Storing Sensitive Credentials

DataOculus provides secure secret storage for sensitive information like passwords, API keys, and credentials:

![Secret Management](./images/secret-management.png)
*Secure secret input and storage interface for datastore credentials*

**Secret Storage Process:**
1. Enter your secret value in the designated field
2. Click **"Set Secret"** to securely encrypt and store the credential
3. The secret is encrypted using enterprise-grade encryption
4. Only the secret path reference is stored in the configuration
5. Secrets are never displayed in plain text after storage

**Supported Secret Types:**
- Database passwords
- API keys and tokens
- Service account JSON files
- Certificate files
- Custom authentication credentials

### Secret Management Best Practices

![Secret Best Practices](./images/secret-best-practices.png)
*Best practices for secure credential management*

- **Rotate Regularly** - Update secrets on a regular schedule
- **Use Least Privilege** - Grant minimal required permissions
- **Monitor Access** - Track secret usage and access patterns
- **Secure Storage** - All secrets encrypted at rest and in transit

## Managing Existing Data Stores

### Data Store Overview Table

All configured data stores are displayed in an organized table with the following information:

![Datastore Table](./images/datastore-table.png)
*Table showing all configured data stores with details and actions*

**Columns:**
- **Name** - Data store identifier
- **Type** - Data store technology with icon
- **Category** - Data store category classification
- **Region** - Geographic location
- **Actions** - Edit and delete operations

### Data Store Icons and Types

![Datastore Icons](./images/datastore-icons.png)
*Visual icons representing different data store technologies*

Each data store type is represented by a unique icon for easy visual identification:
- 🔷 BigQuery - Google Cloud data warehouse
- 🐬 MySQL - Relational database
- 🐘 PostgreSQL - Advanced relational database
- 🍃 MongoDB - Document database
- ☁️ GCS - Google Cloud Storage
- 🌊 Kafka - Event streaming
- 📮 Pub/Sub - Google messaging

## Connection Testing and Validation

### Test Connection Feature

![Test Connection](./images/test-connection.png)
*Connection testing interface with real-time validation*

Before saving your configuration, test the connection to ensure:
- Network connectivity is established
- Authentication credentials are valid
- Required permissions are granted
- Service endpoints are reachable

**Connection Status Indicators:**
- ✅ **Connected** - Connection successful and ready to use
- ⚠️ **Warning** - Connected with minor issues or recommendations
- ❌ **Failed** - Connection failed, check configuration
- 🔄 **Testing** - Connection test in progress

### Troubleshooting Connection Issues

![Connection Troubleshooting](./images/connection-troubleshooting.png)
*Connection troubleshooting guide with common issues and solutions*

**Common Issues:**
- **Network Timeout** - Check firewall settings and network connectivity
- **Authentication Failed** - Verify credentials and permissions
- **SSL Certificate** - Validate certificate chain and expiration
- **Service Unavailable** - Check service status and endpoint URLs

## Data Store Management Operations

### Editing Data Store Configurations

Click the edit icon (✏️) to modify existing data store configurations:

![Edit Datastore](./images/edit-datastore.png)
*Edit data store configuration form with pre-populated values*

**Editable Elements:**
- Connection parameters and credentials
- Basic information (name, description, region)
- Advanced settings and custom parameters
- Security and encryption settings

### Deleting Data Store Configurations

Remove data stores you no longer need:

![Delete Confirmation](./images/delete-confirmation.png)
*Confirmation dialog for deleting data store configurations*

**Safety Features:**
- Confirmation dialog prevents accidental deletion
- Configuration details shown for verification
- Dependency checking for active connections
- Backup recommendations before deletion

## Integration with Data Catalog

### Automatic Discovery Integration

![Catalog Integration](./images/catalog-integration.png)
*How datastore configurations integrate with data catalog discovery*

Configured data stores automatically integrate with:
- **Metadata Scanning** - Automatic discovery of schemas and tables
- **Data Catalog Population** - Assets appear in the searchable catalog
- **Lineage Tracking** - Automatic data flow mapping
- **Quality Monitoring** - Continuous data quality assessment

### Connection Health Monitoring

![Health Monitoring](./images/health-monitoring.png)
*Real-time health monitoring for all configured data stores*

Monitor the health of your data store connections:
- **Connection Status** - Real-time connection health
- **Performance Metrics** - Query response times and throughput
- **Error Rates** - Connection failure and retry statistics
- **Uptime Tracking** - Service availability monitoring

## Best Practices

### Naming Conventions

![Naming Conventions](./images/naming-conventions.png)
*Recommended naming conventions for data store configurations*

Follow consistent naming patterns:
- **Environment Prefixes** - dev-, staging-, prod-
- **Category Indicators** - warehouse-, lake-, stream-
- **Team Ownership** - analytics-mysql, marketing-bigquery
- **Geographic Regions** - us-east-mysql, eu-west-postgres

### Security Guidelines

![Security Guidelines](./images/security-guidelines.png)
*Security best practices for data store configurations*

- **Credential Rotation** - Regular password and key updates
- **Network Security** - VPN/VPC access controls
- **Encryption Standards** - TLS 1.3 for data in transit
- **Access Auditing** - Log all configuration changes

## Next Steps

Once your data stores are configured:

1. **[Onboard Your Data Catalog](../onboarding-catalog/index.md)** - Start cataloging your data assets
2. **Test Connections** - Verify all configurations are working
3. **Set Up Monitoring** - Configure health and performance monitoring
4. **Enable Discovery** - Allow automatic metadata scanning

## Need Help?

![Support Resources](./images/support-resources.png)
*Available support resources and help documentation*

- **📖 Documentation** - Comprehensive configuration guides
- **💬 Community** - User forums and discussions  
- **🎓 Training** - Interactive tutorials and best practices
- **🆘 Support** - Direct technical assistance for configuration issues

Contact our support team for assistance with datastore configuration and troubleshooting. 