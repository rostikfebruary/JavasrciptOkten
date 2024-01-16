fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersContainer = document.createElement('div');
        usersContainer.classList.add('users-container');
        for (const user of users) {
            let div = document.createElement('div')
            div.classList.add('inner-users')
            let btn = document.createElement('button')
            let a = document.createElement('a')

            div.innerText = `${user.id} -  ${user.name}`
            btn.innerText = 'more'
            btn.onclick = function () {
                a.href = `user-details.html?id=${user.id}`;

            }
            a.appendChild(btn)
            div.appendChild(a)
            usersContainer.appendChild(div);

        }
        document.body.appendChild(usersContainer);
    })

