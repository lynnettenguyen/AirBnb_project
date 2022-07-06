Navigate to: [ http://localhost:8000/api/csrf/restore ]

# /api/users (sign up)

```js
fetch('/api/users', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({
    email: 'name@email.com',
    firstName: 'Test',
    lastName: 'User',
    username: 'NewName',
    password: 'NewPassword'
  })
}).then(res => res.json()).then(data => console.log(data));
```

# /api/session (log in)

```js
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `auyxRHUQ-xhb88hY4yzeyc0FeVZfv_iHp85E`
  },
  body: JSON.stringify({ email: 'demo@user.io', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
```

# logout (delete token)

```js
fetch('/api/session', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  }
}).then(res => res.json()).then(data => console.log(data));
```

# delete review by review Id

```js
fetch('/api/rooms/1/reviews/1', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `auyxRHUQ-xhb88hY4yzeyc0FeVZfv_iHp85E`
  }
}).then(res => res.json()).then(data => console.log(data));
```

# create new booking

```js
fetch('/api/rooms/1/reservations', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `auyxRHUQ-xhb88hY4yzeyc0FeVZfv_iHp85E`
  },
  body: JSON.stringify({ startDate: '2024-01-02', endDate: '2024-01-03' })
}).then(res => res.json()).then(data => console.log(data));
```

# delete a booking by id

```js
fetch('/api/profile/reservations/10', {
  method: 'DELETE',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `	auyxRHUQ-xhb88hY4yzeyc0FeVZfv_iHp85E`
  }
}).then(res => res.json()).then(data => console.log(data));
```
