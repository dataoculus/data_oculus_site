---
sidebar_position: 3
---

# Onboarding Your Data Catalog

Transform your data infrastructure into a comprehensive, searchable, and governed data catalog. DataOculus provides a user-friendly interface to configure, manage, and monitor all your data catalog integrations.

![Data Catalog Overview](./images/catalog-overview.png)
*DataOculus Metadata Catalog dashboard showing all configured catalog providers*

## Overview

The DataOculus catalog management interface provides:
- **Visual Configuration** - Configure catalog providers through an intuitive UI
- **Real-time Monitoring** - Track sync status and progress in real-time
- **Automated Scheduling** - Set up recurring sync schedules with cron expressions
- **Multi-Provider Support** - Connect to multiple catalog platforms simultaneously
- **Centralized Management** - Manage all catalog integrations from one place

## Getting Started

### Accessing the Catalog Management Interface

Navigate to **Settings > Metadata Catalog** in your DataOculus dashboard to access the catalog management interface.

![Catalog Management Interface](./images/catalog-interface.png)
*Main catalog management interface with existing configurations*

## Supported Catalog Providers

DataOculus supports integration with the following data catalog platforms:

### ✅ **Fully Supported**
- **Google Data Catalog** - Enterprise data discovery and metadata management
- **DataHub** - Open-source metadata platform by LinkedIn
- **OpenMetadata** - Open-source data discovery and collaboration platform
- **Kaggle Data Catalog** - Access Kaggle's public datasets
- **Unity Data Catalog** - Databricks' unified governance solution

### 🚧 **Coming Soon**
- **Azure Data Catalog** - Microsoft's data discovery service
- **AWS Data Catalog** - Amazon's metadata management service

## Adding a New Catalog Configuration

### Step 1: Start Configuration

Click the **"Add New Configuration"** button to begin setting up a new catalog integration.

![Add New Configuration](./images/add-new-config.png)
*Add new configuration button in the catalog interface*

### Step 2: Select Catalog Provider

Choose your catalog provider from the dropdown menu. Each provider has different configuration requirements.

![Provider Selection](./images/provider-selection.png)
*Catalog provider selection dropdown with available options*

### Step 3: Configure Provider Settings

Each catalog provider requires specific configuration parameters:

#### Google Data Catalog
![Google Data Catalog Config](./images/google-catalog-config.png)
*Google Data Catalog configuration form*

**Required Fields:**
- **Project ID** - Your Google Cloud project identifier
- **Project Location** - Geographic location of your project
- **Service Account Key** - JSON service account credentials (stored securely)

#### DataHub
![DataHub Config](./images/datahub-config.png)
*DataHub configuration form*

**Required Fields:**
- **URL** - DataHub instance URL (e.g., `https://your-datahub.company.com`)


#### Unity Data Catalog (Databricks)
![Unity Catalog Config](./images/unity-catalog-config.png)
*Unity Data Catalog configuration form*

**Required Fields:**
- **Databricks Workspace URL** - Your Databricks workspace URL
- **Unity Catalog URL** - Auto-populated based on workspace URL
- **Personal Access Token** - Databricks PAT (stored securely as secret)

#### Kaggle Data Catalog
![Kaggle Config](./images/kaggle-config.png)
*Kaggle Data Catalog configuration form*

**Required Fields:**
- **Cookie** - Kaggle session cookie for authentication
- **X-XSRF Token** - CSRF protection token

### Step 4: Secure Secret Management

For sensitive fields like API keys and tokens, DataOculus provides secure secret storage:

![Secret Management](./images/secret-management.png)
*Secure secret input and storage interface*

1. Enter your secret value in the input field
2. Click **"Set Secret"** to securely store the credential
3. The secret is encrypted and stored safely
4. Only the secret path reference is saved in the configuration

## Managing Existing Configurations

### Configuration Overview Table

All configured catalog providers are displayed in an organized table with the following information:

![Configuration Table](./images/configuration-table.png)
*Table showing all configured catalog providers with status and actions*

**Columns:**
- **Provider** - The catalog platform (Google, DataHub, etc.)
- **Name** - Configuration display name
- **Status** - Real-time sync status with visual indicators
- **Sync Schedule** - Human-readable schedule description
- **Actions** - Edit, sync, and delete operations

### Real-Time Status Monitoring

DataOculus provides real-time status updates for all catalog sync operations:

![Status Indicators](./images/status-indicators.png)
*Different status indicators for catalog sync operations*

**Status Types:**
- 🔄 **Running** - Sync currently in progress (auto-refreshing)
- ✅ **Completed** - Sync finished successfully
- ✅ **Finished** - Sync completed without errors
- ❌ **Failed** - Sync encountered errors
- ❌ **Error** - System error during sync
- ❓ **Unknown** - Status unavailable

## Sync Scheduling

### Setting Up Automated Sync

Configure recurring sync schedules using the visual cron editor:

![Cron Scheduler](./images/cron-scheduler.png)
*Visual cron expression editor for scheduling automated syncs*

**Common Schedule Patterns:**
- **Daily at 1:00 PM** - `0 13 * * *`
- **Weekdays at 9:00 AM** - `0 9 * * 1-5`
- **Every 6 hours** - `0 */6 * * *`
- **Weekly on Sundays** - `0 2 * * 0`

### Manual Sync Operations

Start or stop sync operations manually using the action buttons:

![Sync Actions](./images/sync-actions.png)
*Manual sync control buttons for immediate operations*

**Available Actions:**
- ▶️ **Start Sync** - Begin immediate sync operation
- ⏸️ **Pause/Stop** - Stop currently running sync
- 🔄 **Auto-refresh** - Status updates every 30 seconds for running syncs

## Configuration Management

### Editing Configurations

Click the edit icon (✏️) to modify existing configurations:

![Edit Configuration](./images/edit-configuration.png)
*Edit configuration form with sync scheduling options*

**Editable Elements:**
- Connection parameters (URLs, credentials)
- Sync schedule settings
- Configuration name and description
- Advanced options and filters

### Deleting Configurations

Remove configurations you no longer need:

![Delete Confirmation](./images/delete-confirmation.png)
*Confirmation dialog for deleting catalog configurations*

**Safety Features:**
- Confirmation dialog prevents accidental deletion
- Configuration details shown for verification
- Permanent removal from all systems


### Common Issues & Solutions

![Troubleshooting Guide](./images/troubleshooting.png)
*Common issues and their solutions in the interface*

**Connection Issues:**
- Verify network connectivity
- Check authentication credentials
- Validate URL endpoints
- Review firewall settings

**Sync Failures:**
- Check error logs for specific issues
- Verify permissions on source systems
- Monitor resource usage and limits
- Review data volume and timeout settings

## Next Steps

Once your catalog integrations are configured and running:

1. **[Explore Features](../features/index.md)** - Discover advanced search and discovery capabilities
2. **Set up Data Quality** - Implement automated quality monitoring
3. **Configure Governance** - Establish data governance policies
4. **Train Your Team** - Enable self-service data discovery

## Need Help?

![Support Resources](./images/support-resources.png)
*Available support resources and help documentation*

- **📖 Documentation** - Comprehensive guides and tutorials
- **💬 Community** - User forums and discussions
- **🎓 Training** - Interactive tutorials and webinars
- **🆘 Support** - Direct technical assistance

Contact our support team for assistance with catalog configuration and troubleshooting. 