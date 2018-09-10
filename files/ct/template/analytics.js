/*
 CRANE TRANSFRMATION DESCRIPTOR - ANALYTICS TEMPLATE

 {
"source": [{
    "connection": {
        "cassandraConnection": {
            "keyspaceName": "env_tenant_datalake",
            "tableName": "table"
        }
    },
    "alias": "tableAlias"
}],
"target": {
    "plugin":"analytics",
    "analyticsMetadata": {
        "datasetAlias": "My Dataset",
        "description": "Dataset Description",
        "icon": "fa-icon",
        "fieldMetadata": [{
            "fieldName": "name",
            "alias": "Some Name",
            "description": "Field Description",
            "dataType": "text"
        }]
    },
    "connection": {
        "cassandraConnection": {
            "keyspaceName": "env_tenant_analytics",
            "tableName": "datasetName"
        }
    },
    "deletion":{
        "isSoftDelete": false
    },
    "saveMode":"cdcMerge",
    "primaryKeys": ["id"]
},
"sql": "select id, ref_id FROM ${tableAlias}"
}
*/
{
    ct-source-default,
    ct-target-analytics,
    ct-component-sql
}