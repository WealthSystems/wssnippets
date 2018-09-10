/*
 CRANE TRANSFRMATION DESCRIPTOR - QION CLOUD INTEGRATION TEMPLATE

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
"externalExchange": [{
    "referenceColumn": "ref_id",
    "connection": {
        "jdbcConnection": {
            "databaseUri": "jdbc:postgresql://uri",
            "databaseName": "refDB",
            "schema": "tenantName",
            "table": "ref"
        }
    }
}],
"target": {
    "connection": {
        "jdbcConnection": {
            "databaseUri": "jdbc:postgresql://uri",
            "databaseName": "targetDB",
            "schema": "tenantName",
            "table": "targetTable"
        }
    },
    "deletion":{
        "isSoftDelete": true,
        "controlField": {
            "fieldName": "deleted",
            "valueWhenDeleted": "true"
        }
    },
    "saveMode":"cdcMerge",
    "isCloudEntity": true,
    "primaryKeys": ["id"]
},
"sql": "select id, ref_id FROM ${tableAlias}"
}
*/
{
    ct-source-default,
    ct-transform-ext-exchange,
    ct-target-integration,
    ct-component-sql
}