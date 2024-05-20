const mongoose = require('mongoose');
const mongoString = process.env.ATLAS_URI

try {
     mongoose.connect(mongoString).then(() => 
        console.log("DB Connected Successfully")
    ).catch((err) => 
        console.log(err)
    );
} catch (err) {
    console.log(err);
}
