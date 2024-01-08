<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/log/{session-uuid}</b></code> (get log messages of a session)
</summary>

##### Body Parameters

> | name  | type     | data type | description                      |
> |-------|----------|-----------|----------------------------------|
> | from  | required | int       | first index of the returned logs |
> | count | required | int       | max count of returned logs       |
> | files | required | string[]  | a list of all used file names    |

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
  service_ip: string;
  user_id: string;
  user_session_id: string;
  java_class: string;
  content: string;
}
```

</details>