<style>
    .blue{
        background-color: blue;
        border-radius: 3px;
        font-weight: bold;
        padding: 2px 4px;
        text-align: center;

        display: inline-block;
    }

    .green{
        background-color: green;
        border-radius: 3px;
        font-weight: bold;
        padding: 2px 4px;
        text-align: center;

        display: inline-block;
    }
</style>

<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/session</b></code> (creates a new session)
</summary>

##### Responses

> | http code | response                       |
> |-----------|--------------------------------|
> | `200`     | `{uuid: (newly created uuid)}` |
> | `500`     |                                |

</details>

<details>
 <summary>
    <span class="green">POST</span> <code><b>/api/session/{uuid}</b></code> (renew last-refresh of session)
</summary>

this needs to be periodically called so the session does not close

##### Responses

> | http code | response                   |
> |-----------|----------------------------|
> | `200`     | `{uuid: (refreshed uuid)}` |
> | `500`     |                            |

</details>