# url-shortener

My take on a URL Shortener with Serverless

This services exposes CRUD endpoints via API Gateway:

- Create shorturl
- Read shorturl
- Update shorturl
- Delete shorturl

---

One single lambda can service all CRUD operations

- add custom domain
- add database connection to dynamodb
- use nanoid to generate unique urls

---

## Database record

Maybe add `description` and `customUrl`

```json
{
  "userId": "",
  "longUrl": "",
  "shortUrl": "",
  "createdAt": "",
  "updatedAt": "",
  "expiresAt": ""
}
```

## Create shorturl

Request:

```bash
$curl POST baseurl.com/url
```

```json
{ "url": "www.example.com/blog/#get-new-site" }
```

Response:

```json
{ "url": "sh.url.com/${id}" }
```

## Read shorturl

```
GET baseurl.com/url/${id}
```

## Update shorturl

```
PUT baseurl.com/url/${id}
```

## Delete shorturl

```
DELETE baseurl.com/url/${id}
```
