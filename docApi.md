Global
======
key : global:nextUserId 9134 <br />
key : global:nextSessionId 718 <br />
key : global:nextEventId 4872 <br />
Set : global:sessions 154 486 371 149 <br />
Set : global:events 1345 842 5489 316 4676 3464 343 <br />

Session
=======
Hash : session:541 creator 245 min 2 max 5 <br />
Set : session:541:events 597 234 674 315 <br />

Event
=====
Hash : event:3458 nom Patate desc "Je ne mange que des patates" dateDeb 01/04/2012|15:12 dateFin 01/04/2012|19:20 maxPlace 7 <br />
List : event:3458:inscrit 487 1364 1453 4731 21 645 317 <br />
Key : event:3458:plein 1 <br />

User
====
Hash : user:4731 nom Deschapeau prenom Yvan email deschapy@etu-acy.fr login deschapy mdp JhgdbfJKH54s2df54 grade 1 <br />
Set : user:4731:eventInscrit 154 621 458 3187 <br />
Set : user:4731:sessionCree 134 348 <br />
Set : user:4731:sessionVisible 541 348 24 418 <br />
Key : user:deschapy 4731 <br />

Key : user:4731:token sd4687RQFfzqFE45ssef54QF <br />
Key : user:sd4687RQFfzqFE45ssef54QF:id 4731 <br />


Sessions : 
/api/sessions

<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>All sessions</td>
    <td>New session</td>
    <td>¤</td>
    <td>¤</td>
  </tr>
</table>

Session :
/api/session/5
<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>session 5</td>
    <td>¤</td>
    <td>modif session 5</td>
    <td>suppr session 5</td>
  </tr>
</table>

Events :
/api/events
<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>All events</td>
    <td>New event</td>
    <td>¤</td>
    <td>¤</td>
  </tr>
</table>

Event :
/api/event/5
<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>event 5</td>
    <td>¤</td>
    <td>modif event 5</td>
    <td>suppr event 5</td>
  </tr>
</table>

Users :
/api/users
<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>All user</td>
    <td>New user</td>
    <td>¤</td>
    <td>¤</td>
  </tr>
</table>

User :
/api/user/5<table>
  <tr>
    <th>GET</th>
    <th>POST</th>
    <th>PUT</th>
    <th>DELETE</th>
  </tr>
  <tr>
    <td>user 5</td>
    <td>¤</td>
    <td>modif user 5</td>
    <td>suppr user 5</td>
  </tr>
</table>