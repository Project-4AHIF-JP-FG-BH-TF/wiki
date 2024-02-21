<details>
 <summary>
    <span class="green">POST</span> <code><b>/api/file/upload</b></code> (upload new log-messages to the server)
</summary>

##### Responses

> | name | type     | data type          | description                          |
> |------|----------|--------------------|--------------------------------------|
> | *    | required | File[] (Multipart) | An list of .tar.xz files to upload   |


> | http code | response              |
> |-----------|-----------------------|
> | `200`     | successfully uploaded |
> | `400`     | bad request           |
> | `500`     | internal server error |

</details>