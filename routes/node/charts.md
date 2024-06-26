<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/charts/classificationChart/{uuid}</b></code> (returns chart data)
</summary>

##### Query Parameters

> | name                   | type     | data type         | description                                |
> |------------------------|----------|-------------------|--------------------------------------------|
> | files                  | required | string[]          | a list of all used file names              |
> | filters.date.from      | optional | Date              | start of range of valid dates              |
> | filters.date.to        | optional | Date              | end of range of valid dates                |
> | filters.ip             | optional | string            | only ip to be returned                     |
> | filters.text           | optional | string            | text to be included in the content         |
> | filters.regex          | optional | bool              | if the text should be interpreted as regex |


##### Responses

> | http code | response                                            |
> |-----------|-----------------------------------------------------|
> | `200`     | `{data: {classification: string, count: number}[]}` |
> | `400`     | bad request                                         |

</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/charts/classChart/{uuid}</b></code> (returns class chart data)
</summary>

##### Query Parameters

> | name                   | type     | data type         | description                                |
> |------------------------|----------|-------------------|--------------------------------------------|
> | files                  | required | string[]          | a list of all used file names              |
> | filters.date.from      | optional | Date              | start of range of valid dates              |
> | filters.date.to        | optional | Date              | end of range of valid dates                |
> | filters.ip             | optional | string            | only ip to be returned                     |
> | filters.text           | optional | string            | text to be included in the content         |
> | filters.regex          | optional | bool              | if the text should be interpreted as regex |


##### Responses

> | http code | response                                        |
> |-----------|-------------------------------------------------|
> | `200`     | `{data: {java_class: string, count: number}[]}` |
> | `400`     | bad request                                     |

</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/charts/classificationTimeChart/{uuid}</b></code> (returns classification time chart data)
</summary>

##### Query Parameters

> | name                   | type     | data type         | description                                |
> |------------------------|----------|-------------------|--------------------------------------------|
> | files                  | required | string[]          | a list of all used file names              |
> | filters.date.from      | optional | Date              | start of range of valid dates              |
> | filters.date.to        | optional | Date              | end of range of valid dates                |
> | filters.ip             | optional | string            | only ip to be returned                     |
> | filters.text           | optional | string            | text to be included in the content         |
> | filters.regex          | optional | bool              | if the text should be interpreted as regex |


##### Responses

> | http code | response                                           |
> |-----------|----------------------------------------------------|
> | `200`     | `{data: { <date>: { <classification>: number } }}` |
> | `400`     | bad request                                        |

</details>