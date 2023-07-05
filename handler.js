'use strict';
 
module.exports.getVersion = async (event) => {
    return{
        statusCode:200,
        body: JSON.stringify(
            {
                message: 'sls ci/cd v2 ${process.env.STATUS}'
            },
            null,
            2
        ),
    };
};
