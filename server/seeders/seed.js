const db = require('../config/connection');
const { User, Task } = require('../models');
const userSeeds = require('./userSeeds.json');
const task = require('./taskSeeds.json')

////user and task
db.once('open', async () => {
    try {
        await User.deleteMany({})
        await Task.deleteMany({})

        await User.create(userSeeds)
        await Task.create(task)
        
    } catch (err) {
        console.error(err);
        process.exit(1);
      }
    
      console.log('all done!');
      process.exit(0);
});
