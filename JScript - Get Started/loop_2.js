const X = { 10:'AA', 20:'BB', 30:'CC' }

Object.entries(X).forEach(([key, val]) => {
    console.log({ key, val })
})