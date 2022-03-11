export const check = (req, res, next) => {
    const status = true;

    if (status) {
        console.log("Hello bro");
        next();
    } else {
        console.log("Té ngay");
    }
}