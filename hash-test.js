import bcrypt from "bcryptjs";

async function test() {
    try {
        const res = await bcrypt.hash("123456",10);
        console.log("res: ", res);
    } catch (err) {
        console.error('hash error: ', err)
    }
}

test();