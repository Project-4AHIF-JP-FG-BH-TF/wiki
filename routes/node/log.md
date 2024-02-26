<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/log/{session-uuid}</b></code> (get log messages of a session)
</summary>

##### Query Parameters

> | name                   | type     | data type         | description                                |
> |------------------------|----------|-------------------|--------------------------------------------|
> | from                   | required | int               | first index of the returned logs           |
> | count                  | required | int               | max count of returned logs                 |
> | files                  | required | string[]          | a list of all used file names              |
> | order                  | optional | "ASC" or "DESC"   | how the data should be sorted              |       
> | filters.date.from      | optional | Date              | start of range of valid dates              |
> | filters.date.to        | optional | Date              | end of range of valid dates                |
> | filters.ip             | optional | string            | only ip to be returned                     |
> | filters.text           | optional | string            | text to be included in the content         |
> | filters.regex          | optional | bool              | if the text should be interpreted as regex |
> | filters.classification | optional | "info" or "error" | only classification to be returned         |

##### Responses

> | http code | response                |
> |-----------|-------------------------|
> | `200`     | `{logs: logEntry[]}`    |
> | `400`     | missing/wrong body data |
> | `500`     | internal server error   |

LogEntry data structure

```ts
{
    session_id: UUID;
    file_name: string;
    entry_nr: number;
    creation_date: Date;
    classification: "info" | "error";
    service_ip: string | undefined;
    user_id: string | undefined;
    user_session_id: string | undefined;
    java_class: string;
    content: string;
}
```

</details>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/log/{session-uuid}/ips</b></code> (get all possible ips)
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
> | filters.classification | optional | "info" or "error" | only classification to be returned         |

##### Responses

> | http code | response                |
> |-----------|-------------------------|
> | `200`     | `{ips: string[]}`       |
> | `400`     | missing/wrong body data |
> | `500`     | internal server error   |

</details>