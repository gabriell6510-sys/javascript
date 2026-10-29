let times = ['Palmeiras', 'Corinthias','Santos','Sao Paulo']

for (let i = 0; times.length; i += 1) {
    for (let j = 0; j < times.length; j += 1) {
        if (i != j) 
            console.log(`${times[i]} x ${times[j]}`)
    }
}

