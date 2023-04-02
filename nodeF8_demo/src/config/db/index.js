const mongoose = require('mongoose');

async function conect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ma_sell_clothes');
        console.log('Connect successfully!')
    } catch (error) {
        console.log('Connect | error: ' + error);
    }
}

module.exports = { conect };