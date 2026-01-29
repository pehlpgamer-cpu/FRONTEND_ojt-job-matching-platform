# Calling Protected API Routes

```javascript
const token = sessionStorage.getItem("token");

fetch(`${baseUrl}/user`, {
  headers: {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }
})
.then(res => res.json())
.then(data => console.log("User data:", data))
.catch(err => console.error(err));
```

