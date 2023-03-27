const env = process.env.NODE_ENV || 'dev';

const config = () =>{
    switch (env) {
        case 'dev':
            return {
                bd_string: 'mongodb+srv://claitonlc:p4zAPxJMyCRDmYOu@cluster0.wklnrfc.mongodb.net/User',
                jwt_pass: 'batatafrita123',
                jwt_expires_in: '7d'
            }
            case 'hml':
                return {
                    bd_string: 'mongodb+srv://claitonlc:p4zAPxJMyCRDmYOu@cluster0.wklnrfc.mongodb.net/User',
                    jwt_pass: 'batatafrita123',
                    jwt_expires_in: '7d'  
                }   
                 case  'prod':
                    return {
                        bd_string: 'mongodb+srv://claitonlc:p4zAPxJMyCRDmYOu@cluster0.wklnrfc.mongodb.net/User',
                        jwt_pass: 'batatafrita123',
                        jwt_expires_in: '7d'
                    }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();