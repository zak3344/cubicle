module.exports = {
    development: {
        PORT: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/cubes',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjKUN3/WOJSq',
        TOKEN_COOKIE_NAME: 'cubicale_token'
    },
    production: {
        PORT: process.env.PORT,
        DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
        JWT_SECRET: process.env.JWT_SECRET,
        TOKEN_COOKIE_NAME: process.env.TOKEN_COOKIE_NAME
    }
};
// '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjHJK3/WOJSq'

// 'cubicale_token'