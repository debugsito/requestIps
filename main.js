class requestIPS {

    request_handled(ip) {
        // store count requests of ips
        this.counts[ip] = (this.counts[ip] || 0) + 1

        // store high top
        let top = 0
        while (top < this.tops.length && this.tops[top] !== ip) {
            ++top
        }

        // look for the top that corresponds
        while (top > 0 && this.counts[ip] >= this.counts[this.tops[top - 1]] ) {
            this.tops[top] = this.tops[top - 1]
            top -= 1
        }
        this.tops[top] = ip

        // max tops = 100
        this.tops.length = this.tops.length>100?100:this.tops.length;
    }
    top100() {
        //return tops
        return this.tops
    }

    clear() {
        //clear counts
        this.counts = {}
        //clear tops
        this.tops = []
    }

    getRandomInt(min, max) {
        //random int
        return Math.floor(Math.random() * (max - min)) + min;
    }
    getRandomIp() {
        //random ip
        return this.getRandomInt(150,255)+'.'+this.getRandomInt(100,255)+'.'+this.getRandomInt(100,255)+'.'+this.getRandomInt(100,255);
    }
}

const requests = new requestIPS()
requests.clear();
//test with 1e6
for(let i=0; i<= 1e6; i++) {
    requests.request_handled(requests.getRandomIp());
}

console.log(requests.top100())