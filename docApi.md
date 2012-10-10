Global
======
key : global:nextUserId 9134
key : global:nextSessionId 718
key : global:nextEventId 4872
Set : global:sessions 154 486 371 149
Set : global:events 1345 842 5489 316 4676 3464 343

Session
=======
Hash : session:541 creator 245 min 2 max 5
Set : session:541:events 597 234 674 315

Event
=====
Hash : event:3458 nom Patate desc "Je ne mange que des patates" dateDeb 01/04/2012|15:12 dateFin 01/04/2012|19:20 maxPlace 7
List : event:3458:inscrit 487 1364 1453 4731 21 645 317
Key : event:3458:plein 1

User
====
Hash : user:4731 nom Deschapeau prenom Yvan email deschapy@etu-acy.fr login deschapy mdp JhgdbfJKH54s2df54 grade 1
Set : user:4731:eventInscrit 154 621 458 3187
Set : user:4731:sessionCree 134 348
Set : user:4731:sessionVisible 541 348 24 418
Key : user:deschapy 4731

Key : user:4731:token sd4687RQFfzqFE45ssef54QF
Key : user:sd4687RQFfzqFE45ssef54QF:id 4731


Sessions
/api/sessions
+--------------+-------------+-----+--------+
|      GET     |     POST    | PUT | DELETE |
+--------------+-------------+-----+--------+
| All sessions | New session |  ¤  |    ¤   |
+--------------+-------------+-----+--------+

Session
/api/session/5
+-----------+------+-------------------+-----------------+
|     GET   | POST |        PUT        |     DELETE      |
+-----------+------+-------------------+-----------------+
| session 5 |   ¤  |  modif session 5  | suppr session 5 |
+-----------+------+-------------------+-----------------+

Events
/api/events
+------------+-----------+-----+--------+
|     GET    |    POST   | PUT | DELETE |
+------------+-----------+-----+--------+
| All events | New event |  ¤  |    ¤   |
+------------+-----------+-----+--------+

Event
/api/event/5
+---------+------+-----------------+---------------+
|    GET  | POST |       PUT       |    DELETE     |
+---------+------+-----------------+---------------+
| event 5 |   ¤  |  modif event 5  | suppr event 5 |
+---------+------+-----------------+---------------+

Users
/api/users
+----------+----------+-----+--------+
|    GET   |   POST   | PUT | DELETE |
+----------+----------+-----+--------+
| All user | New user |  ¤  |    ¤   |
+----------+----------+-----+--------+

User
/api/user/5
+--------+------+----------------+--------------+
|   GET  | POST |       PUT      |    DELETE    |
+--------+------+----------------+--------------+
| user 5 |   ¤  |  modif user 5  | suppr user 5 |
+--------+------+----------------+--------------+

+----------+----------+-----+--------+
|    GET   |   POST   | PUT | DELETE |
+----------+----------+-----+--------+
| All user | New user |  ¤  |    ¤   |
+----------+----------+-----+--------+

User
/api/user/5
+--------+------+----------------+--------------+
|   GET  | POST |       PUT      |    DELETE    |
+--------+------+----------------+--------------+
| user 5 |   ¤  |  modif user 5  | suppr user 5 |
+--------+------+----------------+--------------+