<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/log/{session-uuid}</b></code> (get log messages of a session)
</summary>

##### Parameters

> | name  | type     | data type | description                      |
> |-------|----------|-----------|----------------------------------|
> | from  | required | int       | first index of the returned logs |
> | count | required | int       | max count of returned logs       |
> | files | required | string[]  | a list of all used file names    |

##### Responses

> | http code | response            |
> |-----------|---------------------|
> | `200`     | `{logs: {todo!}[]}` |
> | `500`     |                     |

</details>