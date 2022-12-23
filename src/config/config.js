module.exports = {
    development: {
        port: process.env.PORT || 3000,
        DB_CONNECTION_STRING: 'mongodb://localhost:27017/cubes',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjKUN3/WOJSq',
        TOKEN_COOKIE_NAME: 'cubicale_token'
    },
    production: {
        port: 5000,
        DB_CONNECTION_STRING: 'your_atlas_connection_string',
        JWT_SECRET: '$2y$10$xzlJAyCJAfoaBZIez.I0EO3KZAuXr66Voh/YmIQrGnjHJK3/WOJSq',
        TOKEN_COOKIE_NAME: 'cubicale_token'
    }
};
