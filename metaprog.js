let handler = {
    get(target, name) {
        return name in target ? target[name] : 55
    }
}

let p = new Proxy({}, handler)
p.a = 51
console.log(p.a +", "+ p.b) // 51, 55
