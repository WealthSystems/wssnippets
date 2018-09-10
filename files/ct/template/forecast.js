/*
 CRANE TRANSFRMATION DESCRIPTOR - FORECAST TEMPLATE

 {
"source": [{
    "connection": {
        "cassandraConnection": {
            "keyspaceName": "env_tenant_datalake",
            "tableName": "table"
        }
    },
    "alias": "tableAlias"
}, {
    "connection": {
        "forecastConnection": {
            "schema": "myschema",
            "datasetName": "mydataset"
        }
    },
    "alias": "refDsAlias"
}],
"target": {
    "plugin":"forecast",
    "forecastFieldRelations":[{
        "sourceDataset":"mydataset"
        "sourceField":"id",
        "targetField":"ref_dataset_id"
    }]
    "connection": {
        "cassandraConnection": {
            "keyspaceName": "env_tenant_forecast",
            "tableName": "datasetName"
        }
    },
    "deletion":{
        "isSoftDelete": false
    },
    "saveMode":"cdcMerge",
    "primaryKeys": ["id"]
},
"sql": "SELECT a.id, a.name, b.id as ref_dataset_id, b.name as ref_name FROM ${tableAlias} a LEFT JOIN ${refDsAlias} b ON a.ds_id = b.id"
}
*/
{
    ct-source-default,
    ct-target-forecast,
    ct-component-sql
}