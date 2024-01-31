<details>
 <summary>
    <span class="blue">GET</span> <code><b>/api/session</b></code> (creates a new session)
</summary>

##### Responses

> | http code | response                       |
> |-----------|--------------------------------|
> | `200`     | `{uuid: (newly created uuid)}` |
> | `500`     | internal server error          |

</details>

<details>
 <summary>
    <span class="green">POST</span> <code><b>/api/session/{uuid}</b></code> (renew last-refresh of session)
</summary>

this needs to be periodically called so the session does not close

##### Responses

> | http code | response                                 |
> |-----------|------------------------------------------|
> | `200`     | `{uuid: (refreshed uuid)}`               |
> | `404`     | session not found                        |
> | `500`     | internal server error or unknown session |

</details>