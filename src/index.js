module.exports = function makeExchange(currency) {
    const bank = [{
        coin: 50,
        count: 0,
        name: 'H'
    },{
        coin: 25,
        count: 0,
        name: 'Q'
    },{
        coin: 10,
        count: 0,
        name: 'D'
    },{
        coin: 5,
        count: 0,
        name: 'N'
    },{
        coin: 1,
        count: 0,
        name: 'P'
    }];

    let i = 0;
    const result = {};
    if(currency > 0 && currency < 10000) {
        while(i < bank.length) {
            for(currency; currency >= bank[i].coin; currency -= bank[i].coin) {
                bank[i].count++;
                if(bank[i].count > 0){
                    result[bank[i].name] = bank[i].count;
                }
            }
            i++;
        }
        return result;
    }
    else if(currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};     
    }
    else {
        return {};     
    }
}
